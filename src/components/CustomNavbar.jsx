import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/LInkedinlogo.png";
import Avatar from "../assets/img/Profile-Avatar-PNG.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="#Logo1">
            <Image
              src={Logo}S
              width="80px"
              height="60px"
              className="d-inline-block align-top"
              alt="Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Nav.Link href="#search" className="me-2">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
          <Navbar.Collapse id="basic-navbar-nav" className="mobile-collapse">
            <Nav className="ms-5">
              <Nav.Link href="#home" >
                Home
              </Nav.Link>
              <Nav.Link href="#link">My Network</Nav.Link>
              <Nav.Link href="#film">Jobs</Nav.Link>
              <Nav.Link href="#nuovi-e-popolari">Messaging</Nav.Link>
              <Nav.Link href="#la-mia-lista">Notifications</Nav.Link>
              <NavDropdown
                title={
                  <Image src={Avatar} width="30" height="30" />
                }
                id="basic-nav-dropdown"
                align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
              >
                <NavDropdown.Item href="#gestioni-profili">
                  Gestione Profili
                </NavDropdown.Item>
                <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-0 d-flex flex-row">
            <NavDropdown
                title=
                  "for business"
                id="basic-nav-dropdown"
                align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
              >
                <NavDropdown.Item href="#gestioni-profili">
                  Acquire premium membership
                </NavDropdown.Item>
                <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
