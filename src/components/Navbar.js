import { useLocation, useNavigate } from "react-router-dom";

function CustomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
const handleLogout=()=>{


  localStorage.removeItem("token");
navigate("/login")
}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/pricing" ? "active" : ""
                }`}
                href="/pricing"
              >
                Pricing
              </a>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <a className="btn btn-primary mx-2" href="/login" role="button">
                Login
              </a>
              <a className="btn btn-primary" href="/signup" role="button">
                Sign Up
              </a>
            </form>
          ) : (
            <button className="btn btn-primary" onClick={handleLogout}> Logout </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default CustomNavigation;
