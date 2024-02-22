import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Image,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/img/LInkedinlogo.png';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src={Logo}
            width="43px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <InputGroup className="me-auto my-2 my-lg-0" id="search-input-group">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            style={{
              backgroundColor: '#edf3f8',
              borderColor: '#e0f7fa',
              borderRadius: '5px',
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#home" className="d-lg-none">
              Home
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              My Network
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              Jobs
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              Messaging
            </Nav.Link>
            <Nav.Link href="#network" className="d-lg-none">
              Notifications
            </Nav.Link>
            <div className="d-none d-lg-flex align-items-center">
              <Nav.Link href="#home" className="nav-icon d-none d-lg-block">
                <i className="bi bi-house-door-fill"></i> <div className='nav-label'>Home</div>
              </Nav.Link>
              <Nav.Link href="#network" className="nav-icon d-none d-lg-block">
                <i className="bi bi-people-fill"></i>
                <div className='nav-label'>My Network</div>
              </Nav.Link>
              <Nav.Link href="#jobs" className="nav-icon d-none d-lg-block">
                <i className="bi bi-briefcase-fill"></i> <div className='nav-label'>Jobs</div>
              </Nav.Link>
              <Nav.Link
                href="#messaging"
                className="nav-icon d-none d-lg-block"
              >
                <i className="bi bi-chat-dots-fill"></i> <div className='nav-label'>Messaging</div>
              </Nav.Link>
              <Nav.Link
                href="#notifications"
                className="nav-icon d-none d-lg-block me-5"
              >
                <i className="bi bi-bell-fill"></i> <div className='nav-label'>Notifications</div>
              </Nav.Link>
            </div>
            <div>
              <NavDropdown
                title={
                  <div className="nav-icon-dropdown mt-2">
                    <img src="https://picsum.photos/200/300" alt="Avatar" />
                    <span className="nav-dropdown-text" >Me ▼</span>
                  </div>
                }
                id="navbarScrollingDropdown"
                align="end"
              >
                <NavDropdown.Item href="#action3">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Action 3</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div>
              <NavDropdown
                title={
                  <div className="nav-icon-dropdown" style={{marginBottom:'4px'}}>
                    <i className="bi bi-grid-3x3-gap-fill" style={{fontSize:'1.4rem'}}></i>
                    <span className="nav-dropdown-text">For business ▼</span>
                  </div>
                }
                id="navbarScrollingDropdown"
                align="end"
              >
                <NavDropdown.Item href="#action3">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Action 3</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
