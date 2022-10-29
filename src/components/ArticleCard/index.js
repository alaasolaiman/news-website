import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import "./index.css";

const ArticleCard = ({ image, title, content, url }) => {
  return (
    <Col>
      <Card>
        <Card.Img className="card-image" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="articleTitle">{title}</Card.Title>
          <Card.Text className="articleContent">
            {content.slice(0, 199)}
          </Card.Text>
          <Button
            className="learnMoreButton"
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
export default ArticleCard;
