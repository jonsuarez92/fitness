import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">JSHRED</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/supps">Supplements <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nutrition">Nutruition</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Workouts">Workouts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/createWorkouts">Create Workouts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/CreateSupplements">Create Supplements</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;