import express from "express"
import { createNote, deleteNote, getNote, updateNote } from "../controllers/notesControllers.js";
import { createNoteModel } from "../models/Note.js";

const createNoteRoutes = (notesDB) => {
    const router = express.Router();
    const Note = createNoteModel(notesDB)
    router.get("/", getNote(Note))
    router.post("/", createNote(Note))
    router.put("/:id", updateNote(Note))
    router.delete("/:id", deleteNote(Note))
    return router
}
export default createNoteRoutes
