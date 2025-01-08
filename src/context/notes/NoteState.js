import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const s1 = {
    name: "Bashir",
    class: "Ist",
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Ahmed Khan",
        class: "3rd",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{state ,update}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
