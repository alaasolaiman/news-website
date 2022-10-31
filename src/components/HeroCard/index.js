import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import "./index.css";

const ArticleHeroCard = ({ image, title, content, url }) => {
  return (
    <Col>
      <Card className="heroCard">
        <Card.Img className="heroCard__image" variant="top" src={image} />
        <Card.Body className="heroCard__body">
          <Card.Title className="heroCard__articleTitle">{title}</Card.Title>
          <Card.Text className="heroCard__articleContent">
            {content.slice(0, 199)}
          </Card.Text>
          <Button
            className="heroCard__button"
            onClick={() => {
              window.open(url);
            }}
          >
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ArticleHeroCard;
