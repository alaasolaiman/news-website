import { Container } from "react-bootstrap";

import SectionOne from "../../layouts/Section1";
import SectionTwo from "../../layouts/Section2";
import SectionThree from "../../layouts/Section3";

const HomePage = () => {
  return (
    <Container fluid>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Container>
  );
};

export default HomePage;
