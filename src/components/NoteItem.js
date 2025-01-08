import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
export const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {DeleteNote} = context;
  const { note,updateNote } = props;
  const handleDelete=(id)=>{
    DeleteNote(id);
  }
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-right">
            <h5 className="card-title">{note.title}</h5>
              <i className="fa fa-trash" onClick={()=>{handleDelete(note._id)}}></i>
              <i className="fa fa-edit" onClick={()=>{updateNote(note)}}></i>
          </div>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.description}
          </h6>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
  );
};
