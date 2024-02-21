import JobsSide from "./JobComponents/JobsSide";
// import BestJobsOffers from "./JobComponents/BestJobsOffers";
import MainOffersJob from "./JobComponents/MainOffersJob";
// import OtherJobsOffer from "./JobComponents/OtherJobsOffer";
import OfferSearch from "./JobComponents/OfferSearch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Jobs = () => (
  <>
    <Container>
      <Row className="my-4">
        <Col md={3} className="h-100">
          <JobsSide />
        </Col>
        <Col md={6}>
          <OfferSearch />
          <MainOffersJob />
          {/* <BestJobsOffers />
          <OtherJobsOffer /> */}
        </Col>
      </Row>
    </Container>
  </>
);
export default Jobs;
