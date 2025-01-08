import React, {useState } from 'react'
import NoteContext from './noteContext'


const NoteState =(props)=>{
    const s1 = [{
        "name": "hania1",
        "email": "bashiruuu1hh@gmail.com",
        "password": "1112222",
      
      },
      {
      
        "name": "hania1ssssssssssssssss",
        "email": "bashihh@gmail.com",
        "password": "1112222",
      },
      {
      
        "name": "hania1ssssssssssssssss",
        "email": "bashihh@gmail.com",
        "password": "1112222",
      },
      {
      
        "name": "hania1ssssssssssssssss",
        "email": "bashihh@gmail.com",
        "password": "1112222",
      },
      {
      
        "name": "hania1ssssssssssssssss",
        "email": "bashihh@gmail.com",
        "password": "1112222",
      },
      {
      
        "name": "hania1ssssssssssssssss",
        "email": "bashihh@gmail.com",
        "password": "lorem",
      }]


      const [notes, setNotes] = useState(s1);
    return(
            <NoteContext.Provider value={{notes,setNotes}}>
                {props.children}
            </NoteContext.Provider>
    )
}
export default NoteState;