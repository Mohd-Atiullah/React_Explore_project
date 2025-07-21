// src/pages/Userlogin.js
import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../firebase';


function Userlogin() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const updateemail = (e) => {
    setemail(e.target.value);
  };

  const updatepass = (p) => {
    setpass(p.target.value);
  };

  const formvalidation = async () => {
    if (email === "" || pass === "") {
      alert("Email and Password is required!");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, pass);
        alert("Login successful!");
        navigate("/landing");
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 p-3 bg-light shadow">
          <div className="text-center">
            <h1>
              <FaUserTie />
            </h1>
            <p className="h5">User Login Page</p>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <MdEmail /> Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={updateemail}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <RiLockPasswordFill /> Password
            </label>
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={updatepass}
            />
          </div>
          <div className="text-center mb-3">
            <button type="button" className="btn btn-success" onClick={formvalidation}>
              <FaCheck /> Login
            </button>
            <div className="mt-2">
              <Link to="/userregistor">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
