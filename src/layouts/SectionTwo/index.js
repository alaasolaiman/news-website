import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import technology from "../../assets/images/technology.png";
import business from "../../assets/images/business.png";
import health from "../../assets/images/health.png";
import sports from "../../assets/images/sports.png";
import science from "../../assets/images/science.png";
import fashion from "../../assets/images/fashion.png";
import { Link } from "react-router-dom";
import Circle from "../../components/Circle";

const SectionTwo = () => {
  return (
    <Container fluid className="sectionTwo">
      <Circle size="40px" color="var(--tertiary-color)" left="0%" top="8vh" />
      <h2 className="sectionTwo__subtitle">Explore Different Topics</h2>

      <Row className="imageGroup">
        <Col className="padding-0" xs={12} md={3}>
          <Link to="/business">
            <img
              className="imageGroup__img"
              src={business}
              alt="business"
              style={{ height: "50vh" }}
            />
          </Link>
          <Link to="/health">
            <img
              className="imageGroup__img"
              src={health}
              alt="health"
              style={{ height: "70vh" }}
            />
          </Link>
        </Col>

        <Col className="padding-0" xs={12} md={3}>
          <Link to="/technology">
            <img
              className="imageGroup__img"
              src={technology}
              alt="technology"
              style={{ height: "120vh" }}
            />
          </Link>
        </Col>

        <Col className="padding-0" xs={12} md={3}>
          <Link to="/entertainment">
            <img
              className="imageGroup__img"
              src={fashion}
              alt="fashion"
              style={{ height: "120vh" }}
            />
          </Link>
        </Col>

        <Col className="padding-0" xs={12} md={3}>
          <Link to="/science">
            <img
              className="imageGroup__img"
              src={science}
              alt="science"
              style={{ height: "40vh" }}
            />
          </Link>

          <Link to="/sports">
            <img
              className="sportsImage imageGroup__img"
              src={sports}
              alt="sports"
              style={{ height: "80vh" }}
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
