import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataPosts } from "../redux/actions/FetchDataPostsAction";
import { Button, Card, Col } from "react-bootstrap";
import defaultUserImg from "../assets/img/default-profile-picture1.jpg";

const HomePagePosts = () => {
 const dispatch = useDispatch();
 const arrayPosts = useSelector((state) => state.posts.posts);

 useEffect(() => {
  dispatch(FetchDataPosts());
 }, []);

 return (
  <>
   {arrayPosts.slice(-10).map((post, i) => (
    <Col className="col-12 p-0" key={i}>
     <Card className="p-2">
      <Card.Body className="border-bottom mb-2">
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
       <img className="" width={250} alt="img post" src={post.image} />
      </Card.Body>
      <div className="d-flex justify-content-evenly">
       <Button className="d-flex align-items-center button-homepage">
        <i className="bi bi-hand-thumbs-up me-2"></i>
        <span>Like</span>
       </Button>
       <Button className="d-flex align-items-center button-homepage">
        <i className="bi bi-chat-left-dots me-2"></i>
        <span>Comment</span>
       </Button>
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
