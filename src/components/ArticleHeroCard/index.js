import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import "./index.css";

const ArticleHeroCard = ({ image, title, content, url }) => {
  return (
    <Col>
      <Card className="heroCard">
        <Card.Img className="heroCard__image" variant="top" src={image} />
        <Card.Body className="heroCardBody">
          <Card.Title className="heroCard__ArticleTitle">{title}</Card.Title>
          <Card.Text className="heroCard__ArticleContent">
            {content.slice(0, 199)}
          </Card.Text>
          <Button
            className="heroCard__Button"
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
