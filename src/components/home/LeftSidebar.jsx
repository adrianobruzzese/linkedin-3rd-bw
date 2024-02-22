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

import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';

const LeftSidebar = () => {
  return (
    <Container id="sticky-sidebars">
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card className="mb-3">
          <div className="card-background-image" style={{
              backgroundImage: 'url("https://wallpapers.com/images/high/ubuntu-4k-5120-x-2880-uwdo176k9rm0tojp.webp")',
            
            }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/200"
              className="rounded-circle border mt-5"
              style={{ width: '80px', position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="text-center mt-3">Adriano Bruzzese</Card.Title>
              <Card.Text className="text-muted text-center" id="job-title">
                Bar Manager
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center"
                  style={{ border: 'none' }}
                >
                  <span>Connections</span>
                  <span className="fw-bold text-primary">20</span>
                </ListGroup.Item>
                <ListGroup.Item className="fw-bold grow-network pb-2">
                  Grow your network
                </ListGroup.Item>
                <ListGroup.Item
                  className="mt-2 mb-2"
                  style={{ border: 'none' }}
                >
                  Strengthen your profile with an AI writing assistant
                </ListGroup.Item>
                <ListGroup.Item className="pb-2">
                  <i
                    className="bi bi-square-fill"
                    style={{ color: 'orange' }}
                  ></i>{' '}
                  Retry Premium for €0
                </ListGroup.Item>
                <ListGroup.Item className="mt-2">
                  <i className="bi bi-bookmark-fill"></i> My Items
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card
            className="profile-card mx-auto mt-3"
            style={{ maxWidth: '280px' }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item className="text-start text-muted">
                <p className="mt-3 ms-3 mb-0">Recent</p>
                <p className="mt-2 ms-3 mb-0">
                  <span
                    className="me-1"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalitycareers
                </p>
                <p className="ms-3">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalityindustry
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="text-start">
                <p className="text-primary fw-bold ms-3 mb-0">Groups</p>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center text-start">
                <p className="text-primary fw-bold ms-3 mb-0">Events</p>
                <span className="me-2 " style={{ fontSize: '1.5rem' }}>
                  +
                </span>
              </ListGroup.Item>

              <ListGroup.Item>
                <p className="text-primary fw-bold ms-3 mb-0">
                  Followed Hashtags
                </p>
                <p className="text-muted mt-2 ms-3 mb-0">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalitycareers
                </p>
                <p className="text-start text-muted ms-3">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalityindustry
                </p>
                <p className="text-start text-muted ms-3">See all</p>
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer
              className="text-center"
              style={{ borderTop: '0.7px solid grey' }}
            >
              <p className="text-muted mt-1 mb-1 fw-bold">Discover more</p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSidebar;
