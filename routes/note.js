import express  from "express";
import Note     from "../models/Note";

const router = express.Router();

router.post('/newnote', async(req, res) => {
    const body = req.body;
    try {
        const noteDB = await Note.create(body);
        res.status(200).json(noteDB);
    } catch (err) {
        return res.status(500).json({
            message: 'Error in command',
            err
        });
    }
})

router.get('/note/:id', async(req, res) => {
    const noteId = req.params.id;
    try {
        const noteDB = await Note.findOne({ _id: noteId });
        res.json(noteDB);
    } catch (err) {
        return res.status(400).json({
            message: 'Error in command',
            err
        });
    }
})

router.get('/allnotes', async(req, res) => {
    try {
        const notesDB = await Note.find();
        res.json(notesDB);
    } catch (err) {
        return res.status(400).json({
            message: 'Error in command',
            err
        });
    }
})

router.delete('/note/:id', async(req, res) => {
    const noteId = req.params.id;
    try {
        const noteDB = await Note.findOneAndDelete({ _id: noteId });
        res.json(noteDB);
    } catch (err) {
        return res.status(400).json({
            message: 'Error in command',
            err
        });
    }
})

router.put('/note/:id', async(req, res) => {
    const noteId = req.params.id;
    const body = req.body;
    try {
        const noteDB = await Note.findOneAndUpdate({ _id: noteId }, body, { new: true });
        res.json(noteDB);
    } catch (err) {
        return res.status(400).json({
            message: 'Error in command',
            err
        });
    }
})

module.exports = router;