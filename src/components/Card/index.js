import './index.css';
import test_img from '../../assests/news_img1.jpeg'
import { Card, Button } from 'react-bootstrap';

const ArticleCard = ({ key, bgColor, textColor }) => {
    return (    
        <>
            <Card 
                className='card-adjust'
                key={key}
                bg={bgColor}
                text={textColor}>
                <Card.Img variant="top" src={test_img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant='primary'>Read More</Button>
                </Card.Body>
            </Card> 
        </>    
    );
};

export default ArticleCard;