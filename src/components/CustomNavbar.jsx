import { Container, Navbar, Nav, NavDropdown, InputGroup, FormControl, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../assets/img/LInkedinlogo.png';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={Logo} width="43px" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <InputGroup className="me-auto my-2 my-lg-0" id="search-input-group">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            style={{ backgroundColor: '#edf3f8', borderColor: '#e0f7fa', borderRadius: '5px' }}
          />
          <i className="bi bi-search search-icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1000' }}></i>
        </InputGroup>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#home" className="d-lg-none">Home</Nav.Link> 
            <Nav.Link href="#network" className="d-lg-none">My Network</Nav.Link> 
            <Nav.Link href="#network" className="d-lg-none">Jobs</Nav.Link> 
            <Nav.Link href="#network" className="d-lg-none">Messaging</Nav.Link> 
            <Nav.Link href="#network" className="d-lg-none">Notifications</Nav.Link> 
            <div className="d-none d-lg-flex align-items-center">
              <Nav.Link href="#home" className="nav-icon d-none d-lg-block">
                <i className="bi bi-house-door-fill"></i> <div>Home</div>
              </Nav.Link>
              <Nav.Link href="#network" className="nav-icon d-none d-lg-block">
              <i className="bi bi-people-fill"></i>
              <div>My Network</div>
            </Nav.Link>
              <Nav.Link href="#jobs" className="nav-icon d-none d-lg-block">
                <i className="bi bi-briefcase-fill"></i> <div>Jobs</div>
              </Nav.Link>
              <Nav.Link href="#messaging" className="nav-icon d-none d-lg-block">
                <i className="bi bi-chat-dots-fill"></i> <div>Messaging</div>
              </Nav.Link>
              <Nav.Link href="#notifications" className="nav-icon d-none d-lg-block">
                <i className="bi bi-bell-fill"></i> <div>Notifications</div>
              </Nav.Link>
            </div>
            <NavDropdown title="Me" id="navbarScrollingDropdown" align="end">
              <NavDropdown.Item href="#action3">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Action 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Work" id="navbarScrollingDropdown" align="end">
              <NavDropdown.Item href="#action3">Action 4</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Action 5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Action 6</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
