import { useEffect, useState } from 'react'; 
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 
import { PencilFill } from 'react-bootstrap-icons'; 
import { endpoint, getMeAction } from '../../Redux/actions'; // Action di Redux per recuperare i dati dell'utente da implementare
// import { token } from '../../token'; token per le richieste autenticate, capire se da implementare così
import { useDispatch, useSelector } from 'react-redux'; // Hook di Redux per dispatchare azioni e accedere allo stato
// import ModalImage from '../ModalImage'; // Componente per la modalità di modifica dell'immagine

// Definisco il componente funzionale UserHero
const UserHero = () => {
  const dispatch = useDispatch(); // Dispatch azioni Redux
  const me = useSelector((state) => state.me.meData); // Accedo ai dati dell'utente nello stato
  const [changeImage, setChangeImage] = useState(false); // Stato locale per gestire la visibilità della modalità di modifica dell'immagine

  // All'avvio del componente, dispatcho l'azione per ottenere i dati dell'utente
  useEffect(() => {
    dispatch(getMeAction('me'));
  }, []);

  const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png';

  return (
    <Container className="bg-white rounded-3 mt-4 overflow-hidden border border-2">
      {/* Controllo se ho i dati dell'utente prima di renderzare */}
      {me && (
        <Row className="pb-3">
          {/* Col per l'immagine di sfondo e profilo */}
          <Col className="col-12 position-relative user-backgroud">
            <div style={{ height: '200px' }}>
              {/* Immagine del profilo che può essere cliccata per modificarla */}
              <img
                className="position-absolute rounded-circle object-fit-cover"
                src={me.image} // Utilizzo l'URL diretto dell'immagine dell'utente
                id="UserImg"
                onClick={() => {
                  setChangeImage(true); // Al click, abilito la modalità di modifica
                }}
              />
              {/* Se changeImage è true, mostro il componente ModalImage (da integrare domani 20/02) per modificare l'immagine */}
              {changeImage && (
                <ModalImage
                  setChangeImage={setChangeImage}
                  changeImage={changeImage}
                />
              )}
            </div>
          </Col>
          {/* Sezione per il nome, la bio o lavoro, paese e i bottoni di azione */}
          <div className="px-4">
            <Col xs={12}>
              {/* Bottoni di azione in alto a destra */}
              <div className="d-flex justify-content-end mt-3">
                <Button className="rounded-circle">
                  <PencilFill /> {/* Icona di mod */}
                </Button>
              </div>
            </Col>
            <Col className="col-12">
              {/* Informazioni principali dell'utente: nome, cognome, titolo, città */}
              <Row className="mt-2">
                <Col className="col-8">
                  <h2>
                    {me.name} {me.surname}
                  </h2>
                  <p className="mb-0">{me.bio !== '' ? me.bio : me.title}</p>
                  <p className="mb-0">
                    {me.area}
                    <span className="ms-2">
                      <a href="#">Contact infos</a>{' '}
                      {/* Link alle informazioni di contatto */}
                    </span>
                  </p>
                </Col>
                <Col className="col-4">
                  {/* Logo e nome dell'azienda */}
                  <div className="d-flex align-items-center">
                    <img width={32} height={32} src={imageUrl} />
                    <span>GOOGLE</span> {/* Esempio azienda */}
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Altri link ed action buttons */}
            <Col className="col-12">
              <p className="mb-0">
                <a href="#">Links</a> {/* Link generici */}
              </p>
            </Col>
            <Col className="col-12">
              {/* Bottoni di azione per la personalizzazione del profilo */}
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
            {/* Carousel per promozioni o annunci */}
            <Col xs={12}>
              <Carousel
                className="mt-3 position-relative"
                variant="dark"
                indicators={false}
                interval={null}
              >
                {/* Esempi di elementi del carosello */}
                {/* Ogni Carousel.Item è occupato da un annuncio */}
              </Carousel>
            </Col>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default UserHero;
