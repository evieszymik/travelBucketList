import "./App.css";
import PlaceCard from "./components/PlaceCard.jsx";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import FormElement from "./components/Form.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalWindow from "./components/ModalWindow.jsx";

function App() {
  const destinations = [
    {
      id: 1,
      destination: "Rio de Janeiro",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-j -1963744_640.jpg",
    },
    {
      id: 2,
      destination: "Tokyo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403_640.jpg",
    },
    {
      id: 3,
      destination: "Kyoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2018/12/12/21/40/japan-3871726_640.jpg",
    },
    {
      id: 4,
      destination: "Dubai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_640.jpg",
    },
    {
      id: 5,
      destination: "Athens",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2022/08/21/21/13/athens-7402123_1280.jpg",
    },
    {
      id: 6,
      destination: "New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_640.jpg",
    },
    {
      id: 7,
      destination: "Los Angeles",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2019/08/18/19/40/la-4414887_640.jpg",
    },
    {
      id: 8,
      destination: "The Maledives",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis porro repellendus nobis, autem aliquid illum. Vel asperiores quia fugit?",
      image: "https://cdn.pixabay.com/photo/2015/11/15/14/30/veligandu-island-1044366_640.jpg",
    },
  ];

  const [bucketList, setBucketList] = useState(destinations);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleAddPlace = (destination, description, image) => {
    const id = bucketList.length + 1;
    setBucketList([...bucketList, { id, destination, description, image }]);
  };
  const handleDeletePlace = (place) => {
    setBucketList((prevList) => prevList.filter((el) => el !== place));
  };
  const openModal = (place) => {
    setShow(true);
    setSelectedPlace(place);
  };
  const handleEditPlace = (place) => {
    setBucketList((prevList) => prevList.map((p) => (p.id === place?.id ? { ...place } : p)));
  };
  return (
    <>
      <header className="mb-4">
        <h1 className="title text-white fs-1 fw-bold">My Travel Bucket List</h1>
        <h2 className="fst-italic fs-3 text-white">
          The (maybe too long) list of places I want to explore
        </h2>
      </header>
      <Container fluid="xxl">
        <Row lg="4" md="3" sm="2">
          {bucketList.map((destination, id) => (
            <Col key={id}>
              <PlaceCard place={destination} delete={handleDeletePlace} edit={openModal} />
            </Col>
          ))}
        </Row>
      </Container>

      <FormElement submit={handleAddPlace} />
      {show && (
        <ModalWindow
          show={show}
          onHide={handleClose}
          place={selectedPlace}
          onSave={handleEditPlace}
        />
      )}
    </>
  );
}

export default App;
