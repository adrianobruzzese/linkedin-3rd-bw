import "./style/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Body from "./components/Body";
import Consigliato from "./components/Consigliato";
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";
import Attivita from "./components/Attivita";
import Esperienza from "./components/Esperienza";
import Innteressi from "./components/Interessi";
import CustomNavbar from "./components/CustomNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSideBar from "./components/ProfileSideBar";


function App() {
 return (
  <>
   <CustomNavbar />
   {/* <HomePage /> */}
   <Container>
    <Row className="my-3">
     <Col md={9}>
      <Body />
      <Consigliato />
      <Analisi />
      <Risorse />
      <Attivita />
      <Esperienza />
      <Innteressi />
     </Col>
     <ProfileSideBar />
    </Row>
   </Container>
  </>
 );
}

export default App;
