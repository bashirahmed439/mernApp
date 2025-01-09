import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";
import { AddNote } from "./AddNote";
export const Notes = () => {
  const context = useContext(noteContext);

  const { notes, setNotes } = context;
  return (
    <>
      <AddNote />

      <div className="row my-3">
        <h1>Notes</h1>
        {notes.map((note) => {
          return <NoteItem key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};
