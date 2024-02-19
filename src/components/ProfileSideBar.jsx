import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { actionGetAllUsers } from "../redux/actions";
import PeopleViewed from "./PeopleViewed";
import { Row } from "react-bootstrap";
import PeopleMayKnow from "./PeopleMayKnow";

const ProfileSideBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, []);

  return (
    <Col xs={3}>
      {/* PROFILE AND PUBLIC URL SECTION --------------------------------------------------------------------------------------*/}
      <Row>
        <Col className="border border-secondary rounded shadow p-2">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">Profile language</h5>
            <i className="bi bi-pencil fs-4"></i>
          </div>
          <p className="text-secondary border-bottom border-secondary mb-0 pb-3 text-small">
            English
          </p>
          <div className="d-flex align-items-center justify-content-between pt-3">
            <h5 className="fw-bold">Public profile and URL</h5>
            <i className="bi bi-pencil fs-4"></i>
          </div>
          <p className="text-secondary border-secondary mb-2 text-small">
            www.linkedin.com/in/fabio-gilardi-599b022a0
          </p>
        </Col>
      </Row>
      {/* PEOPLE ALSO VIEWED SECTION ----------------------------------------------------------------------------------------- */}
      <PeopleViewed />
      <PeopleMayKnow />
    </Col>
  );
};

export default ProfileSideBar;
