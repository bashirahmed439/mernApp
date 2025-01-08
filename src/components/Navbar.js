import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CustomNavigation() {
  const location = useLocation();
useEffect(()=>{

},[location]);

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className={`nav-item ${location.pathname === "/about"? "active" : "" }`}>
        <a className="nav-link" href="/about">About</a>
      </li>
      
    </ul>
   
  </div>
</nav>
  );
}

export default CustomNavigation;