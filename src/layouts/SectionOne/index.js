import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/section 1 image.png";
import Circle from "../../components/Circle";

import "./index.css";

const SectionOne = () => {
  return (
    <Container fluid className="sectionOne">
      <Circle size="40px" color="var(--tertiary-color)" left="0%" top="8vh" />
      <Circle size="80px" color="var(--secondary-color)" left="90%" top="0" />
      <Row>
        <Col xs={12} className="sectionOne__introduction">
          <h2 className="sectionOne__introduction__title">
            Search for unlimited news
          </h2>

          <p className="sectionOne__introduction__subtitle">
            where everybody starts their day
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <img src={img1} alt="illustration" width="100%" height="auto" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
