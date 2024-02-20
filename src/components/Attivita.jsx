import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const Attivita = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <h5>Attività</h5>
          <div>
          <Button
         variant="outline-primary"
         className="rounded-pill ps-4 pe-4 fw-bold me-3 "
        >
         Crea un post
        </Button>
            <a href="">
              <i className="bi bi-pencil text-black fs-5"></i>
            </a>
          </div>
        </div>
        <div>
          <a className="text-decoration-none  fw-bold" href="">
            0 follower
          </a>
        </div>
        <p className="fw-bold m-0">Non hai ancora pubblicato nulla</p>

        <span>I post che condividi appariranno qui</span>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Mostra tutte le attività <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Attivita;
