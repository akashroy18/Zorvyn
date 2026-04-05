import express from 'express'
import { getalluser,updateUserRole,toggleUserStatus } from '../controllers/admin.controller.js'
import { protect,authorize } from '../middleware/auth.middleware.js'
const router = express.Router()
router.get("/getUsers",protect,authorize("admin"),getalluser)
router.put("/:id/role", protect, authorize("admin"), updateUserRole)
router.put("/:id/status", protect, authorize("admin"), toggleUserStatus)
export default router