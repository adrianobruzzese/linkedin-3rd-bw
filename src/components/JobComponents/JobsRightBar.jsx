import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const JobsRightBar = () => (
  <>
    <div className=" text-center mt-4 ">
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3 " href="#home">
          Informazioni
        </Nav.Link>
        <Nav.Link className="text-secondary fs-6" href="#home">
          Accessibilità
        </Nav.Link>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Centro Assistenza
        </Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Privacy e condizioni"
          menuVariant="dark"
          className="text-body-tertiary"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6  " href="#home">
          Opzioni per gli annunci pubblicitari
        </Nav.Link>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Pubblicità
        </Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Servizi alle aziende"
          menuVariant="dark"
          className="text-body-tertiary"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="d-flex justify-content-center ">
        <Nav.Link className="text-secondary fs-6 me-3" href="#home">
          Scarica l'app LinkedIn
        </Nav.Link>
        <Nav.Link className="text-secondary fs-6" href="#home">
          altro
        </Nav.Link>
      </div>
      <div className="mt-3">
        <img
          alt=""
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          style={{ height: '1em' }}
        />{' '}
        <span className="fs-6">LinkedIn Corporation © 2024</span>
      </div>
    </div>
  </>
);
export default JobsRightBar;
