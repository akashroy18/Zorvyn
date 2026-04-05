import userModel from "../models/user.model.js"
export const getalluser = async (req,res)=>{
    try {
        const users = await userModel.find().select("-password")
        return res.status(200).json({
            count:users.length,
            users
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body

    const user = await userModel.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    user.role = role
    await user.save()

    return res.status(200).json({
      message: "User role updated",
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
export const toggleUserStatus = async (req, res) => {
  try {
    const { isActive } = req.body

    const user = await userModel.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    user.isActive = isActive
    await user.save()

    return res.status(200).json({
      message: "User status updated",
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}