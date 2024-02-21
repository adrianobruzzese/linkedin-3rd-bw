import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { actionGetExperiences } from "../../redux/actions/index";
// import Container from 'react-bootstrap/Container';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Esperienza = () => {
  // STATO INIZIALE DEL FORM

  const startingForm = {
    role: "",
    company: "",
    description: "",
    area: "",
    startDate: null,
    endDate: null,
  };

  // STATO LOCALE PER IL MODAL ED IL FORM

  const [show, setShow] = useState(false);
  const [formControl, setFormControl] = useState(startingForm);

  // FUNZIONI VARIE

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleForm = (key, input) => {
    setFormControl({
      ...formControl,
      [key]: input,
    });
  };

  const postExperience = async (id) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          id +
          "/experiences",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formControl),
        }
      );
      if (response.ok) {
        alert("Salvataggio è andato a buon fine");
        setFormControl(startingForm);
        dispatch(actionGetExperiences(returnPersonalId()));
      } else {
        alert("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  const returnPersonalId = () => {
    if (me !== null) {
      return me._id;
    }
  };

  // REDUX HOOKS

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.experiencesFetch.isLoading);

  const me = useSelector((state) => state.meFetch.content);

  useEffect(() => {
    dispatch(actionGetExperiences(returnPersonalId()));
  }, [me]);

  const experiences = useSelector((state) => state.experiencesFetch.content);

  return (
    <>
      {/* <Container className="mb-2">
      <Row> */}
      {/* <Col xs={12} md={8}> */}
      {!isLoading && (
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start   ">
              <h5>Esperienza</h5>
              <div className="d-flex align-items-center ">
                <a onClick={handleShow}>
                  <i className="bi bi-plus-lg me-3 text-black fs-3"></i>
                </a>

                <a href="">
                  <i className="bi bi-pencil text-black fs-5"></i>
                </a>
              </div>
            </div>
            {experiences.length === 0 &&
              "Non hai ancora inserito nella esperienza lavorativa"}
            {experiences.length !== 0 &&
              experiences.map((experience) => {
                return (
                  <div
                    className="d-flex align-items-center"
                    key={experience._id}
                  >
                    <img
             src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
             alt=""
                      style={{ height: "3em" }}
                      className="me-2 mb-3"
                    />
                    <div>
                      <p className="fw-bold m-0">{experience.role}</p>
                      <p>{experience.company + " • " + experience.area} </p>
                    </div>
                    <div>
                      <Button
                        className="btn-sm ms-5 border border-black shadow mb-2"
                        variant="white"
                        onClick={async () => {
                          try {
                            const response = await fetch(
                              "https://striveschool-api.herokuapp.com/api/profile/" +
                                returnPersonalId() +
                                "/experiences/" +
                                experience._id,
                              {
                                method: "DELETE",
                                headers: {
                                  Authorization:
                                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlNjI0ZjYwNTAwMTkzN2Q0NTciLCJpYXQiOjE3MDgzMzE0OTUsImV4cCI6MTcwOTU0MTA5NX0.KHAcN2ZmdInZibSsuN6-ccclj1K1u8EHV-HfobzUCsg",
                                },
                              }
                            );
                            if (response.ok) {
                              alert("Il file è stato eliminato correttamente");
                              dispatch(
                                actionGetExperiences(returnPersonalId())
                              );
                            } else {
                              alert("Qualcosa è andato storto");
                            }
                          } catch (error) {
                            alert(error);
                          }
                        }}
                      >
                        <i className="bi bi-trash fs-5"></i>
                      </Button>
                    </div>
                  </div>
                );
              })}
          </Card.Body>
        </Card>
      )}

      {/* </Col> */}
      {/* </Row>
    </Container> */}
      {/* MODAL PER REGISTRARE LE ESPERIENZE --------------------------------------------------------------------- */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Registra la tua esperienza lavorativa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postExperience(returnPersonalId());
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Role:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.role}
                onChange={(e) => {
                  handleForm("role", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.company}
                onChange={(e) => {
                  handleForm("company", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.description}
                onChange={(e) => {
                  handleForm("description", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Area:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formControl.area}
                onChange={(e) => {
                  handleForm("area", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                type="date"
                required
                value={formControl.startDate}
                onChange={(e) => {
                  handleForm("startDate", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date &#40;optional&#41;:</Form.Label>
              <Form.Control
                type="date"
                value={formControl.endDate}
                onChange={(e) => {
                  handleForm("endDate", e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Esperienza;
