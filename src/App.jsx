import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfileSideBar from "./components/ProfileSideBar";

function App() {
  return (
    <>
      {/* <h1 className="text-primary">
        Ciao <i className="bi bi-0-circle-fill"></i>
      </h1> */}
      <Container>
        <Row>
          {/* MAIN */}
          <ProfileSideBar />
        </Row>
      </Container>
    </>
  );
}

export default App;
