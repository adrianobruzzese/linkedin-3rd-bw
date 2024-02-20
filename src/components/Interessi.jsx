import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Innteressi = () => (
  <>
    <Container className="mb-2">
      <Row>
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <div>
                <div className="d-flex justify-content-between align-items-start   ">
                  <h5>Innteressi</h5>
                </div>
                <div>
                  <button className="border border-top-0 border-start-0  border-end-0 bg-transparent border-success text-success ">
                    Aziende
                  </button>
                </div>
              </div>
              <div className="border-bottom mb-2"></div>

              <Row>
                <Col md={6}>
                  <div className="d-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                      alt=""
                      style={{ height: '3em' }}
                    />
                    <div>
                      <a
                        className="text-decoration-none text-dark fw-bold"
                        href=""
                      >
                        Ristorante
                      </a>
                      <p className="text-secondary">3.083 follower</p>
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill    fw-bold  "
                      >
                        <i className="bi bi-check-lg fs-5 p-0"></i>Già segui
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                      alt=""
                      style={{ height: '3em' }}
                    />
                    <div>
                      <a
                        className="text-decoration-none text-dark fw-bold"
                        href=""
                      >
                        Ristorante
                      </a>
                      <p className="text-secondary">3.083 follower</p>
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill    fw-bold  "
                      >
                        <i className="bi bi-check-lg fs-5"></i>Già segui
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
export default Innteressi;
