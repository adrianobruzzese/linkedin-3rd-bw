import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Attivita = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <h5>Attività</h5>
          <div>
            <Button
              className="ms-2 ps-3 pe-3  me-2 rounded-pill"
              variant="outline-primary"
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
        <p className="fw-bold m-0">Non hai anncora pubblicato nulla</p>

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
