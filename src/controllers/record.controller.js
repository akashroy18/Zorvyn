import recordModel from "../models/record.model.js"
import userModel from "../models/user.model.js"

export const createRecord = async (req, res) => {
  try {
    const { amount, type, category, note, email } = req.body

    if (!amount || !type || !category || !email) {
      return res.status(400).json({
        message: "Amount, type, category and email are required"
      })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    const record = await recordModel.create({
      amount,
      type,
      category,
      note,
      date: Date.now(),
      createdBy: user._id
    })

    return res.status(201).json({
      message: "Record created successfully",
      record
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getRecords = async (req, res) => {
  try {
    let filter = {}

    if (req.user.role.toLowerCase() === "viewer") {
      filter.createdBy = req.user._id
    }

    const records = await recordModel
      .find(filter)
      .populate("createdBy", "name email")

    return res.status(200).json({
      count: records.length,
      records
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateRecord = async (req, res) => {
  try {
    const record = await recordModel.findById(req.params.id)

    if (!record) {
      return res.status(404).json({
        message: "Record not found"
      })
    }

    const updated = await recordModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    return res.status(200).json({
      message: "Record updated successfully",
      record: updated
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteRecord = async (req, res) => {
  try {
    const record = await recordModel.findById(req.params.id)

    if (!record) {
      return res.status(404).json({
        message: "Record not found"
      })
    }

    await recordModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      message: "Record deleted successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}