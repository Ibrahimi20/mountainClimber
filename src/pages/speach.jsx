import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

const StorySection = ({ children, direction = 'left' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`story-section slide-${direction}`}>
      {children}
    </div>
  );
};

const MyStory = () => {
  return (
    <div className="my-story-page">
      {/* HERO */}
      <section className="story-hero d-flex align-items-center">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-5 fw-bold text-white">My Story</h1>
              <p className="text-white-50 mt-3">
                A choice of life. A return to what matters.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CHAPTER 1 */}
      <StorySection direction="left">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h3>The Beginning</h3>
              <p className="text-muted">
                Like many, I followed a conventional path. Routine, speed,
                noise. Something felt missing.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/story-1.jpg"
                alt="Beginning"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </StorySection>

      {/* CHAPTER 2 */}
      <StorySection direction="right">
        <Container className="py-5">
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6}>
              <h3>The Turning Point</h3>
              <p className="text-muted">
                One climb changed everything. Silence. Effort. Presence. The
                mountain doesn’t lie.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/story-2.jpg"
                alt="Turning point"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </StorySection>

      {/* CHAPTER 3 */}
      <StorySection direction="left">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h3>Choosing the Mountain Life</h3>
              <p className="text-muted">
                I chose a slower rhythm. A life guided by seasons, effort, and
                real connections.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/story-3.jpg"
                alt="Mountain life"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </StorySection>

      {/* VALUES */}
      <StorySection>
        <Container className="py-5">
          <h3 className="mb-4 text-center">What guides me</h3>
          <Row className="g-4">
            {[
              'Respect for nature',
              'Safety & responsibility',
              'Human connection',
              'Personal growth',
            ].map((v, i) => (
              <Col md={3} key={i}>
                <Card className="value-card h-100 text-center">
                  <Card.Body>
                    <h6>{v}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </StorySection>

      {/* CLOSING */}
      <StorySection>
        <Container className="py-5 text-center">
          <h3>More than climbing</h3>
          <p className="text-muted col-md-8 mx-auto">
            This is not about conquering mountains, but about learning from
            them. If this resonates with you, maybe our paths should cross.
          </p>
          <Button variant="dark" size="lg">
            Connect With Me
          </Button>
        </Container>
      </StorySection>
    </div>
  );
};

export default MyStory;
