import { Card, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Card
      className="mt-4 border-0"
      style={{
        maxWidth: '520px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        borderRadius: '16px',
      }}
    >
      <Card.Body className=" ">
        <h4 className="fw-bold ">Contact an Expert</h4>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nom Complet</Form.Label>
            <Form.Control type="text" placeholder="John Doe" className="py-2" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              Votre Email de Contact
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="john@email.com"
              className="py-2"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Écrivez-nous et un expert vous répondra rapidement.
"
              //   placeholder="How can we help you?"
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 py-2 fw-semibold"
            style={{
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              border: 'none',
            }}
          >
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
