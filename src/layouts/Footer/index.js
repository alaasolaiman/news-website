import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import news_logo from "../../assets/images/website logo.svg";
import linkedin_icon from "../../assets/images/linkedin.svg";
import github_icon from "../../assets/images/github.svg";
import "./index.css";

const AppFooter = () => {
  return (
    <Container fluid className="footer">
      <Row className="footer__container justify-content-md-center">
        <Col className="col-text-color footer-col" xs={12} md={4}>
          <h3>Contributers</h3>
          <p>
            Alaa Solaiman alaa_solaiman@outlook.com
            <a href="/" target="_blank">
              <img className="in-icon" src={linkedin_icon} alt="linkedIn" />
            </a>
            <a href="/" target="_blank">
              <img className="git-icon" src={github_icon} alt="github" />
            </a>
          </p>
          <p>
            Issa Swaid issa.swaid@outlook.com
            <a
              href="https://www.linkedin.com/in/issa-swaid-a4952421b/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="in-icon" src={linkedin_icon} alt="linkedIn" />
            </a>
            <a
              href="https://github.com/ware-wolf-coder"
              target="_blank"
              rel="noreferrer"
            >
              <img className="git-icon" src={github_icon} alt="github" />
            </a>
          </p>
          <p>
            Ali Sabra alisabraofficial@gmail.com
            <a href="/" target="_blank">
              <img className="in-icon" src={linkedin_icon} alt="linkedIn" />
            </a>
            <a href="/" target="_blank">
              <img className="git-icon" src={github_icon} alt="github" />
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
            <img src={news_logo} alt="news_logo" width="60px" height="60px" />{" "}
          </Link>
        </Col>

        <Col className="col-text-color footer-col" xs={12} md={4}>
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
            <a href="/node_modules" className="support-link">
              Twitter
            </a>
          </p>
        </Col>
        <Row className="justify-content-md-center">
          <Col className="col-text-color">
            Copyrights &copy; News Website all rights reserved.
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AppFooter;
