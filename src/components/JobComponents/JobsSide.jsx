import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './jobsticky.css';
const jobsSidebar = () => {
  return (
    <>
      <div className="job-sticky sticky-top ">
        <Card className=" ">
          <Card.Body>
            <p className="d-flex align-items-center">
              <i className="bi bi-bookmark-fill fs-4 me-1 "></i> Le mie offerte
              di lavoro
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-list-ul fs-4 me-1"></i> Preferenze
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-journal-check fs-4 me-1"></i> Valutazioni
              delle competenze
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-play-btn-fill fs-4 me-1"></i>Indicazioni per
              chi cerca lavoro
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-gear-fill fs-4 me-1"></i>Impostazioni
              candidatura
            </p>
          </Card.Body>
        </Card>
        <div>
          <Button
            className=" p-3   rounded-5 mt-2 ms-4 "
            variant="outline-primary "
          >
            <i className="bi bi-pencil-square me-3"></i>Pubblica offerta
            gratuita
          </Button>
        </div>
      </div>
    </>
  );
};
export default jobsSidebar;
