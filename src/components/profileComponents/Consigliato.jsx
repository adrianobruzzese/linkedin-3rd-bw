import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Consigliato = () => (
  <>
    {/* <Container className="mb-2">
      <Row> */}
    {/* <Col xs={12} md={8}> */}
    <Card className="mb-2">
      <Card.Body>
        <div>
          <h5>Consigliato per te</h5>
          <i className="bi bi-eye-fill me-2"></i>
          <span className="text-secondary">Solo per te</span>
        </div>

        <div className="mt-4">
          <span>Principiante</span>
          <Row className="align-items-center">
            <Col md={11}>
              <div className=" border-bottom p-1 rounded-pill   bg-body-secondary">
                <div className=" w-25 bg-info-subtle"></div>
              </div>
            </Col>
            <Col md={1}>
              <span>2/7</span>
            </Col>
          </Row>
        </div>
        <div className="mb-2">
          <span className="text-secondary-emphasis">
            Completa 2 passaggi per raggiungere il livello{' '}
            <a className=" text-decoration-none fw-bold " href="">
              intermedio
            </a>
          </span>
        </div>
        <div className="d-flex">
          <div className="border rounded m-0 p-2 d-flex me-3">
            <div className="d-flex">
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
                    alt=""
                    style={{ height: '3em' }}
                  />
                  <p className="fw-bold ms-2">In quale settore lavori?</p>
                </div>
                <p className="text-body-tertiary">
                  Gli utenti che aggiungono un settore ricevono fino a 2,5 volte
                  più visualizzazioni del profilo.
                </p>

                <Button
                  variant="outline-secondary"
                  className="rounded-pill me-1 ps-4 pe-4 fw-bold  "
                >
                  Aggiungi settore
                </Button>
              </div>
            </div>
          </div>
          <div className="border rounded m-0 p-2 d-flex me-3">
            <div className="d-flex">
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
                    alt=""
                    style={{ height: '3em' }}
                  />
                  <p className="fw-bold ms-2">
                    Quale scuola o università hai frequentato?
                  </p>
                </div>
                <p className="text-body-tertiary">
                  Gli utenti che includono una scuola o università ricevono fino
                  a 2,2 volte più visualizzazioni del profilo.
                </p>

                <Button
                  variant="outline-secondary"
                  className="rounded-pill me-1 ps-4 pe-4 fw-bold  "
                >
                  Aggiungi titolo di studio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
    {/* </Col> */}
    {/* </Row>
    </Container> */}
  </>
);
export default Consigliato;
