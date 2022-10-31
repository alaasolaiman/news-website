import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import news_logo from "../../assets/images/website logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar className="navbar-bg" expand="md">
      <Container fluid>
        <NavLink className="nav-item">
          <Navbar.Brand>
            <img src={news_logo} className="news_logo" alt="news_logo" />
            <strong className="websiteTitle">Galaxy News</strong>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          style={{ color: "white" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBar">
            <NavLink to="/hot-news" className="nav-item">
              Hot News
            </NavLink>
            <NavLink to="/general" className="nav-item">
              General
            </NavLink>
            <NavLink to="/technology" className="nav-item">
              Technology
            </NavLink>
            <NavLink to="/business" className="nav-item">
              Business
            </NavLink>
            <NavLink to="/entertainment" className="nav-item">
              Entertainment
            </NavLink>
            <NavLink to="/sports" className="nav-item">
              Sports
            </NavLink>
            <NavLink to="/science" className="nav-item">
              Science
            </NavLink>
            <NavLink to="/health" className="nav-item">
              Health
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
