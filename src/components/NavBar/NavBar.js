import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navbars = ({ user }) => {
  return (
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="/">JSHRED</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div >
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="/supps">Supplements <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/nutrition">Nutruition</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/Workouts">Workouts</a>
    //         </li>

    //         {user.admin ?
    //           <>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/createWorkouts">Create Workouts</a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/CreateSupplements">Create Supplements</a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/CreateNutrition">Create Nutrition</a>
    //             </li>
    //           </> : ""}

    //       </ul>
    //     </div>
    //   </nav>
    // 
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">JSHRED</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/supps">Supplements</Nav.Link>
            <Nav.Link href="/nutrition">Nutrition</Nav.Link>
            <Nav.Link href="/Workouts">WorkOuts</Nav.Link>
          </Nav>

          <Nav>


            {user.admin ?
              <>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/createWorkouts">Create Workouts</NavDropdown.Item>
                  <NavDropdown.Item href="/CreateSupplements">
                    Create Supplements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CreateNutrition">Create Nutrition</NavDropdown.Item>
                  <NavDropdown.Divider />

                </NavDropdown>

              </> : ""}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;