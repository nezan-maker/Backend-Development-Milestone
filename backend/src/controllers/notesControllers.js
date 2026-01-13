
export const getNote = (Note) => async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in controller", error)
        res.status(500).send("Internal Server error")

    }
}
export const createNote = (Note) => async (req, res) => {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })
        const saved_note = await newNote.save()
        res.status(201).json(saved_note)
    }
    catch (error) {
        console.error("Error in loading controller", error);
        res.status(500).send("Internal Server error")
    }

}
export const updateNote = (Note) => async (req, res) => {
    try {
        const { title, content } = req.body
        const updated_note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
        if (!updated_note) {
            return res.status(404).send("Note not found")
        }
        res.status(200).json(updated_note)
    } catch (error) {
        console.error("Error in controllers", error);
        res.status(500).send("Internal server error !")
    }
}
export const deleteNote = (Note) => async (req, res) => {
    try {
        const to_be_deleted = await Note.findByIdAndDelete(req.params.id)
        if (!to_be_deleted) {
            return res.status(404).send("Note not found !")
        }
        res.status(200).send("Note deleted successfully")
    } catch (error) {
        console.error("Error in controllers", error);
        res.status(500).send("Internal server error !")
    }
}
