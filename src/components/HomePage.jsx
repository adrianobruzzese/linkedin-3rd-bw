import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomePagePosts from "./HomePagePosts";
import LeftSidebar from "./home/LeftSidebar";
import RightSidebar from "./home/RightSidebar";

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
    <Col className="col-12 col-lg-3 col-md-6">
     <LeftSidebar />
     {/* <Card>
            <Card.Img
              variant="top"
              src="https://placekitten.com/g/100/100"
              style={{ height: '4em' }}
            />
            <div className="mb-5">
              <img
                id="img"
                src="data:image/jpeg;base64,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"
                alt="UserIMG"
                style={{ height: '4em' }}
                className="position-absolute  start-50 translate-middle border border-white-5 rounded-circle "
              />
            </div>
            <Card.Body>
              <div className="border-bottom ">
                <p className=" fw-medium text-center p-0 m-0">Name undefined</p>
                <p className="text-secondary text-center p-0">
                  Cameriere presso ristorante
                </p>
              </div>
              <div className="border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <p className=" text-secondary p-0 m-0">Collegamenti</p>
                  <p className=" fw-medium   p-0">espandi la tua rete</p>
                </div>
                <i className="bi bi-person-plus-fill"></i>
              </div>
              <div className="border-bottom">
                <p className="  text-secondary text-center">
                  Accedi a strumenti e informazioni in esclusiva
                </p>
                <p className=" fw-medium fw-semibold   ">
                  <i className="bi bi-bag-plus-fill"></i> Prova Premium per 0
                  EUR
                </p>
              </div>
            </Card.Body>
          </Card> */}
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

    <Col className="col-12 col-lg-3 col-md-6">
     <RightSidebar />
     {/* <Card>
      <Card.Img variant="top" src="https://placekitten.com/g/100/100" />
      <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card> */}
    </Col>
   </Row>
  </Container>
 );
};

export default HomePage;
