import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "./Input.jsx";
import "../styles/Modal.css";

function ModalWindow(props) {
  const [destination, setDestination] = useState(props?.place?.destination ?? "");
  const [description, setDescription] = useState(props?.place?.description);
  const [image, setImage] = useState(props?.place?.image);
  const [destinationError, setDestinationError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSave = () => {
    if (!destination) setDestinationError(true);
    if (!description) setDescriptionError(true);
    if (!image) setImageError(true);
    if (destination && description && image) {
      props?.onSave({ ...props?.place, destination, description, image });
      setDestination("");
      setDescription("");
      setImage("");
      props?.onHide();
    }
  };

  return (
    <Modal show={props?.show} onHide={props?.onHide} className="modal">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-white">Edit Destination</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          title="Destination"
          value={destination}
          setValue={setDestination}
          error={destinationError}
          setError={setDestinationError}
        />
        <Input
          title="Description"
          value={description}
          setValue={setDescription}
          error={descriptionError}
          setError={setDescriptionError}
        />

        <Input
          title="Image URL"
          value={image}
          setValue={setImage}
          error={imageError}
          setError={setImageError}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props?.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
