import  React,{ useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'



export default function About() {

  const a = useContext(noteContext);
  useEffect(()=>{
    a.update()
  })
  return (
    <div>
      <h1>this is about page{a.state.title} and class is {a.state.description}</h1>
    </div>
  )
}
