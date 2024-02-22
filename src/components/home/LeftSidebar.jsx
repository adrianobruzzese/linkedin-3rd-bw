// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../../style/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div>
      <div className="card profile-card mx-auto">
        <img
          src="https://picsum.photos/200"
          className="card-img-top rounded-circle border border-secondary mb-4 mt-4 mx-auto"
          style={{ width: '100px' }}
          alt="profile picture"
        />
        <div className="card-body text-center">
          <Link to={'/profile'} className="nav-link">
            <h5 className="card-title">Adriano Bruzzese</h5>
          </Link>
          <p className="card-text text-muted mb-3">Bar Manager</p>
          <div
            className="d-flex justify-content-between mt-3"
            style={{ borderTop: '0.7px solid grey' }}
          >
            <p className="text-muted mb-0 mt-3">Connections</p>
            <p className="font-weight-bold text-primary mb-0 mt-3">20</p>
          </div>
          <div
            className="d-flex font-weight-bold"
            style={{ borderBottom: '0.7px solid grey' }}
          >
            <p className="align-content-start">Grow your Network</p>
          </div>
          <div
            className="text-start mt-2"
            style={{ borderBottom: '0.7px solid grey' }}
          >
            <p className="text-muted">
              Strengthen your profile with an AI writing assistant
            </p>
            <button className="btn btn-primary btn-block mt-1 mb-3">
              Retry Premium for €0
            </button>
          </div>
          <div className="mt-2 text-start">
            <i className="bi bi-bookmark-fill"></i>
            <span className="font-weight-bold mb-2 ms-1">My Items</span>
          </div>
        </div>
      </div>
      <div className="card profile-card mx-auto mt-3 d-none d-md-block  offset-md-6 ">
        <div className=" ">
          <p className="text-start text-muted mt-2 ms-3 mb-0">Recent</p>
          <p className="text-start text-muted mt-2 ms-3 mb-0">
            <span
              className="me-2"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              #
            </span>
            hospitalitycareers
          </p>
          <p className="text-start text-muted ms-3">
            <span
              className="me-2"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              #
            </span>
            hospitalityindustry
          </p>
        </div>
        <div>
          <div>
            <p className="text-start text-primary fw-bold mt-2 ms-3 mb-0">
              Groups
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-start text-primary fw-bold mt-3 ms-3">Events</p>
            <span className="me-2" style={{ fontSize: '2rem' }}>
              +
            </span>
          </div>
          <div>
            <p className="text-start text-primary fw-bold ms-3 mb-0">
              Followed Hashtags
            </p>
            <p className="text-start text-muted mt-2 ms-3 mb-0">
              <span
                className="me-2"
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                #
              </span>
              hospitalitycareers
            </p>
            <p className="text-start text-muted ms-3">
              <span
                className="me-2"
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                #
              </span>
              hospitalityindustry
            </p>
            <p className="text-start text-muted ms-3">See all</p>
          </div>
        </div>
        <div
          className="text-center mt-2"
          style={{ borderTop: '0.7px solid grey' }}
        >
          <p className="text-muted mt-3 fw-bold">Discover more</p>
        </div>
      </div>
      <Dropdown className="d-sm d-flex justify-content-center  d-md-none ">
        <Dropdown.Toggle variant="text-secondary  " id="dropdown-basic">
          Discover more
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            {' '}
            <div>
              <p className="text-start text-muted mt-2 ms-3 mb-0">Recent</p>
              <p className="text-start text-muted mt-2 ms-3 mb-0">
                <span
                  className="me-2"
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  #
                </span>
                hospitalitycareers
              </p>
              <p className="text-start text-muted ms-3">
                <span
                  className="me-2"
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  #
                </span>
                hospitalityindustry
              </p>
            </div>
            <div>
              <div>
                <p className="text-start text-primary fw-bold mt-2 ms-3 mb-0">
                  Groups
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-start text-primary fw-bold mt-3 ms-3">
                  Events
                </p>
                <span className="me-2" style={{ fontSize: '2rem' }}>
                  +
                </span>
              </div>
              <div>
                <p className="text-start text-primary fw-bold ms-3 mb-0">
                  Followed Hashtags
                </p>
                <p className="text-start text-muted mt-2 ms-3 mb-0">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalitycareers
                </p>
                <p className="text-start text-muted ms-3">
                  <span
                    className="me-2"
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                  >
                    #
                  </span>
                  hospitalityindustry
                </p>
                <p className="text-start text-muted ms-3">See all</p>
              </div>
              <div
                className="text-center mt-2"
                style={{ borderTop: '0.7px solid grey' }}
              >
                <p className="text-muted mt-3 fw-bold">Discover more</p>
              </div>
            </div>{' '}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LeftSidebar;
