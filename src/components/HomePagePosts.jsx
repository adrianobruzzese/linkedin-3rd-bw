import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataPosts } from '../redux/actions/FetchDataPostsAction';
import { Button, Card, Col } from 'react-bootstrap';
import defaultUserImg from '../assets/img/default-profile-picture1.jpg';
const HomePagePosts = () => {
  const dispatch = useDispatch();
  const arrayPosts = useSelector((state) => state.posts.posts); // slice per ottenere solo i primi 20 post
  const [arrayPostsSliced, setArrayPostsSliced] = useState([]);
  // LIKE
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  //   COMMENTI
  const [isCommenting, setIsCommenting] = useState(false);

  const toggleCommentSection = () => {
    setIsCommenting(!isCommenting);
  };

  useEffect(() => {
    dispatch(FetchDataPosts());
  }, []);

  useEffect(() => {
    if (arrayPosts.length > 0) {
      setArrayPostsSliced(arrayPosts.slice(-10));
      console.log('post array slice', arrayPostsSliced);
    }
  }, [arrayPosts]);

  return (
    <>
      {arrayPosts.slice(-10).map((post, i) => (
        <Col className="col-12 p-0 mt-1 mb-2" key={i}>
          <Card className="p-2">
            <Card.Body className="border-bottom">
              <div className="d-flex align-items-center">
                {post.user.image ? (
                  <img
                    className="rounded-circle me-2"
                    src={post.user.image}
                    width={55}
                    alt="User profile"
                  />
                ) : (
                  <img
                    className="rounded-circle me-2"
                    src={defaultUserImg}
                    width={55}
                    alt="Default profile"
                  />
                )}
                <Card.Title className="me-2 fs-6">{post.username}</Card.Title>
              </div>
              <span>{post.user.title}</span>
              <Card.Text>{post.text}</Card.Text>
              {!post.image && ``}
              {post.image && (
                <img
                  className="img-fluid img-thumbnail"
                  //  width={350}
                  alt="img post"
                  src={post.image}
                />
              )}
              {/* //    <img className="" width={250} alt="img post" src={post.image} /> */}
            </Card.Body>
            <div className="d-flex justify-content-evenly mt-1">
              <Button
                className={`d-flex align-items-center button-homepage${
                  liked ? ' text-primary' : ''
                }`}
                onClick={handleClick}
              >
                <i
                  className={`bi bi-hand-thumbs-up me-2${
                    liked ? ' text-primary' : ''
                  }`}
                ></i>
                <span>Like</span>
              </Button>
              <Button
                className="d-flex align-items-center button-homepage"
                onClick={toggleCommentSection}
              >
                <i className="bi bi-chat-left-dots me-2"></i>
                <span>Comment</span>
              </Button>
              {isCommenting && (
                <div className="comment-section d-flex align-items-center">
                  <textarea placeholder="Inserisci il tuo commento"></textarea>
                  <div>
                    <Button className="ms-1" variant="outline-info">
                      Invia
                    </Button>
                  </div>
                </div>
              )}
              <Button className="button-homepage">
                <i className="bi bi-repeat me-2"></i>Repost
              </Button>
              <Button className="button-homepage">
                <i className="bi bi-send me-2"></i>Send
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default HomePagePosts;
