import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomePagePosts from "./HomePagePosts";


const HomePage = () => {
 const [show, setShow] = useState(false);
 const [postText, setPostText] = useState("");
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const HandlePost = () => {
  if (!postText.trim()) {
   alert("Il testo del post non può essere vuoto");
   return;
  }
  fetch("https://striveschool-api.herokuapp.com/api/posts/", {
   method: "POST",
   headers: {
    Authorization:
     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY",
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ text: postText }),
  })
   .then((response) => {
    if (response.ok) {
     console.log("Post aggiunto");
     handleClose();
    } else {
     console.log("errore nella richiesta POST", response.status);
    }
   })
   .catch((error) => {
    console.log(error);
   });
 };

 return (
  <Container className="mt-3">
   <Row className="g-4">
    <Col className="col-12 col-lg-2 col-md-6">
     <Card>
      <Card.Img variant="top" src="https://placekitten.com/g/100/100" />
      <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
    </Col>

    <Col className="col-12 col-lg-6">
     <Row className="border rounded p-2 mb-4 bg-white">
      <Col className="d-flex align-items-center justify-content-center">
       <img
        width={50}
        className="rounded-circle me-2"
        src="https://media.licdn.com/dms/image/D5603AQH1ACEDEXpJ1g/profile-displayphoto-shrink_800_800/0/1708334310484?e=1714003200&v=beta&t=jnVi5OdhJrMBfnQmUh0IPRV_UtSWLI0YqQXsreQXXlA"
        alt="profile img"
       />
       <Button
        className="bg-white text-secondary btn-outline-secondary rounded-pill d-flex flex-grow-1"
        onClick={handleShow}
       >
        Start Post
       </Button>
       {/* Modale */}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Modal.Title className="d-flex align-items-center">
          <img
           width={50}
           className="rounded-circle me-2"
           src="https://media.licdn.com/dms/image/D5603AQH1ACEDEXpJ1g/profile-displayphoto-shrink_800_800/0/1708334310484?e=1714003200&v=beta&t=jnVi5OdhJrMBfnQmUh0IPRV_UtSWLI0YqQXsreQXXlA"
           alt="profile img"
          />{" "}
          <h6>Prova nome</h6>
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Control
            as="textarea"
            rows={3}
            placeholder="What do you want to talk about?"
            onChange={(e) => setPostText(e.target.value)}
           />
          </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
         <Button variant="secondary">
          <i className="bi bi-clock"></i>
         </Button>
         <Button variant="primary" onClick={HandlePost}>
          Post
         </Button>
        </Modal.Footer>
       </Modal>
       {/* fine modale */}
      </Col>
      {/* Col di col-6 per icone media Event Write Article */}

      <div className="d-flex justify-content-around text-secondary mt-2">
       <div>
        <i className="bi bi-card-image text-primary"></i>
        <span>Media</span>
       </div>
       <div>
        <i className="bi bi-calendar3 text-warning"></i>
        <span>Event</span>
       </div>

       <div>
        <i className="bi bi-newspaper text-danger"></i>
        <span>Write article</span>
       </div>
      </div>
     </Row>

     {/* Row di Col-6 post utenti e notizie */}
     <Row className="align-content-center flex-column gy-3">
      {/* componente generazione posts */}
      <HomePagePosts />
     </Row>
    </Col>

    <Col className="col-12 col-lg-4 col-md-6">
     <Card>
      <Card.Img variant="top" src="https://placekitten.com/g/100/100" />
      <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
    </Col>
   </Row>
  </Container>
 );
};

export default HomePage;
