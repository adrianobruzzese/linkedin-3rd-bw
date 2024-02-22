import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/img/LInkedinlogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  actionActiveAdriano,
  actionActiveFabio,
  actionActiveMarco,
  actionActiveNicolo,
  actionActiveSalvatore,
  actionUpdateNavbarInput,
} from "../redux/actions";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation().pathname;
  console.log(location);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.activeUser.token);

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
              <Link
                to={"/"}
                className={
                  location === "/"
                    ? "me-1 mt-2 nav-link active"
                    : "me-1 mt-2 nav-link"
                }
              >
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
              </Link>
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
              <Link
                to={"/jobs"}
                className={
                  location === "/jobs"
                    ? "me-1 mt-2 nav-link active"
                    : "me-1 mt-2 nav-link"
                }
              >
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
              </Link>
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
                <Link to={"/profile"} className="nav-link p-0">
                  <img
                    src="https://picsum.photos/200"
                    className="rounded-circle border border-secondary mt-2"
                    style={{ width: "25px", height: "25px" }}
                    alt="profile picture"
                  />
                </Link>
                <NavDropdown
                  title="Me"
                  align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
                  style={{ fontSize: "1rem", marginBottom: "3px" }}
                  className="p-0"
                >
                  <NavDropdown.Item href="#gestioni-profili">
                    Gestione Profili
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleShow}>
                    Switch User
                  </NavDropdown.Item>
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
      {/* MODAL PER IL CHANGE DELL'USER */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select the user to login</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="d-flex align-items-center modal-hoverable"
          onClick={() => {
            dispatch(actionActiveFabio());
            handleClose();
          }}
        >
          <i
            className={
              token ===
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg"
                ? "bi bi-person-circle fs-4 me-2 text-primary"
                : "bi bi-person-circle fs-4 me-2"
            }
          ></i>{" "}
          Fabio Gilardi
        </Modal.Body>
        <Modal.Body
          className="d-flex align-items-center modal-hoverable"
          onClick={() => {
            dispatch(actionActiveMarco());
            handleClose();
          }}
        >
          <i
            className={
              token ===
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTViOTI0ZjYwNTAwMTkzN2Q0NmIiLCJpYXQiOjE3MDgzMzI1NTgsImV4cCI6MTcwOTU0MjE1OH0.E5teFLHLRXoT_qjcnO0crOO1fPEFQnonpSJswoJD-LY"
                ? "bi bi-person-circle fs-4 me-2 text-primary"
                : "bi bi-person-circle fs-4 me-2"
            }
          ></i>{" "}
          Marco Brunetti
        </Modal.Body>
        <Modal.Body
          className="d-flex align-items-center modal-hoverable"
          onClick={() => {
            dispatch(actionActiveNicolo());
            handleClose();
          }}
        >
          <i
            className={
              token ===
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4MTc2YTY0YjAwMTllZjE5ZDYiLCJpYXQiOjE3MDg1OTQ4MTcsImV4cCI6MTcwOTgwNDQxN30.DWoqHGpxkg6gv0A1NJW-N6WbzV0aGQ43Y0gsc4cnj_M"
                ? "bi bi-person-circle fs-4 me-2 text-primary"
                : "bi bi-person-circle fs-4 me-2"
            }
          ></i>{" "}
          Nicolò di Giacinto
        </Modal.Body>
        <Modal.Body
          className="d-flex align-items-center modal-hoverable"
          onClick={() => {
            dispatch(actionActiveSalvatore());
            handleClose();
          }}
        >
          <i
            className={
              token ===
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTUxNTc2YTY0YjAwMTllZjE5ZDIiLCJpYXQiOjE3MDg1OTQ0NTQsImV4cCI6MTcwOTgwNDA1NH0.6OvRL-RvHRYiA5IXrVjtxS6IBZMmL_oqwXyKcMNMPUo"
                ? "bi bi-person-circle fs-4 me-2 text-primary"
                : "bi bi-person-circle fs-4 me-2"
            }
          ></i>{" "}
          Salavatore Malanchino
        </Modal.Body>
        <Modal.Body
          className="d-flex align-items-center modal-hoverable"
          onClick={() => {
            dispatch(actionActiveAdriano());
            handleClose();
          }}
        >
          <i className="bi bi-person-circle fs-4 me-2"></i> Adriano Bruzzese
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
