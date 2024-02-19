import { Button } from 'react-bootstrap';
import { EyeFill, ArrowRight, PenFill, Plus } from 'react-bootstrap-icons';
import { useState } from 'react';
import WorkExperience from "./WorkExperienceComponent";

// Definisco un componente funzionale UserInfoCards che accetta props come input
const UserInfoCards = (props) => {
  // Utilizzo useState per creare uno stato locale 'show', inizialmente impostato a false,
  // che gestirà la visibilità del modale per i post
  const [show, setShow] = useState(false);

  // Definisco una funzione handleClose che imposta 'show' su false o true, nascondendolo
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // Un div esterno con stili di Bootstrap per il layout e il bordo.
    <div className="bg-white rounded-3 overflow-hidden mt-3 pt-3 px-4 border border-2">
      <div className="d-flex justify-content-between">
        {/* // Visualizzo il titolo passato tramite props. */}
        <h4 className="mb-0">{props.title}</h4>
        {/* // Presumibilmente, se la prop 'side' è uguale a "button", mostro un
        bottone e un'icona. */}
        {props.side === 'button' && (
          <div>
            <Button className="me-3 rounded-pill" variant="outline-primary">
              Create a post
            </Button>
            <PenFill width={24} height={24} />
          </div>
        )}
        {/* // Se la prop 'side' è "plus", mostro un altro bottone con un'icona e,
        se 'show' è true, il mio modale */}
        {props.side === 'plus' && (
          <div>
            <Button
              className="me-3 rounded-pill"
              variant="none"
              onClick={handleShow}
            >
              <Plus width={32} height={32} />
            </Button>
            {show && (
              <WorkExperience
                show={show}
                handleClose={handleClose}
                handleSetExperience={props.handleSetExperience}
              />
            )}
            <PenFill width={24} height={24} />
          </div>
        )}
      </div>
      {/* // Se la prop 'private' è true, mostro un'icona e un testo che indica la
      privacy */}
      {props.private && (
        <>
          <EyeFill /> <span>Private to you</span>
        </>
      )}
      {/* // Inserisco il contenuto passato come children nel punto specifico del
      layout. */}
      {props.children}
      {/* // Un link alla fine che suggerisce di mostrare tutte le informazioni di
      un certo tipo. */}
      <div className="text-center border-top p-2">
        <a href="" className="text-black text-decoration-none">
          <span>Show all {props.title} </span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default UserInfoCards;
