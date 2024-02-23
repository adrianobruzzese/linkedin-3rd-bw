// 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/img/LInkedinlogo.png';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateNavbarInput } from '../redux/actions'; // Assuming you still need this
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation().pathname; 

  const dispatch = useDispatch();
  const token = useSelector((state) => state.activeUser.token);
  const navbarSearch = useSelector((state) => state.jobsFetch.navbarInput);

  return (
    <Navbar bg="light" expand="lg" sticky="top" id="navbar">
      <Container fluid>
        <Navbar.Brand href="/"> {/* Updated to use '/' as the home link */}
          <Image
            src={Logo}
            width="43px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <InputGroup className="me-auto my-2 my-lg-0" id="search-input-group">
          <Form.Control
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{
              backgroundColor: '#edf3f8',
              borderColor: '#e0f7fa',
              borderRadius: '5px',
            }}
            value={navbarSearch}
            onChange={(e) => {
              dispatch(actionUpdateNavbarInput(e.target.value));
            }}
          />
          <i
            className="bi bi-search search-icon"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: '1000',
            }}
          ></i>
        </InputGroup>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <div className="d-none d-lg-flex align-items-center">
              <Nav.Link href="/" className="nav-icon">  
                <i className="bi bi-house-fill"></i>{' '}
                <div className="nav-label">Home</div>{' '}
              </Nav.Link>
              <Nav.Link href="#network" className="nav-icon">
                <i className="bi bi-people-fill"></i>
                <div className="nav-label">My Network</div>
              </Nav.Link>
              <Nav.Link href="/jobs" className="nav-icon"> 
                <i className="bi bi-briefcase-fill" ></i>{' '}
                <div className="nav-label">Jobs</div>{' '}
              </Nav.Link>
              <Nav.Link href="#messaging" className="nav-icon">
                <i className="bi bi-chat-dots-fill"></i>{' '}
                <div className="nav-label">Messaging</div>
              </Nav.Link>
              <Nav.Link href="#network" className="nav-icon">
                <i className="bi bi-bell-fill"></i>
                <div className="nav-label">Notifications</div>
              </Nav.Link>
              <NavDropdown
                title={
                  <div className="nav-icon-dropdown mt-2">
                    <img src="https://picsum.photos/200/300" alt="Avatar" />
                    <span className="nav-dropdown-text">Me ▼</span>
                  </div>
                }
                id="navbarScrollingDropdown"
                align="end"
              >
                <NavDropdown.Item href="#gestioni-profili">
                  Profile Settings
                </NavDropdown.Item>
                <NavDropdown.Item> 
                  <Link to="/profile" className="nav-link p-0">
                    Account
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;