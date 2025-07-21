import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';



function Appheader() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  }; 

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
  <div className="container-fluid">
    <Link to="/landing" className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link" >Link</Link>
        </li>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        <li className="nav-item dropdown">
          <Link to="" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="" className="dropdown-item" >Action</Link></li>
            <li><Link to="" className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to="" className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Appheader