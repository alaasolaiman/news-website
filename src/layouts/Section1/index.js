import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/section 1 image.png";
import Circle from "../../components/Circle";
import "./index.css";

const SectionOne = () => {
  return (
    <Container fluid className="section-margins">
      <Circle size="40px" color="var(--tertiary-color)" left="0" top="8vh" />
      <Row>
        <Col xs={12} className="introduction">
          <h2 className="sec-1-title">Search for unlimited news</h2>
          <p className="sec-1-subtitle">where everybody starts their day</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}></Col>
        <Col xs={12} md={7}>
          <img src={img1} alt="illustration" width="100%" height="auto" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
