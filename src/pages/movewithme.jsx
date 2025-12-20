import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

const NAVBAR_HEIGHT = 48;

const Section = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-section">
      {children}
    </div>
  );
};

const ClimbWithMe = () => {
  return (
    <div className="climb-page" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
      {/* HERO */}
      <section className="hero-climb d-flex align-items-center">
        <Container>
          <h1 className="display-5 fw-bold text-white">Climb With Me</h1>
          <p className="text-white-50 mt-3 col-md-6">
            Experience the mountain. Challenge your limits. Safely guided,
            deeply human.
          </p>
          <Button variant="light" className="mt-3">
            Start the Adventure
          </Button>
        </Container>
      </section>

      {/* WHY */}
      <Section>
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <h3>Why climbing with me?</h3>
              <p className="text-muted">
                Climbing is not about reaching the top. It’s about learning
                trust, endurance and presence.
              </p>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm p-4">
                <ul className="mb-0">
                  <li>Certified mountain guide</li>
                  <li>Small groups / personal attention</li>
                  <li>Safety-first philosophy</li>
                  <li>Real connection with nature</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container className="py-5">
          <h3 className="mb-4">Services</h3>
          <Row className="g-4">
            {[
              {
                title: 'Mountain Guiding',
                desc: 'Guided ascents adapted to your level.',
              },
              {
                title: 'Climb & Train',
                desc: 'Sport climbing sessions with coaching.',
              },
              {
                title: 'Adventure Experience',
                desc: 'Multi-day mountain immersion.',
              },
            ].map((s, i) => (
              <Col md={4} key={i}>
                <Card className="service-card h-100">
                  <Card.Body>
                    <Badge bg="dark" className="mb-2">
                      Experience
                    </Badge>
                    <h5>{s.title}</h5>
                    <p className="text-muted">{s.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      {/* PREREQUISITES */}
      <Section>
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <h3>Prerequisites</h3>
              <p className="text-muted">
                Safety and preparation are essential.
              </p>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm p-4">
                <ul>
                  <li>Basic physical condition</li>
                  <li>No fear of heights (adapted options)</li>
                  <li>Respect of safety rules</li>
                  <li>Willingness to learn</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* EQUIPMENT */}
      <Section>
        <Container className="py-5">
          <h3 className="mb-4">Equipment</h3>
          <Row>
            <Col md={6}>
              <h6>I provide</h6>
              <ul>
                <li>Ropes & safety gear</li>
                <li>Helmets</li>
                <li>Technical equipment</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>You bring</h6>
              <ul>
                <li>Hiking shoes</li>
                <li>Comfortable sport clothes</li>
                <li>Water & energy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container className="py-5 text-center">
          <h3>Ready to climb?</h3>
          <p className="text-muted">
            Let’s turn the mountain into an experience.
          </p>
          <Button variant="dark" size="lg">
            Contact & Book
          </Button>
        </Container>
      </Section>
    </div>
  );
};

export default ClimbWithMe;
