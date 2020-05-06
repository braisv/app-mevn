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

module.exports = router;