import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import news_logo from "../../assets/images/website logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <NavLink className="navbar__link" to="/">
          <Navbar.Brand>
            <img src={news_logo} className="navbar__logo" alt="news_logo" />
            <strong className="navbar__title">Galaxy News</strong>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          className="navbar__toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar__nav">
            <NavLink to="/hot-news" className="navbar__link">
              Hot News
            </NavLink>
            <NavLink to="/general" className="navbar__link">
              General
            </NavLink>
            <NavLink to="/technology" className="navbar__link">
              Technology
            </NavLink>
            <NavLink to="/business" className="navbar__link">
              Business
            </NavLink>
            <NavLink to="/entertainment" className="navbar__link">
              Entertainment
            </NavLink>
            <NavLink to="/sports" className="navbar__link">
              Sports
            </NavLink>
            <NavLink to="/science" className="navbar__link">
              Science
            </NavLink>
            <NavLink to="/health" className="navbar__link">
              Health
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
