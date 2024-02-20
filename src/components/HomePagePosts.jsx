import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataPosts } from "../redux/actions/FetchDataPostsAction";
import { Button, Card, Col } from "react-bootstrap";
const HomePagePosts = () => {
 const dispatch = useDispatch();
 const arrayPosts = useSelector((state) => state.posts.posts); // slice per ottenere solo i primi 20 post
 const arrayPostsSliced = arrayPosts.slice(0, 20);

 useEffect(() => {
  dispatch(FetchDataPosts());
 }, []);

 console.log("post array", arrayPostsSliced);
 return (
  <>
   {arrayPostsSliced.map((post, i) => (
    <Col className="col-12 p-0" key={i}>
     <Card className="p-3">
      <Card.Body>
       <div className="d-flex align-items-center">
        <img className="rounded-circle" src={post.image} width={55}></img>
        <Card.Title className="me-2 h6">{post.username}</Card.Title>
       </div>
       <span>{post.user.title}</span>
       <Card.Text>{post.text}</Card.Text>
       <img
        className="img-fluid"
        width={400}
        alt="img post"
        src="https://placekitten.com/g/100/100"
       />
      </Card.Body>
      <div className="d-flex justify-content-evenly">
       <Button className="d-flex align-items-center" variant="primary">
        <i className="bi bi-hand-thumbs-up me-2"></i>
        <span>Like</span>
       </Button>
       <Button className="d-flex align-items-center" variant="primary">
        <i className="bi bi-chat-left-dots me-2"></i>
        <span>Comment</span>
       </Button>
       <Button variant="primary">
        <i className="bi bi-repeat me-2"></i>Repost
       </Button>
       <Button variant="primary">
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
