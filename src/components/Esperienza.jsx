import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Esperienza = () => (
  <>
    <Container className="mb-2">
      <Row>
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start   ">
                <h5>Esperienza</h5>
                <div className="d-flex align-items-center ">
                  <a href="">
                    <i className="bi bi-plus-lg me-3 text-black fs-3"></i>
                  </a>

                  <a href="">
                    <i className="bi bi-pencil text-black fs-5"></i>
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                  alt=""
                  style={{ height: '3em' }}
                />
                <div>
                  <p className="fw-bold m-0">Cameriere</p>
                  <p>Ristorante • Stagionale</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
export default Esperienza;
