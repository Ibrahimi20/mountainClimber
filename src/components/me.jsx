import 'bootstrap/dist/css/bootstrap.min.css';
import S2 from '../assets/S2/april12-ebc-97-2-d7e220b9-900.webp';
import { Button, Col, Row } from 'react-bootstrap';

const Story = () => {
  return (
    <Row className="w-100 align-items-center px-5 py-5 my-5  text-white">
      {/* TEXT COLUMN */}
      <Col xs={12} md={5} className="px-0 ">
        <h2 className="text-capitalize">welcome to my</h2>
        <h2 className="text-capitalize">My mountaineering journeys</h2>

        <p>
          I grew up in a small town in Morocco, where there was little
          entertainment and few opportunities for sports. Life was simple, and
          adventure seemed far away.
        </p>

        <p>
          Everything changed when I lost my mother unexpectedly at the age of
          20. Her passing was a turning point in my life. I promised myself that
          the best prayer I could offer for her soul was to become a better
          version of myself every single day.
        </p>

        <p>Welcome to my My mountaineering journey.</p>

        {/* FULL WIDTH BUTTON ON MOBILE */}
        <Button
          className="text-uppercase fw-bold"
          onClick={() => (window.location.href = '/My_Story')}
        >
          Welcome to my journey
        </Button>
      </Col>

      {/* IMAGE COLUMN - HIDDEN ON MOBILE */}
      <Col
        xs={12}
        md={7}
        className="d-none d-md-flex pt-5 justify-content-center align-items-center"
      >
        <img
          src={S2}
          alt="Milieu"
          className="img-fluid"
          style={{
            width: '70%', // 👉 image plus petite que le texte
            height: 'auto',
            objectFit: 'contain', // 👉 garde les proportions
            display: 'block',
          }}
        />
      </Col>
    </Row>
  );
};

export default Story;
