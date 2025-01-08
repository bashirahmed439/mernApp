import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
export const AddNote = () => {
  const context = useContext(noteContext);
  const { AddNote } = context;

  const [note, setNote] = useState({ title: "",description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    AddNote(note.title,note.description,note.tag);
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
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
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
          <input
            name="tag"
            className="form-control"
            id="tag"
            onChange={onChange}
          />
        </div>
        
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
