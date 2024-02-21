// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// // import '../../style/style.css';

// const LeftSidebar = () => {
//  return (
//   <div className='sticky-sidebar'>
//    <div className="card profile-card mx-auto">
//     <img
//      src="https://picsum.photos/200"
//      className="card-img-top rounded-circle border border-secondary mb-4 mt-4 mx-auto"
//      style={{ width: "70px" }}
//      alt="profile picture"
//     />
//     <div className="card-body text-center">
//      <h5 className="card-title">Adriano Bruzzese</h5>
//      <p className="card-text text-muted mb-2">Bar Manager</p>
//      <div
//       className="d-flex justify-content-between mt-2"
//       style={{ borderTop: "0.7px solid grey" }}
//      >
//       <p className="text-muted mb-0 mt-3">Connections</p>
//       <p className="font-weight-bold text-primary mb-0 mt-3">20</p>
//      </div>
//      <div
//       className="d-flex font-weight-bold"
//       style={{ borderBottom: "0.7px solid grey" }}
//      >
//       <p className="align-content-start">Grow your Network</p>
//      </div>
//      <div
//       className="text-start mt-2"
//       style={{ borderBottom: "0.7px solid grey" }}
//      >
//       <p className="text-muted">
//        Strengthen your profile with an AI writing assistant
//       </p>
//       <button type="button" className="btn btn-primary btn-sm mb-3 me-3">
//        Retry Premium for €0
//       </button>
//      </div>
//      <div className="mt-2 text-start">
//       <i className="bi bi-bookmark-fill"></i>
//       <span className="font-weight-bold mb-2 ms-1">My Items</span>
//      </div>
//     </div>
//    </div>
//    <div
//     className="card profile-card mx-auto mt-3"
//     style={{ maxWidth: "280px" }}
//    >
//     <div>
//      <p className="text-start text-muted mt-2 ms-3 mb-0">Recent</p>
//      <p className="text-start text-muted mt-2 ms-3 mb-0">
//       <span className="me-2" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//        #
//       </span>
//       hospitalitycareers
//      </p>
//      <p className="text-start text-muted ms-3">
//       <span className="me-2" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//        #
//       </span>
//       hospitalityindustry
//      </p>
//     </div>
//     <div>
//      <div>
//       <p className="text-start text-primary fw-bold mt-2 ms-3 mb-0">Groups</p>
//      </div>
//      <div className="d-flex justify-content-between">
//       <p className="text-start text-primary fw-bold mt-3 ms-3">Events</p>
//       <span className="me-2" style={{ fontSize: "2rem" }}>
//        +
//       </span>
//      </div>
//      <div>
//       <p className="text-start text-primary fw-bold ms-3 mb-0">
//        Followed Hashtags
//       </p>
//       <p className="text-start text-muted mt-2 ms-3 mb-0">
//        <span
//         className="me-2"
//         style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//        >
//         #
//        </span>
//        hospitalitycareers
//       </p>
//       <p className="text-start text-muted ms-3">
//        <span
//         className="me-2"
//         style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//        >
//         #
//        </span>
//        hospitalityindustry
//       </p>
//       <p className="text-start text-muted ms-3">See all</p>
//      </div>
//     </div>
//     <div className="text-center mt-2" style={{ borderTop: "0.7px solid grey" }}>
//      <p className="text-muted mt-3 fw-bold">Discover more</p>
//     </div>
//    </div>
//   </div>
//  );
// };

// export default LeftSidebar;

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
} from 'react-bootstrap';

const LeftSidebar = () => {
  return (
    <Container id="sticky-sidebar">
      <Row className="justify-content-center">
        <Col xs={12}>
          {/* Profile Card */}
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src="https://picsum.photos/200"
              className="rounded-circle border border-secondary mx-auto mt-4"
              style={{ width: '100px' }}
            />
            <Card.Body>
              <Card.Title className="text-center">Adriano Bruzzese</Card.Title>
              <Card.Text className="text-muted text-center">
                Bar Manager
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                  Connections
                  <Badge bg="primary">20</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between" style={{marginTop: '0'}}>
                  Grow your network
                </ListGroup.Item>
                <ListGroup.Item>
                  Strengthen your profile with an AI writing assistant
                  <Button variant="primary" size="sm" className="d-block mt-2">
                    Retry Premium for €0
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <i className="bi bi-bookmark-fill"></i> My Items
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Discover more</Card.Link>
            </Card.Body>
          </Card>

          {/* Additional Cards/Content */}
          <Card>
            <Card.Body>
              <Card.Title>Groups & Events</Card.Title>
              <Card.Text>
                Join new groups and find events related to your interests.
              </Card.Text>
              <Button variant="primary">Explore Groups</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSidebar;
