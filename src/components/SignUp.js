import React, { useState } from "react";
import { useNavigate } from "react-router-dom";    
const SignUp = () => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const host = "http://localhost:5000";
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creds.name,
        email: creds.email,
        password: creds.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    console.log(json);
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <h1>Create an account to use INoteBook</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            value={creds.name}
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={creds.email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={creds.password}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            value={creds.cpassword}
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Passowrd"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
