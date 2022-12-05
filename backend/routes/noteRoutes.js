import express from "express";
import {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} from "../controllers/noteController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

//protect middleware-help to retrieve id of user to get his notes
router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById) //bracket wla controller
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

export default router;
