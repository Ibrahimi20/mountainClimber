import 'bootstrap/dist/css/bootstrap.min.css';
import S2 from '../assets/prodssets/images/climbing.png';
import { Button, Col, Row } from 'react-bootstrap';

const Story = () => {
  return (
    <Row className="w-100 align-items-center px-5   text-white">
      {/* TEXT COLUMN */}
      <Col xs={12} md={5} className="px-0 ">
        <h1 className="text-capitalize mb-5">
          <span className="title-underline animate-underline">welcome</span> to
          my mountaineering journeys
        </h1>

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
          className="text-uppercase fw-bold border-0 "
          style={{ backgroundColor: 'orange' }}
          onClick={() => (window.location.href = '/My_Story')}
        >
          Read My Story
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
          alt="journey"
          className=""
          style={{
            width: '70%', // 👉 image plus petite que le texte

            objectFit: 'contain', // 👉 garde les proportions
          }}
        />
      </Col>
    </Row>
  );
};

export default Story;
