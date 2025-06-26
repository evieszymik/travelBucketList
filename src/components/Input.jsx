import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../styles/Input.css";

function Input(props) {
  return (
    <FloatingLabel controlId={"form" + props?.title} label={props?.title} className="mb-3">
      <Form.Control
        type="text"
        placeholder={props?.title}
        className={`${props?.error ? "error" : ""}`}
        value={props?.value}
        onChange={(e) => props?.setValue(e.target.value)}
        onFocus={() => props?.setError(false)}
      />
      {props?.error && (
        <Form.Text className="text-danger text-start d-block fw-bold ms-3">Empty field!</Form.Text>
      )}
    </FloatingLabel>
  );
}

export default Input;
