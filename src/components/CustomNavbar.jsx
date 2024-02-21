import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/LInkedinlogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { actionUpdateNavbarInput } from "../redux/actions";

function NavbarComponent() {
  const dispatch = useDispatch();

  const navbarSearch = useSelector((state) => state.jobsFetch.navbarInput);

  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
        sticky="top"
        style={{ height: "55px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#Logo1">
            <Image
              src={Logo}
              S
              width="40px"
              className="d-inline-block align-top ms-5"
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
                  value={navbarSearch}
                  onChange={(e) => {
                    dispatch(actionUpdateNavbarInput(e.target.value));
                  }}
                />
              </Col>
            </Row>
          </Form>
          <Navbar.Collapse className="mobile-collapse">
            <Nav className="ms-5">
              <Nav.Link href="#home" className="me-1 mt-2">
                <i
                  className="bi bi-house-door-fill"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                  }}
                ></i>
                Home
              </Nav.Link>
              <Nav.Link href="#" className="me-1 mt-2">
                {" "}
                <i
                  className="bi bi-people-fill"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                  }}
                ></i>
                My Network
              </Nav.Link>
              <Nav.Link href="#" className="me-1 mt-2">
                <i
                  className="bi bi-briefcase-fill"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                  }}
                ></i>
                Jobs
              </Nav.Link>
              <Nav.Link href="#" className="me-1 mt-2">
                <i
                  className="bi bi-chat-dots-fill"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                  }}
                ></i>
                Messaging
              </Nav.Link>
              <Nav.Link href="#" className="mt-2 me-4">
                <i
                  className="bi bi-bell-fill"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                  }}
                ></i>
                Notifications
              </Nav.Link>
              <Nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://picsum.photos/200"
                  className="rounded-circle border border-secondary mt-2"
                  style={{ width: "25px", height: "25px" }}
                  alt="profile picture"
                />
                <NavDropdown
                  title="Me"
                  align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
                  style={{ fontSize: "1rem", marginBottom: "3px" }}
                >
                  <NavDropdown.Item href="#gestioni-profili">
                    Gestione Profili
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <i
                className="bi bi-grid-3x3-gap-fill mt-4"
                style={{
                  fontSize: "20px",
                }}
              ></i>
              <NavDropdown
                title="For business"
                className="mb-3"
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
