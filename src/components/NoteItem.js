import React from "react";

export const NoteItem = (props) => {
  const { note } = props;
  return (
   
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.email}</h6>
          <p className="card-text">
            {note.password} lorem34

          </p>
          <a href="/" className="card-link">
            Card link
          </a>
          <a href="/" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};
