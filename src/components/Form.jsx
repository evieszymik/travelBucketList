import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Form.css";
import Input from "./Input.jsx";

function FormElement(props) {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [destinationError, setDestinationError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) setDestinationError(true);
    if (!description) setDescriptionError(true);
    if (!image) setImageError(true);
    if (destination && description && image) {
      props?.submit(destination, description, image);
      setDestination("");
      setDescription("");
      setImage("");
    }
  };
  return (
    <Form className="form p-3 mt-3" onSubmit={handleSubmit}>
      <h3 className="text-white fw-bold fs-2">Add a new place</h3>
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

      <Button variant="info" size="lg" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default FormElement;
