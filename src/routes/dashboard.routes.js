import express from 'express'
import { getCategorySummary,getSummary } from '../controllers/dashboard.controller.js'
import { protect,authorize } from '../middleware/auth.middleware.js'
const router = express.Router()
// Dashboard Routes
router.get(
  "/summary",
  protect,
  authorize("analyst", "admin"),
  getSummary
)

router.get(
  "/category",
  protect,
  authorize("analyst", "admin"),
  getCategorySummary
)
export default router