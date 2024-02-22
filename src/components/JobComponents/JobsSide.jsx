import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './jobsticky.css';
const jobsSidebar = () => {
  return (
    <>
      <div className="job-sticky py-0">
        <Card>
          <Card.Body>
            <p className="d-flex align-items-center">
              <i className="bi bi-bookmark-fill fs-4 me-1 "></i> My offers of
              work
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-list-ul fs-4 me-1"></i> Preferences
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-journal-check fs-4 me-1"></i> Ratings of
              skills
            </p>
            <p className="d-flex align-items-start">
              <i className="bi bi-play-btn-fill fs-4 me-1"></i>Directions for
              those looking for work
            </p>
            <p className="d-flex align-items-center">
              <i className="bi bi-gear-fill fs-4 me-1"></i>Settings application
            </p>
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-center mb-3">
          <Button className="p-3 rounded-5 mt-2" variant="outline-primary ">
            <i className="bi bi-pencil-square me-3"></i>Pubblica offerta
            gratuita
          </Button>
        </div>
      </div>
    </>
  );
};
export default jobsSidebar;
