import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//import ArticleCard from '../../components/Card';
//import { article_bg } from '../../config/axios/index';
import hot_news from '../../assests/hot news.png';
import search from '../../assests/search icon.png';
import filter from '../../assests/filter icon.png';
import article from '../../assests/article icon.png';
import './index.css';

const SectionThree = () => {
    return (
        <Container fluid style={{marginTop: "16px", marginBottom: "16px"}}>
            <Row style={{marginTop: "16px", marginBottom: "16px"}}>
                <Col xs={12} md={6} className="sec3-col1">
                    <img src={hot_news} alt="hot news picture" width="75%" height="650px"/>
                </Col>
                <Col xs={12} md={6} className="sec3-col2">
                    <NavLink to="/hot-news"><button className='hot-news-btn'>GO TO HOT NEWS</button></NavLink>
                </Col>
            </Row>
            <h2 className='services-subtitle'>Our Services:</h2>
            <Row style={{marginTop: "100px", marginBottom: "16px"}}>
                <Col xs={12} md={4} className="sec3-col3">
                    <div className='service-card'>
                        <div className='card-img'> 
                            <img className='service-img' src={search} alt="search" />
                        </div>

                        <div className='card-text'>
                            <p className='service-text' align="center">Search and read different news and articles.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="sec3-col4">
                    <div className='service-card'>
                        <div className='card-img'>
                            <img className='service-img' src={filter} alt="filter" />
                        </div>

                        <div className='card-text'>
                            <p className='service-text' align="center">Filter what you want to read according to your preferences.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="sec3-col5">
                    <div className='service-card'>
                        <div className='card-img'>
                            <img className='service-img' src={article} alt="article" />
                        </div> 

                        <div className='card-text'>
                            <p className='service-text' align="center">Read different news and articles from multiple resources and publications.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionThree;