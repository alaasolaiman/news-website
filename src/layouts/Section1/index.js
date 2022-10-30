import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/section 1 image.png";
import Circle from "../../components/Circle";
import "./index.css";

const SectionOne = () => {
  return (
    <Container fluid>
      <Circle size="40px" color="var(--tertiary-color)" left="0%" top="8vh" />
      <Circle size="80px" color="var(--secondary-color)" left="90%" top="0" />
      <Row>
        <Col xs={12} className="introduction">
          <h2 className="sec-1-title">Search for unlimited news</h2>
          <p className="sec-1-subtitle">where everybody starts their day</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{span: 8, offset: 2}}>
          <img src={img1} alt="illustration" width="100%" height="auto" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
