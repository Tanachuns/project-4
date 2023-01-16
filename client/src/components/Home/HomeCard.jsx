import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (<Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg?w=2000" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default HomeCard;