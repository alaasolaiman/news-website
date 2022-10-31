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
      <Circle
        size="140px"
        color="var(--tertiary-color)"
        left="50%"
        top="10vh"
      />
      <h2 className="sec-2-subtitle">Explore Different Topics</h2>

      <Row className="imageGroup">
        <Col className="padding-0" xs={12} md={3}>
          <Link to="/business">
            <img className="col-img" src={business} alt="business" />
          </Link>
          <Link to="/health">
            <img
              className="col-img"
              src={health}
              alt="health"
              style={{ height: "49.8%" }}
            />
          </Link>
        </Col>
        <Col className="padding-0" xs={12} md={3}>
          <Link to="/technology">
            <img
              className="col-img"
              src={technology}
              alt="technology"
              style={{ height: "100%" }}
            />
          </Link>
        </Col>

        <Col className="padding-0" xs={12} md={3}>
          <Link to="/entertainment">
            <img className="col-img" src={fashion} alt="fashion" />
          </Link>
        </Col>

        <Col className="padding-0" xs={12} md={3}>
          <Link to="/science">
            <img className="col-img" src={science} alt="science" />
          </Link>
          <Link to="/sports">
            <img
              className="col-img"
              src={sports}
              alt="sports"
              style={{ height: "79.7%" }}
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
