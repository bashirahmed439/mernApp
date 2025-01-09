import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
function App() {
  return (
    <>

      <NoteState>
        <BrowserRouter>
        <Alert message="this is test message"/>
          <CustomNavigation></CustomNavigation>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
