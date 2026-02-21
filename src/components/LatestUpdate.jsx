import { Container, Row, Col, Card } from 'react-bootstrap';
// import './LatestUpdate.css';
import MT_manaslu from '../assets/prodssets/Mt_Manaslu.jpeg';
import km90 from '../assets/prodssets/Ultra trail amzimiz.jpeg';
import Everest from '../assets/prodssets/Everest.jpeg';

const updates = [
  {
    id: 1,
    title: 'Mt manaslu',
    description:
      'Raising the Moroccan flag on Mt. Manaslu (8,16 m), the world’s eighth-highest peak..',
    image: MT_manaslu,
    date: '12 janvier 2025',
  },
  {
    id: 2,
    title: 'Ultra trail amzimiz 90km',
    description:
      'UTA (Ultra Trail Amizmiz): 90 km with over 4,000 m of elevation gain, completed in under 20 hours.',
    image: km90,
    date: '05 février 2025',
  },
  {
    id: 3,
    title: 'Everest ',
    description:
      'Everest ascent attempt (8,848 m) as part of the Seven Summits initiative.',
    image: Everest,
    date: '20 mars 2025',
  },
];

const LatestUpdate = () => {
  return (
    <section className="latest-update-section bg-black">
      <Container>
        {/* Title */}
        <h2 className="section-title   text-white ">
          <span className="title-underline animate-underline mb-1">LATEST</span>{' '}
          NEWS AND PROJECT UPDATES
        </h2>

        {/* Cards */}
        <Row className="latest-update-row justify-content-center">
          {updates.map((item) => (
            <Col
              key={item.id}
              xs={10}
              sm={6}
              md={4}
              className="latest-update-col"
            >
              <Card className="update-card my-1">
                <div className="image-wrapper">
                  <Card.Img variant="top" src={item.image} />
                </div>

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="description">
                    {item.description}
                  </Card.Text>

                  <div className="date">{item.date}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestUpdate;
