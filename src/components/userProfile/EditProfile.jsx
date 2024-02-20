import { Col, Row, Container, Button } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';

const EditProfile = () => {
  return (
    <Container className="bg-white mt-4 rounded-3 overflow-hidden border border-2">
      <Row>
        {/* definizione di una riga per organizzare i contenuti in colonne: */}
        <Col xs={12} className="border border-bottom">
          {/* Prima colonna per la lingua del profilo */}
          <div className="d-flex justify-content-between py-3 align-items-start">
            {/* Div per disporre il titolo e il bottone di modifica */}
            <h5>Profile language</h5>
            {/* Titolo della sezione */}

            <Button variant="outline-secondary" className="rounded-circle">
              <PencilFill />
              {/* Bottone di modifica, check dei colori ed icona? */}
            </Button>
          </div>
          <p>English</p>
          {/* Lingua attualmente impostata */}
        </Col>
        <Col xs={12}>
          {/* Seconda col per l'URL pubblico del profilo */}
          <div className="d-flex justify-content-between py-3 align-items-start">
            {/* di nuovo layout per titolo e bottone di modifica come per la prima col */}
            <h5>Public profile & URL</h5>
            <Button variant="outline-secondary" className="rounded-circle">
              <PencilFill />
            </Button>
          </div>
          <p>www.linkedin.com/...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
