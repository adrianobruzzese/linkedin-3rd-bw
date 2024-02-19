import { useEffect, useState } from 'react';
import { Col, Form, Row, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { authToken } from '../../config'; percorso da configurare se hardcodiamo il token

function EsperienzaModale(props) {
  // Accesso ai dati dell'utente dallo stato Redux
  const utente = useSelector((state) => state.utente.datiUtente);

  // Definisco l'URL per l'API basandomi sulle props ricevute, per gestire sia l'aggiunta che la modifica di un'esperienza
  const urlAPI = props.esperienza
      ? `https://api.vattelappesca.com/utenti/${utente.id}/esperienze/${props.esperienza.id}`
      : `https://api.vattelappesca.com/utenti/${utente.id}/esperienze/`;

  // Intervallo di anni utilizzabile per la selezione dell'anno nel form
  const annoInizio = 1960;
  const annoFine = new Date().getFullYear(); // Anno corrente per renderlo dinamico
  // Utilizzo 'anni' per popolare le opzioni di selezione degli anni nel form
  const anni = Array.from({ length: annoFine - annoInizio + 1 }, (_, indice) => annoInizio + indice);

  // Stati per gestire le date di inizio e fine dell'esperienza lavorativa
  const [dataInizio, setDataInizio] = useState({ anno: '', mese: '' });
  const [dataFine, setDataFine] = useState({ anno: '', mese: '' });

  // Stato per controllare se è possibile inviare il form
  const [invioPossibile, setInvioPossibile] = useState(false);

  // Controllo l'abilitazione del bottone di invio in base a condizioni specifiche (es. validazione del form)
  useEffect(() => {
    // Ad esempio, puoi abilitare l'invio solo se i campi ruolo e azienda sono stati compilati
    const abilitaInvio = esperienza.ruolo !== '' && esperienza.azienda !== '';
    setInvioPossibile(abilitaInvio);
  }, [esperienza.ruolo, esperienza.azienda]); // Dipendenze dell'effetto

  // Stato per gestire i dettagli dell'esperienza lavorativa
  const [esperienza, setEsperienza] = useState({
    ruolo: props.esperienza ? props.esperienza.ruolo : '',
    azienda: props.esperienza ? props.esperienza.azienda : '',
    dataInizio: '',
    dataFine: '',
    descrizione: props.esperienza ? props.esperienza.descrizione : '',
    luogo: props.esperienza ? props.esperienza.luogo : '',
  });

  // Funzione per inviare l'esperienza lavorativa all'API
  const inviaEsperienza = async () => {
    // Implementazione omessa per brevità
  };

  // Gestione del submit del form
  const gestisciSubmit = (evento) => {
    evento.preventDefault();
    inviaEsperienza();
    props.onChiudiModale();
  };

  // Renderizzo il modale con un form per inserire o modificare i dettagli dell'esperienza
  return (
    <Modal show={props.mostra} onHide={props.onChiudiModale}>
      <Modal.Header closeButton>
        <Modal.Title>{props.esperienza ? 'Modifica Esperienza' : 'Aggiungi Esperienza'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={gestisciSubmit}>
          {/* Campi del form */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onChiudiModale}>Chiudi</Button>
        <Button variant="primary" onClick={gestisciSubmit} disabled={!invioPossibile}>Invia</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EsperienzaModale;
