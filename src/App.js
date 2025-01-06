import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import CustomNavigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavigation></CustomNavigation>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
