import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import news_logo from "../../assets/images/website logo.svg";

import { Github, Linkedin } from "react-bootstrap-icons";
import "./index.css";

const AppFooter = () => {
  return (
    <Container fluid className="footer">
      <Row className="footer__container ">
        
        
        <Col className="footer-col" xs={12} md={4}>
          <h3 className="footer-col-title">Contributors</h3>
          
          <div className="footer-col-contributor">
            <p>Alaa Soleiman alaa_solaiman@outlook.com</p>
            <div>
              <a className="link-format icons" href="/" target="_blank">
                <Linkedin size={18}/>
              </a>
              <a 
                className="link-format icons"
                href="https://github.com/alaasolaiman"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18}/>
              </a>
            </div>
          </div>

          <div className="footer-col-contributor">
            <p>Issa Swaid issa.swaid@outlook.com</p>
            <div>
                <a className="link-format icons"
                  href="https://www.linkedin.com/in/issa-swaid-a4952421b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18}/>
                </a>
                <a className="link-format icons"
                  href="https://github.com/ware-wolf-coder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18}/>
                </a>
            </div>  
          </div>

          <div className="footer-col-contributor">
            <p>Ali Sabra alisabraofficial@gmail.com</p>
            <div>  
              <a className="link-format icons" href="/" target="_blank">
                <Linkedin size={18}/>
              </a>
              <a className="link-format icons" href="/" target="_blank">
                <Github size={18}/>
              </a>
            </div>  
          </div>
      
        </Col>



        <Col className="footer-col" xs={12} md={4} id="app-brand">
          <Link>
            <img src={news_logo} alt="news_logo" width="60px" height="60px" />
          </Link>
          <Link
            className="link-format website-title"
            to="/"
          >
            Galaxy News
          </Link>
        </Col>

        <Col className="footer-col" xs={12} md={4}>
          <h3 className="footer-col-title">Support</h3>
          <div className="footer-col-support">
            <a 
              href="/" 
              className="link-format"
              target="_blank"
            >
                Contact us
            </a>
            <a 
              href="https://www.facebook.com/"
              className="link-format margin_top"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="link-format margin_top"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </Col>
        <Row className="copyRights">
          <a 
            href="#"
            className="link-format"
            target="_blank"
            rel="noreferrer"  
          >
            Copyrights &copy; News Website all rights reserved.
          </a>
        </Row>
      </Row>
    </Container>
  );
};

export default AppFooter;
