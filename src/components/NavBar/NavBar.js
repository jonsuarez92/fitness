import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">JSHRED</a>
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

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;