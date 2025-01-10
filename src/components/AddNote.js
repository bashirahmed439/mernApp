import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

export const AddNote = () => {
  const context = useContext(noteContext);
  const { AddNote } = context;
const navigate = useNavigate();
  const [note, setNote] = useState({ title: "",description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined
    ) {
    AddNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""})
  } else {
    navigate("/login");
  }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Name
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input value={note.description}
            name="description"
            className="form-control"
            id="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Description
          </label>
          <input value={note.tag}
            name="tag"
            className="form-control"
            id="tag"
            onChange={onChange}
          />
        </div>
        
        <button disabled={note.title.length<5 || note.description.length <5 } type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
