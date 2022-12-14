import React from 'react'
import { Link } from 'react-router-dom';



const Navbar=()=> {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" ><Link to="">MoviesTime</Link> <span className="sr-only">(current)</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link"><Link to="/Common">Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/Link">Link</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"> <Link to="/About">About</Link></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/Login">LogIn</Link></button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar