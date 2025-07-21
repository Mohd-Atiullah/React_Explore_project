import React from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { useNavigate } from 'react-router-dom'; // ✅ Navigation import

function UserRegister() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate(); // ✅ Hook initialization

  const myformsubmit = async (f) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, f.email, f.pass);
      console.log("User registered:", userCredential.user);
      alert("Registration successful!");
      reset();

    
      navigate("/userportal"); 
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">User Registration</h2>
      <form onSubmit={handleSubmit(myformsubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            {...register('name', { required: true })}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Password</label>
          <input
            {...register('pass', { required: true })}
            type="password"
            className="form-control"
            id="pass"
            placeholder="Enter your password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;
