import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarComponent() {
    return (
        <Navbar className="nav-bar" expand="md" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-bar__logo">POPMOVIES</Navbar.Brand>
          <Navbar.Toggle className="nav-bar__toggler" aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="nav-bar__menu me-auto">
              <Nav.Item className="navbar__menu-item">
                <Nav.Link as={Link} to="/" className="nav-bar__menu-item__link">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-bar__menu-item">
                <Nav.Link as={Link} to="/movies" className="nav-bar__menu-item__link">MOVIES</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-bar__menu-item">
                <Nav.Link as={Link} to="/list" className="nav-bar__menu-item__link">MY MOVIE LIST</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        // <nav className="navbar navbar-expand-sm navbar-dark">
        //         <div className="navbar__logo navbar-brand">POPMOVIES</div>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar__menu navbar-nav">
        //                 <li className="navbar__menu-item nav-item nav-link active">
        //                     {" "}
        //                     <Link to="/" className="navbar__menu-item__link">
        //                         HOME
        //                     </Link>
        //                 </li>
        //                 <li className="navbar__menu-item nav-item nav-link">
        //                     <Link to="/movies" className="navbar__menu-item__link">
        //                         MOVIES
        //                     </Link>
        //                 </li>
        //                 <li className="navbar__menu-item nav-item nav-link text-truncate">
        //                     <Link to="/list" className="navbar__menu-item__link">
        //                         MY MOVIE LIST
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="col-xl-4 text-end"></div>
        // </nav>
    );
}
