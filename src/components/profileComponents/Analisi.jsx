import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
//import Col from 'react-bootstrap/Col';

const Analisi = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div>
          <h5>Analisi</h5>
          <i className="bi bi-eye-fill me-2"></i>
          <span className="text-secondary">Solo per te</span>
        </div>
        <div>
          <i className="bi bi-people-fill me-2"></i>
          <a className="text-decoration-none text-dark fw-bold" href="">
            0 visualizzazioni del profilo
          </a>
        </div>
        <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
      </Card.Body>
      <Card.Footer className="text-muted text-center ">
        <a className="text-decoration-none text-secondary" href="">
          Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
        </a>
      </Card.Footer>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Analisi;
