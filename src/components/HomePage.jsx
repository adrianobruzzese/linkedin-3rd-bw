import { Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomePagePosts from './HomePagePosts';
import LeftSidebar from './home/LeftSidebar';
import RightSidebar from './home/RightSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetMyProfile, postImageAction } from '../redux/actions';
import { FetchDataPosts } from '../redux/actions/FetchDataPostsAction';

const HomePage = () => {
  // costanti pagina

 const [showModalPost, setShowModalPost] = useState(false);
 const [showModalImg, setShowModalImg] = useState(false);
 const [postText, setPostText] = useState("");
 const dispatch = useDispatch();

 const [fileImg, setFileImg] = useState();

  const post = useSelector((state) => state.posts.posts);
  const token = useSelector((state) => state.activeUser.token);
  const me = useSelector((state) => state.meFetch.content);
  const isLoading = useSelector((state) => state.meFetch.isLoading);

  const handleCloseModalPost = () => setShowModalPost(false);
  const handleShowModalPost = () => setShowModalPost(true);
  const handleCloseModalImg = () => setShowModalImg(false);
  const handleShowModalImg = () => setShowModalImg(true);

  // -----------------------------------------------------

 // funzione per caricare immagine preview e dispatch
 const handleChangeImg = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
   const reader = new FileReader();
   reader.onload = () => {
    const imgPreview = reader.result;
    console.log(imgPreview);
   };
   reader.readAsDataURL(selectedFile); // Legge il contenuto del file come URL dati (base64?)
   setFileImg(selectedFile);
   //  dispatch(postImageAction(selectedFile, postId, token));
  }
 };

 //-----------------------------------------------------

 // useEffect per recuperare i dati del profilo

 useEffect(() => {
  dispatch(actionGetMyProfile(token));
 }, [token]);

 // Funzione per effettuare post
 const HandlePost = () => {
  if (!postText.trim()) {
   alert("Il testo del post non può essere vuoto");
   return;
  }
  fetch("https://striveschool-api.herokuapp.com/api/posts/", {
   method: "POST",
   headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ text: postText }),
  })
   .then(async (response) => {
    if (response.ok) {
     const { _id } = await response.json();
     //  setPostId(_id);
     dispatch(postImageAction(fileImg, _id, token));
     handleCloseModalPost();
     setTimeout(() => {
      dispatch(FetchDataPosts(token));
     }, 1000);

     console.log(fileImg);
     console.log("Post aggiunto");
     setFileImg(null);
    } else {
     console.log("errore nella richiesta POST", response.status);
    }
  };

  //-----------------------------------------------------

  // useEffect per recuperare i dati del profilo

  useEffect(() => {
    dispatch(actionGetMyProfile(token));
  }, [token]);

  // Funzione per effettuare post
  const HandlePost = () => {
    if (!postText.trim()) {
      alert('Il testo del post non può essere vuoto');
      return;
    }
    fetch('https://striveschool-api.herokuapp.com/api/posts/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postText }),
    })
      .then(async (response) => {
        if (response.ok) {
          const { _id } = await response.json();
          setPostId(_id);
          dispatch(postImageAction(fileImg, _id, token));
          handleCloseModalPost();
          setTimeout(() => {
            dispatch(FetchDataPosts(token));
          }, 1000);

          console.log(fileImg);
          console.log('Post aggiunto');
          setFileImg(null);
        } else {
          console.log('errore nella richiesta POST', response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // -----------------------------------------------------

  // Render Homepage

  return (
    <Container className="mt-3">
      <Row className="g-4">
        <Col className="col-12 col-lg-3 col-md-4">
          <LeftSidebar
            profileIcon={!isLoading && me.image}
            profileSurname={!isLoading && me.surname}
            profileName={!isLoading && me.name}
            profileTitle={!isLoading && me.title}
          />
        </Col>

      <div className="d-flex justify-content-around text-secondary mt-2">
       <Button className="button-homepage">
        <i className="bi bi-card-image text-primary me-2"></i>
        <span>Media</span>
       </Button>
       <Button className="button-homepage">
        <i className="bi bi-calendar3 text-warning me-2"></i>
        <span>Event</span>
       </Button>

       <Button className="button-homepage">
        <i className="bi bi-newspaper text-danger me-2"></i>
        <span>Write article</span>
       </Button>
      </div>
     </Row>

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
