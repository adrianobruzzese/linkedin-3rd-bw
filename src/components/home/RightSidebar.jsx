import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';

import '../../style/style.css';

const RightSidebar = () => {
  return (
    <div className="card profile-card mx-auto" style={{ maxWidth: '430px' }}>
      <div className="d-flex justify-content-between align-items-center mt-3 ms-2 mb-3">
        <h2 className="h5 mb-0 font-weight-bold text-dark">Add to your feed</h2>
        <i className="fas fa-info-circle text-secondary"></i>
      </div>
      <div>
        <div className="mt-3 mb-2">
          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/200"
              className="card-img-top rounded-circle border border-secondary mx-3"
              style={{ width: '50px' }}
              alt="profile picture"
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">Alejandro Reynal</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                President and CEO of Four Seasons Hotels and Resorts
              </p>
            </div>
          </div>
          <Button
            variant="outline-secondary"
            className="rounded-pill me-1 fw-bold mt-2" style={{ fontSize: '1rem', padding: '3px 10px 3px 10px', marginLeft:'80px' }}
          >
            + Follow
          </Button>
        </div>
        <div className="mt-4 mb-2">
          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/200"
              className="card-img-top rounded-circle border border-secondary mx-3"
              style={{ width: '50px' }}
              alt="profile picture"
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">Alejandro Reynal</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                President and CEO of Four Seasons Hotels and Resorts
              </p>
            </div>
          </div>
          <Button
            variant="outline-secondary"
            className="rounded-pill me-1 fw-bold mt-2" style={{ fontSize: '1rem', padding: '3px 10px 3px 10px', marginLeft:'80px' }}
          >
            + Follow
          </Button>
        </div>
        <div className="mt-4 mb-2">
          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/200"
              className="card-img-top rounded-circle border border-secondary mx-3"
              style={{ width: '50px' }}
              alt="profile picture"
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">Alejandro Reynal</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
                President and CEO of Four Seasons Hotels and Resorts
              </p>
            </div>
          </div>
          <Button
            variant="outline-secondary"
            className="rounded-pill me-1 fw-bold mt-2" style={{ fontSize: '1rem', padding: '3px 10px 3px 10px', marginLeft:'80px' }}
          >
            + Follow
          </Button>
        </div>
      </div>
      <div className="border-top pt-3 mb-3">
        <a href="#" className="text-secondary text-decoration-none ms-3">
          View all recommendations <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default RightSidebar;
