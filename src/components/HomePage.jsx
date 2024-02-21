import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomePagePosts from "./HomePagePosts";
import LeftSidebar from "./home/LeftSidebar";
import RightSidebar from "./home/RightSidebar";
import { useSelector, useDispatch } from "react-redux";
import { postImageAction } from "../redux/actions";

const HomePage = () => {
 const [showModalPost, setShowModalPost] = useState(false);
 const [showModalImg, setShowModalImg] = useState(false);
 const [postText, setPostText] = useState("");
 const dispatch = useDispatch();
 const [postId, setPostId] = useState();
 const [fileImg, setFileImg] = useState();

 const post = useSelector((state) => state.posts.posts);

 const handleCloseModalPost = () => setShowModalPost(false);
 const handleShowModalPost = () => setShowModalPost(true);
 const handleCloseModalImg = () => setShowModalImg(false);
 const handleShowModalImg = () => setShowModalImg(true);

 const handleChangeImg = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
   const reader = new FileReader();
   reader.onload = () => {
    const imgPreview = reader.result;
    console.log(imgPreview);
   };
   reader.readAsDataURL(selectedFile); // Leggi il contenuto del file come URL dati
   setFileImg(selectedFile);
   dispatch(postImageAction(selectedFile, postId));
  }
 };

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
   .then(async (response) => {
    if (response.ok) {
     const { _id } = await response.json();
     setPostId(_id);

     dispatch(postImageAction(fileImg, _id));
     console.log(fileImg);
     console.log("Post aggiunto");

     handleCloseModalPost();
     setFileImg(null);
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
        onClick={handleShowModalPost}
       >
        Start Post
       </Button>
       {/* Modale POST */}
       <Modal show={showModalPost} onHide={handleCloseModalPost}>
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
         {fileImg && (
          <img
           width={200}
           className="img-thunbnail"
           src={URL.createObjectURL(fileImg)}
           alt="Preview"
          />
         )}
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
         <div>
          <label
           onClick={handleShowModalImg}
           className="custom-file-input-label button-homepage"
           htmlFor="image-selector"
          >
           <i className="bi bi-card-image text-primary"></i>
          </label>
          <input
           id="image-selector"
           type="file"
           accept="image/*"
           onChange={(event) => handleChangeImg(event)}
          />
         </div>
         <div>
          <Button className="me-2" variant="secondary">
           <i className="bi bi-clock"></i>
          </Button>
          <Button variant="primary" onClick={HandlePost}>
           Post
          </Button>
         </div>
        </Modal.Footer>
       </Modal>
       {/* fine modale POST */}
       {/* MODALE ANTEPRIMA IMMAGINE */}
       <Modal show={showModalImg} onHide={handleCloseModalImg}>
        <Modal.Header closeButton>
         <Modal.Title className="d-flex align-items-center">
          Anteprima Immagine
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {fileImg && (
          <img width={400} src={URL.createObjectURL(fileImg)} alt="Preview" />
         )}
        </Modal.Body>
        <Modal.Footer>
         <Button onClick={handleCloseModalImg}>Conferma</Button>
         <Button
          onClick={() => {
           handleCloseModalImg();
           setFileImg(null);
          }}
         >
          Annulla
         </Button>
        </Modal.Footer>
       </Modal>
       {/* fine modale ANTEPRIMA IMMAGINE */}
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
      <HomePagePosts postId={post._id} />
     </Row>
    </Col>

    <Col className="col-12 col-lg-3 col-md-6">
     <RightSidebar />
    </Col>
   </Row>
  </Container>
 );
};

export default HomePage;
