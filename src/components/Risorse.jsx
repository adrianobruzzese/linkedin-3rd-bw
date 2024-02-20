import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
const Risorse = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card>
      <Card.Body>
        <div className=" border-bottom ">
          <div>
            <h5>Risorse</h5>
            <i className="bi bi-eye-fill me-2"></i>
            <span className="text-secondary">Solo per te</span>
          </div>
          <div>
            <i className="bi bi-broadcast-pin me-2"></i>
            <a className="text-decoration-none text-dark fw-bold" href="">
              Modalità creazione di contenuti <Badge bg="dark-subtle">No</Badge>
            </a>
          </div>
          <p>
            Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
            accedi agli strumenti di creazione
          </p>
        </div>

        <div>
          <i className="bi bi-people-fill me-2"></i>
          <a className="text-decoration-none text-dark fw-bold" href="">
            La mia rete
          </a>
        </div>
        <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Risorse;
