import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TalkSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="text-start">
            <h2 className="fw-bold mb-3">Invite Me to Speak</h2>

            <p className="text-muted mb-4">
              Whether it’s a conference, a workshop, or a special event, I’d be
              happy to share insights, experiences, and inspiring stories. Let’s
              make your event memorable!
            </p>

            <p className="text-muted mb-4">
              Invite me to speak, and let’s inspire others to climb their own
              mountains.
            </p>

            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="px-4"
            >
              Book a Talk
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TalkSection;
