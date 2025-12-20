import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const RunWithMe = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-section text-white d-flex align-items-center">
        <Container>
          <Row>
            <Col md={7}>
              <h1 className="fw-bold display-5 mb-3 animate-fade-up">
                Ready to start your running journey?
              </h1>
              <p className="lead mb-4 animate-fade-up delay-1">
                Whether it’s your first 5K or your first ultra, I’ll guide you
                every step of the way.
              </p>
              <Button
                size="lg"
                variant="light"
                className="animate-fade-up delay-2"
              >
                Run With Me
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Your Running Journey</h2>

          <Row className="g-4">
            {[
              {
                icon: '👟',
                title: 'Beginner',
                text: 'Learn how to run safely, build habits, enjoy movement.',
              },
              {
                icon: '🏁',
                title: '5K / 10K',
                text: 'Structure, pacing, breathing, confidence.',
              },
              {
                icon: '🔥',
                title: 'Marathon',
                text: 'Endurance, discipline, mental strength.',
              },
              {
                icon: '🏔️',
                title: 'Ultra & Trail',
                text: 'Mountains, adventure, discovering your limits.',
              },
            ].map((step, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="h-100 text-center shadow-sm journey-card animate-fade-up">
                  <Card.Body>
                    <div className="journey-icon">{step.icon}</div>
                    <h5 className="fw-bold mt-3">{step.title}</h5>
                    <p className="text-muted">{step.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="animate-slide-left">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Trail running"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6} className="animate-slide-right">
              <h3 className="fw-bold">Guided Running Adventures</h3>
              <p className="text-muted">
                Train outdoors, explore trails and mountains. Running becomes an
                experience, not a routine.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6} className="animate-slide-right">
              <img
                src="https://images.unsplash.com/photo-1517964100-3e8a1a1d6c1d"
                alt="Running coach"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6} className="animate-slide-left">
              <h3 className="fw-bold">Personal Coaching</h3>
              <p className="text-muted">
                Training plans, mindset, recovery, and nutrition basics —
                adapted to your goals and lifestyle.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section text-white text-center py-5">
        <Container>
          <h2 className="fw-bold mb-3">This is more than running.</h2>
          <p className="mb-4">Discipline. Freedom. Adventure.</p>
          <Button size="lg" variant="outline-light">
            Join the Adventure
          </Button>
        </Container>
      </section>

      {/* ================= STYLES & ANIMATIONS ================= */}
      <style jsx="true">{`
        .hero-section {
          min-height: 100vh;
          background-image: url('https://images.unsplash.com/photo-1509223197845-458d87318791');
          background-size: cover;
          background-position: center;
        }

        .journey-icon {
          font-size: 2.5rem;
        }

        .journey-card {
          transition: transform 0.3s ease;
        }

        .journey-card:hover {
          transform: translateY(-8px);
        }

        .cta-section {
          background: #111;
        }

        /* Animations */
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-slide-left {
          opacity: 0;
          animation: slideLeft 0.8s ease forwards;
        }

        .animate-slide-right {
          opacity: 0;
          animation: slideRight 0.8s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default RunWithMe;
