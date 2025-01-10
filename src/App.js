import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
function App() {

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg :  message,
      type :type
    })

    setTimeout(() => { 
      setAlert(null)
     }, 2000)

  }


  return (
    <>

      <NoteState>
        <BrowserRouter>
        <Alert message="this is test message"/>
          <CustomNavigation></CustomNavigation>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignUp} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
