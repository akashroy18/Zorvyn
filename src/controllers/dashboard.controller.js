import recordModel from "../models/record.model.js"
import userModel from "../models/user.model.js"

export const getSummary = async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    const records = await recordModel.find({
      createdBy: user._id
    })

    let income = 0
    let expense = 0

    records.forEach(r => {
      if (r.type === "income") income += r.amount
      else expense += r.amount
    })

    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email
      },
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getCategorySummary = async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    const records = await recordModel.find({
      createdBy: user._id
    })

    const result = {}

    records.forEach(r => {
      if (!result[r.category]) {
        result[r.category] = 0
      }
      result[r.category] += r.amount
    })

    return res.status(200).json({
      user: {
        name: user.name,
        email: user.email
      },
      categories: result
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}