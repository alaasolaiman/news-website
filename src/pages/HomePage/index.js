import { Container } from "react-bootstrap";
import AppFooter from "../../layouts/Footer";
import AppHeader from "../../layouts/Header";
import SectionOne from "../../layouts/Section1";
import SectionTwo from "../../layouts/Section2";
import SectionThree from "../../layouts/Section3";

const HomePage = () => {
    return (
        <>
            <AppHeader />
            <Container fluid>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </Container>
            <AppFooter />
        </>
    );
};

export default HomePage;

        