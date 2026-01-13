
import mongoose from "mongoose"
export const createNoteModel = (notesDB) => {
    if (notesDB.models.Note) {
        return notesDB.models.Note
    }
    const noteSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, { timestamps: true })
    return notesDB.model("Note", noteSchema)
}
