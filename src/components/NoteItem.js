import React from "react";

export const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-right">
            <h5 className="card-title">{note.name}</h5>
            <a href="/" className="card-link">
              <i className="fa fa-trash"></i>
            </a>
            <a href="/" className="card-link">
              <i className="fa fa-edit"></i>
            </a>
          </div>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.email}
          </h6>
          <p className="card-text">{note.password} lorem34</p>
        </div>
      </div>
    </div>
  );
};
