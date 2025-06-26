import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/PlaceCard.css";

function PlaceCard(props) {
  return (
    <Card className="pt-3 px-3 mt-1 mb-4 card-element">
      <Card.Img
        className="card-image"
        src={props?.place?.image}
        alt={props?.place?.destination}
        title={props?.place?.destination}
      />
      <Card.Body>
        <Card.Title className="fst-italic fw-bold fs-4">{props?.place?.destination}</Card.Title>
        <Card.Text className="text-center">{props?.place?.description}</Card.Text>
        <div className="d-flex justify-content-center gap-4">
          <Button variant="success" onClick={() => props?.edit(props?.place)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => props?.delete(props?.place)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlaceCard;
