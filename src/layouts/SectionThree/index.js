import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import ArticleCard from '../../components/Card';
//import { article_bg } from '../../config/axios/index';
import hot_news from "../../assets/images/hotNews.png";
import search from "../../assets/images/search-icon.png";
import filter from "../../assets/images/filter-icon.png";
import article from "../../assets/images/article-icon.png";
import "./index.css";
import Circle from "../../components/Circle";

const SectionThree = () => {
  return (
    <Container fluid className="sectionThree">
      <Circle size="150px" color="var(--primary-color)" top="15vh" left="80%" />
      <Circle
        size="100px"
        color="var(--secondary-color)"
        top="110vh"
        left="-80px"
      />
      <Circle
        size="70px"
        color="var(--tertiary-color)"
        top="70vh"
        left="90%"
      />
      
      <Row style={{ marginTop: "16px", marginBottom: "16px" }}>
        <Col xs={12} md={6} className="sec3-col1">
          <img src={hot_news} alt="hot news" width="75%" height="650px" />
        </Col>
        <Col xs={12} md={6} className="sec3-col2">
          <NavLink to="/hot-news">
            <button className="hot-news-btn">GO TO HOT NEWS</button>
          </NavLink>
        </Col>
      </Row>
      <h2 className="services-subtitle">Our Services</h2>
      <Row>
        <Col xs={12} md={4} className="sec3-col3">
          <div className="service-card">
            <div className="card-img">
              <img className="service-img" src={search} alt="search" />
            </div>

            <div className="card-text">
              <p className="service-text" align="center">
                Search and read different news and articles.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="sec3-col4">
          <div className="service-card">
            <div className="card-img">
              <img className="service-img" src={filter} alt="filter" />
            </div>

            <div className="card-text">
              <p className="service-text" align="center">
                Filter what you want to read according to your preferences.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="sec3-col5">
          <div className="service-card">
            <div className="card-img">
              <img className="service-img" src={article} alt="article" />
            </div>

            <div className="card-text">
              <p className="service-text" align="center">
                Read different news and articles from multiple resources and
                publications.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionThree;
