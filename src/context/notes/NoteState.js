import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const s1 = [];

  const [notes, setNotes] = useState(s1);

  const GetNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3NDUwMjZjNjlkMmRjYjM1NGQ0ZjRmIn0sImlhdCI6MTczNjM1NDUxOX0.A2YE0RG3RfbIMRBVqJH6L3R1bWB0VIXiec6MeoJcMoc",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add Note
  const AddNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3NDUwMjZjNjlkMmRjYjM1NGQ0ZjRmIn0sImlhdCI6MTczNjM1NDUxOX0.A2YE0RG3RfbIMRBVqJH6L3R1bWB0VIXiec6MeoJcMoc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete Note
  const DeleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3NDUwMjZjNjlkMmRjYjM1NGQ0ZjRmIn0sImlhdCI6MTczNjM1NDUxOX0.A2YE0RG3RfbIMRBVqJH6L3R1bWB0VIXiec6MeoJcMoc",
      },
    });
    console.log(response);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note
  const EditNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3NDUwMjZjNjlkMmRjYjM1NGQ0ZjRmIn0sImlhdCI6MTczNjM1NDUxOX0.A2YE0RG3RfbIMRBVqJH6L3R1bWB0VIXiec6MeoJcMoc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, AddNote, DeleteNote, EditNote, GetNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
