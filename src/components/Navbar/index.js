import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import news_logo from "../../assests/website logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";


const AppNavbar = () => {

    return (
      <>
        <Navbar collapseOnSelect expand="md" style={{backgroundColor: "#601BFF"}}>
            <Container>
                <Navbar.Brand href="/">
                <img
                    src={news_logo}
                    alt="news_logo"
                    width="35"
                    height="35"    
                />{" "}<b style={{color: "white"}}>Galaxy News</b>
                </Navbar.Brand>
                <Navbar.Toggle style={{color: "white"}} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <NavLink to="/" className="nav-item">Home</NavLink>
                    <NavLink to="/hot-news" className="nav-item">Hot News</NavLink>
                    <NavLink to="/general" className="nav-item"x>General</NavLink>
                    <NavLink to="/technology" className="nav-item">Technology</NavLink>
                    <NavLink to="/business" className="nav-item">Business</NavLink>
                    <NavLink to="/entertainment" className="nav-item">Entertainment</NavLink>
                    <NavLink to="/sports" className="nav-item">Sports</NavLink>
                    <NavLink to="/science" className="nav-item">Science</NavLink>
                    <NavLink to="/health" className="nav-item">Health</NavLink>
                    {/* business entertainment general health science sports technology */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>  
    );
};

export default AppNavbar;

