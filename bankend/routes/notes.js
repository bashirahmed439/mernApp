const express = require("express");
const router = express.Router();
var fetchusertoken = require("../middleware/mwauth");
const Notes = require("../models/Notes");
const NotesValidatoinRules = require("../validation/notes.validation");
const { body, validationResult } = require("express-validator");

router.get("/fetchallnotes", fetchusertoken, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

router.post(
  "/addnotes",
  NotesValidatoinRules.rule("addnotes"),
  fetchusertoken,
  async (req, res) => {
    // Check for validation errors
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put("/updatenotes/:id", fetchusertoken, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated
    let note = await Notes.findById(req.params.id);

    if (!note) {
      return res.status(404).send("Notes not found");
    }

    if (note.user.toString() != req.user.id) {
      return res.status(401).send("You are not authorized to delete this note");
    }

    const updateNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(updateNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/deletenote/:id", fetchusertoken, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    if (!note.user.id.toString() == req.user.id) {
      return res.status(401).send("You are not authorized to delete this note");
    }

    await Notes.findByIdAndDelete(req.params.id);

    res.json({ Success: "Note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
