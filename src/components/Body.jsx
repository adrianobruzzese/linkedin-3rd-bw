import Card from 'react-bootstrap/Card';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import './profileComponents/Body.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetMyProfile } from '../redux/actions';
import Modal from 'react-bootstrap/Modal';

const Body = () => {
  const [show, setShow] = useState(false);
  const [fileImg, setFileImg] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  //  funzione caricamento immagine nello stato
  const handleChangeImg = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileImg(selectedFile);
      handleSubmitImg(selectedFile);
    }
  };

  // funzione fetch POST dell'immagine
  const handleSubmitImg = async () => {
    if (fileImg) {
      const formData = new FormData();
      formData.append('profile', fileImg);

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${me._id}/picture`,
          {
            method: 'POST',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg',
            },
            body: formData,
          }
        );

        if (response.ok) {
          console.log('Immagine caricata con successo', response.status);
        } else {
          console.error(
            "Errore durante il caricamento dell'immagine:",
            response.status
          );
        }
      } catch (error) {
        console.error("Errore durante il caricamento dell'immagine:", error);
      }
    }
    //else {
    //  console.error("Nessun file selezionato");
    // }
  };

  useEffect(() => {
    dispatch(actionGetMyProfile());
  }, []);

  const me = useSelector((state) => state.meFetch.content);
  const isLoading = useSelector((state) => state.meFetch.isLoading);

  // Funzione di upload immagine nell'api fetch POST

  return (
    <>
      {/* <Container className="mb-2">
      <Row> */}
      {/* <Col xs={12} md={8}> */}
      {!isLoading && (
        <Card className="mb-2">
          <div>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDw0QEA8QDxUPDQ0NEA8NDQ8NDxANFREWFhUSFRUYHSggGBolHRUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFSsZFRkrKystLSstKysrLSsrKysrKy0tKysrLSsrLSsrKysrLSsrKysrKysrKysrKystKysrK//AABEIAJ8BPQMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAAEDBf/EABwQAQEBAQEBAAMAAAAAAAAAAAARAQISYQMxUf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDxvK8nCzl7FfRA5/H8LrjNNFI4bz8Xl23A3CkDyvJxRaQPLeeDzkkpGec/mOfXEdmQpHHyvLpvLItIHleTjcwpAzh0zjP43MalI5dcD5dw3kpHPyvJxRaQPKzn4cPMSkHniM6/H8dEUjh5Xl165GFIHleTii0geT5/GXPJJSB1xXPz8d2byUjj5Xk4otIHleTihSB5Xk4oUh5jWpzrcYmopGKNRSDFmHmM0pGJqKRiaikYyEswpBjS3GFIxNRSMTUUg7yoTYUg5iaikYmopGM3CRSBCzCjCkYmopGJqKRm4yEoUgRQ4otIEUOKFIUZHSM3lzbgJqKkYswswoECKHFFqxzidNwNxKkYmrMKRmY2HFCrAjNx0ihSOaLcYVIxRsLMKQYocUWrA3GOkHeUqQU1FIxuYWcthVgRbhxRaRzR7yKVIxNbnJSMzFDii1YEUOKFIEUOKFIUUOKMVuOfXI88u/PJdcpUjjFDii1YEUOKFIEW8nFnJSOPk85dvIbiVIEUOKLVgRQ4oUgQN5doecpUjhnLYe8qLVgRQ4oUgRQ4oUjj1yXPLtzyzrlKkc4ocUWrAihxQpAg9cusbzyUjjzyUdeuRhSBFDihSBFDihSBFDihSFG5yWY1itRiakpB3BjotxaRzihRsKsDMPMbElSMW41FI5xR0jItWBFChZhSDmNakqRkHcNQpHOKHGRasGFmNzGlSMTUlIG8sjozcWkCKFG5hVg5yTUlSMZvJIpHOKHuMi1YMUKKFIMUKKFIaLcY51qMTUUjE1ZhSMiJbi0gpqSkYmopGJrYUgxFGRaRiakpGJqKRihZiWkFN3ElIxNRSMTW5hSDEbNxaQU1JSMTUUjFG5jVpBihRQqwYoUUKQ4PXLpFGK1HFOnXA5lKRmYeYWcqFIMUKKFWB1yDtGdclSOSjY6c8lIOcthRQqwYt5KKFI47idd5c9wqRh88t54KFIMUKKFWDA3HWLcKkcUXXMbzyUjOeShRQpBihRQqxz65F2gdcwqQG5y3nmukKQYoUUKsGKFFCkGKFFCkOKFGxitwMxu8T9HEVHOKHuMhSDFCihVgxQoWYVIHhkdFuFHOKFFCrBihRQpBjfB5iKjnuKOm4MKDFCihVgxQo3MKkHOL+2by6KFHOKHuMhVgxQooUgxZzTzGlQN4jI6M3CgRQooVYMUKKFIMUKKFIcRJitCiRUgqEikGKFEVRiJFSCiRSDFCRVGKFEUFEipBRIpBihKFUYiRUFEikFQkVRihRFBRIqQUSKQYoShVGKFFCrBihRQpG7jHWB1kYrUFNS1IxRp5yUg5i3DiiVY5I+uRWpGJqKRhZjeeSiVYG4LrGdclI5pqWpGJpc8lIOY3cOKJVjlE6byGrUjE1FIxuY3nKcSrBg7jpFCkckW5GLUjE1ZhSLMbDzlRKsGKFFCrBihRQpH/2Q=="
              style={{ height: '14em' }}
            />
            <div className=" ">
              <i className="bi bi-camera-fill position-absolute top-0 end-0 me-3 mt-3 border border-2 rounded-circle bg-light pe-1 ps-1  "></i>
            </div>
          </div>

          <div className="d-flex  justify-content-between mb-3 ">
            <Modal show={show} onHide={handleClose} size="lg" className=" m-0 ">
              <Modal.Header closeButton>
                <Modal.Title className="ms-3">Aggiungi foto</Modal.Title>
              </Modal.Header>

              <Modal.Body className="fw-bold p-5">
                <p className="text-center">
                  La tua foto non deve per forza essere un tuo primo piano!
                </p>{' '}
                <p className="text-center">Ma qualcosa che ti rappresenti.</p>
                <div className="text-center mt-3 mb-4">
                  <img
                    src={me.image}
                    alt=""
                    style={{ height: '3em' }}
                    className="rounded-circle "
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fN3fQYT4v44UcLmMAyudCfBMiweCc-OgBw&usqp=CAU"
                    alt=""
                    style={{ height: '5em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9QMoM4JNxSsrO_iIRkPPebsThja5DB1oHw&usqp=CAU"
                    alt=""
                    style={{ height: '7em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IGhWi1O8OGtJ86l3vS4-Stte3E1OBQ4KxQ&usqp=CAU"
                    alt=""
                    style={{ height: '5em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86Py_pFI5u5GFWLNhnfJ--GVhedOuXfCGGw&usqp=CAU"
                    alt=""
                    style={{ height: '3em' }}
                    className="rounded-circle pe-1 ps-1"
                  />
                </div>
                <p className="text-center text-secondary ">
                  Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                  identità, quindi scatta o carica una tua foto. Poi ritagliala,
                  applica dei filtri e perfezionala come vuoi.
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi
                </Button>
                <div>
                  <label
                    className="custom-file-input-label"
                    htmlFor="image-selector"
                  >
                    Carica Foto
                  </label>
                  <input
                    id="image-selector"
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleChangeImg(event)}
                  />
                </div>
              </Modal.Footer>
            </Modal>
            <button className=" bg-transparent border-0 " onClick={handleShow}>
              <img
                id="img"
                src={me.image}
                alt="UserIMG"
                style={{ height: '9em' }}
                className="profile border border-white-5 rounded-circle "
              />
            </button>

            <a className="text-decoration-none text-dark" href="">
              {' '}
              <i className="bi bi-pencil me-3  fs-5"></i>
            </a>
          </div>
          <Card.Body className=" ">
            <Card.Text>
              <Row>
                <div className="d-flex  align-items-baseline ">
                  <Col md={8}>
                    <div>
                      <div className="d-flex">
                        <h4>{me.name + ' ' + me.surname}</h4>
                        <Button
                          className="ms-2 ps-3 pe-3 rounded-pill"
                          variant="outline-primary"
                        >
                          <i className="bi bi-patch-check-fill "></i> Verifica
                          ora
                        </Button>
                      </div>
                    </div>
                    <p>{me.title}</p>
                  </Col>
                  <button className="border border-0 bg-transparent">
                    <span>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"
                        alt=""
                        style={{ height: '3em' }}
                        className="me-2"
                      />
                      <a className="text-dark text-decoration-none " href="">
                        Ristorante
                      </a>
                    </span>
                  </button>
                </div>
              </Row>
              <span className="text-body-tertiary">
                {me.area} •{' '}
                <a className=" text-decoration-none " href="">
                  Informazioni di contatto
                </a>
              </span>
            </Card.Text>

            <div className="d-flex  mt-2 ">
              <Button
                className=" rounded-pill ps-2 pe-2 fw-bold me-2 "
                as="input"
                type="button"
                value="Disponibile per"
              />

              <Button
                variant="outline-primary"
                className="rounded-pill ps-4 pe-4 fw-bold me-2 "
              >
                Aggiungi sezione del profilo
              </Button>
              <div>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold   "
                >
                  Altro
                </Button>
              </div>
            </div>
          </Card.Body>

          <div className="d-flex m-2   ">
            <div className="border rounded m-0 p-2 d-flex me-3">
              <div className="d-flex">
                <a className="text-decoration-none" href="">
                  <strong className=" text-body-secondary">
                    Fai sapere che stai facendo selezione
                  </strong>
                  <p className="text-body-tertiary">
                    e attrai canndidati qualificati
                  </p>

                  <span className="fw-bold">Inizia</span>
                </a>
              </div>
              <div className="ms-5">
                <CloseButton />
              </div>
            </div>
            <div className="border rounded m-0 p-2 d-flex me-3">
              <div className="d-flex">
                <a className="text-decoration-none" href="">
                  <strong className=" text-body-secondary">
                    Fai sapere che stai facendo selezione
                  </strong>
                  <p className="text-body-tertiary">
                    e attrai canndidati qualificati
                  </p>

                  <span className="fw-bold">Inizia</span>
                </a>
              </div>
              <div className="ms-5">
                <CloseButton />
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* </Col> */}
      {/* </Row>
    </Container> */}
    </>
  );
};
export default Body;
