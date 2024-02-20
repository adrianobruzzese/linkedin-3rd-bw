import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const jobsSidebar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <p>
                  <i className="bi bi-bookmark-fill"></i> Le mie offerte di
                  lavoro
                </p>
                <p className="d-flex align-items-center">
                  <i className="bi bi-list-ul fs-4 me-1"></i> Preferenze
                </p>
                <p>
                  <i className="bi bi-bookmark-fill"></i> Le mie offerte di
                  lavoro
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default jobsSidebar;
