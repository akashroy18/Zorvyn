import express from 'express'
import { createRecord,getRecords,updateRecord,deleteRecord } from "../controllers/record.controller.js"
import { protect,authorize } from '../middleware/auth.middleware.js'
const router = express.Router()
router.post("/create_Record",protect,authorize("admin"),createRecord)
router.get("/getrecord", protect, authorize("viewer", "analyst", "admin"), getRecords)
router.put("/:id", protect, authorize("admin"), updateRecord)
router.delete("/:id", protect, authorize("admin"), deleteRecord)
export default router