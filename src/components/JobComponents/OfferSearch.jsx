import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
const OfferSearch = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <p className="fw-bold">
            Offerte di lavoro per cui rientri fra i migliori candidati
          </p>
          <CloseButton aria-label="Hide" />
        </div>
        <Row>
          <Col md={9}>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2 "></i>Food Server
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Hostess Server
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Server
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Busser
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Hostess
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Server Host
            </Button>
            <Button
              variant="outline-primary rounded-pill pe-4 ps-4 me-2 mb-2 fw-bold"
              size="sm"
            >
              <i className="bi bi-search me-2"></i>Food Runner
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default OfferSearch;
