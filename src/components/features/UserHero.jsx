import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
// import { getMyInfoAction } from "../../Redux/actions"; // Azione ipotizzata ma non implementata per oggi lun.19/02
// import ModalImg from "../ModalImgs"; Componente modale per la gestione dell'immagine

const UserHero = () => {
  const dispatch = useDispatch(); // Hook per l'invio delle azioni
  const me = useSelector((state) => state.me.meData); // Seleziono i dati dell'utente dallo stato
  const [changeImage, setChangeImage] = useState(false); // Stato per gestire la visibilità del ModalImg

  // Effetto per ottenere i dati dell'utente all'avvio del component
  useEffect(() => {
    dispatch(getMyInfoAction('me')); // Invio l'azione per ottenere i dati dell'utente
  }, [dispatch]);

  return (
    <Container className="bg-white rounded-3 mt-4 overflow-hidden border border-2">
      {/* Verifica se l'oggetto "me" esiste per renderizzare il contenuto */}
      {me && (
        <Row className="pb-3">
          <Col className="col-12 position-relative">
            <div style={{ height: '200px' }}>
              {/* Immagine dell'utente, con possibilità di clic per cambiare l'immagine se funziona */}
              <img
                className="position-absolute rounded-circle object-fit-cover"
                src={me.image}
                alt="Immagine utente"
                onClick={() => setChangeImage(true)}
              />
              {/* ModalImage viene mostrato se changeImage è true */}
              {changeImage && (
                <ModalImg
                  setChangeImage={setChangeImage}
                  changeImage={changeImage}
                />
              )}
            </div>
          </Col>
          <div className="px-4">
            <Col xs={12}>
              <div className="d-flex justify-content-end mt-3">
                {/* Bottoni vari per l'interazione con il profilo utente */}
                <Button className="rounded-circle">
                  <PencilFill />
                </Button>
              </div>
            </Col>
            <Col className="col-12">
              <Row className="mt-2">
                <Col className="col-8">
                  {/* Nome, cognome, bio, area e altre informazioni dell'utente */}
                  <h2>
                    {me.name} {me.surname}
                  </h2>
                  <p className="mb-0">{me.bio !== '' ? me.bio : me.title}</p>
                  <p className="mb-0">
                    {me.area}
                    <span className="ms-2">
                      <a href="#">Contatti</a>
                    </span>
                  </p>
                </Col>
                <Col className="col-4">
                  {/* Logo e nome dell'azienda dell'utente, se presente */}
                  <div className="d-flex align-items-center">
                    <img
                      src="path/to/logo"
                      alt="Logo Azienda"
                      width={32}
                      height={32}
                    />
                    <span>Current Employer</span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="col-12">
              {/* Link opzionali o aggiuntivi dell'utente */}
              <p className="mb-0">
                <a href="#">Link</a>
              </p>
            </Col>
            <Col className="col-12">
              {/* Azioni possibili per l'utente, come modificare il profilo o aggiungere sezioni */}
              <div className="d-flex pt-3">
                <Button className="rounded-pill me-2" variant="primary">
                  Open To
                </Button>
                <Button className="rounded-pill me-2" variant="outline-primary">
                  Add profile section
                </Button>
                <Button className="rounded-pill" variant="outline-secondary">
                  More
                </Button>
              </div>
            </Col>
            <Col xs={12}>
              {/* Carousel per visualizzare messaggi o placeholder */}
              <Carousel
                className="mt-3"
                variant="dark"
                indicators={false}
                interval={null}
              >
                {/* Gli elementi del carousel mostrano varie call-to-action o informazioni */}
                {/* Implementazione degli elementi del Carousel omessa per questioni di tempo oggi, continuerò domani presumib. come segue:
                                <Carousel className="mt-3" variant="dark" indicators={false} interval={null}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://example.com/slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Prima Slide</h3>
      <p>Descrizione della prima slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://example.com/slide2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Seconda Slide</h3>
      <p>Descrizione della seconda slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  // Altri Carousel.Item possono essere aggiunti qui
</Carousel>
 */}
              </Carousel>
            </Col>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default UserHero;
