import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import mountaineerImg from '../assets/S1/main-banner-layer-4-long-1200-0932b610-900_Section1.webp';

const NAVBAR_HEIGHT = 48;

const ContactUs = () => {
  const pageHeight = `calc(100vh - ${NAVBAR_HEIGHT}px)`;

  return (
    <div style={{ paddingTop: NAVBAR_HEIGHT }}>
      <Container fluid style={{ height: pageHeight }}>
        <Row style={{ height: '100%' }}>
          {/* LEFT IMAGE – visible only on md+ */}
          <Col md={6} className="d-none d-md-block p-0">
            <div
              style={{
                backgroundImage: `url(${mountaineerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
              }}
            />
          </Col>

          {/* RIGHT CONTACT FORM */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center "
            style={{ height: '100%' }}
          >
            <Card className="w-100 shadow-sm" style={{ maxWidth: '100%' }}>
              <Card.Body>
                <h4 className="text-center mb-4 fw-bold">Contactez-nous</h4>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control placeholder="Votre nom" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="exemple@email.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control placeholder="Objet du message" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Votre message..."
                    />
                  </Form.Group>

                  <Button className="w-100 py-2 fw-semibold">Envoyer</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
