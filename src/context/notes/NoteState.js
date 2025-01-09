import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = [
    {
      id: "2www323",
      name: "hania1",
      email: "bashiruuu1hh@gmail.com",
      password: "1112222",
    },
    {
      id: "2323rrr3",
      name: "hania1ssssssssssssssss",
      email: "bashihh@gmail.com",
      password: "1112222",
    },
    {
      id: "23233rr4",
      name: "hania1ssssssssssssssss",
      email: "bashihh@gmail.com",
      password: "1112222",
    },
    {
      id: "232rrr322",
      name: "hania1ssssssssssssssss",
      email: "bashihh@gmail.com",
      password: "1112222",
    },
    {
      id: "23ddd23332",
      name: "hania1ssssssssssssssss",
      email: "bashihh@gmail.com",
      password: "1112222",
    },
    {
      id: "232322222",
      name: "hania1ssssssssssssssss",
      email: "bashihh@gmail.com",
      password: "lorem",
    },
  ];

  const [notes, setNotes] = useState(s1);
  // Add Note
  const AddNote = (name, emai, password) => {
    console.log("clieckeddd sadd notes");
    const note = {
      name: name,
      email: emai,
      password: password,
    };

    setNotes(notes.concat(note));
  };

  // Delete Note
  const DeleteNote = () => {};

  // Edit Note
  const EditNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, AddNote, DeleteNote, EditNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
