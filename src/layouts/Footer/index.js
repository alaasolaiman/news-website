import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import news_logo from "../../assets/images/website logo.svg";

import { Github, Linkedin } from "react-bootstrap-icons";
import "./index.css";

const AppFooter = () => {
  return (
    <Container fluid className="footer">
      <Row className="footer__container ">
        <Col className="footer-col justify-content-md-center" xs={12} md={4}>
          <h3>Contributors</h3>

          <p>
            Alaa Soleiman alaa_solaiman@outlook.com
            <a href="/" target="_blank">
              <Linkedin />
            </a>
            <a
              href="https://github.com/alaasolaiman"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </p>

          <p>
            Issa Swaid issa.swaid@outlook.com
            <a
              href="https://www.linkedin.com/in/issa-swaid-a4952421b/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/ware-wolf-coder"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </p>

          <p>
            Ali Sabra alisabraofficial@gmail.com
            <a href="/" target="_blank">
              <Linkedin />
            </a>
            <a href="/" target="_blank">
              <Github />
            </a>
          </p>
        </Col>

        <Col className="footer-col" xs={12} md={4} id="app-brand">
          <Link
            style={{
              textDecoration: "none",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
            to="/"
          >
            <img src={news_logo} alt="news_logo" width="60px" height="60px" />
          </Link>
        </Col>

        <Col className="footer-col justify-content-md-center" xs={12} md={4}>
          <h3>Support</h3>
          <p>
            <a href="/" className="support-link">
              Contact us
            </a>
          </p>

          <p>
            <a href="/" className="support-link">
              Facebook
            </a>
          </p>

          <p>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="support-link"
              rel="noreferrer"
            >
              Twitter
            </a>
          </p>
        </Col>
        <Row className="justify-content-md-center ">
          Copyrights &copy; News Website all rights reserved.
        </Row>
      </Row>
    </Container>
  );
};

export default AppFooter;
