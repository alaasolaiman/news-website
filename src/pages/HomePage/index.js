import { Container } from "react-bootstrap";

import SectionOne from "../../layouts/SectionOne";
import SectionTwo from "../../layouts/SectionTwo";
import SectionThree from "../../layouts/SectionThree";


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
