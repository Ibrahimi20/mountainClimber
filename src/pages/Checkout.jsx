import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    note: '',
  });

  // ✅ LOAD CART FROM LOCALSTORAGE (OBJECT FORMAT)
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart'));

      if (storedCart && Array.isArray(storedCart.items)) {
        setCartItems(storedCart.items);
        setCartTotal(storedCart.totalAmount || 0);
      } else {
        setCartItems([]);
        setCartTotal(0);
      }
    } catch (error) {
      console.error('Invalid cart format', error);
      setCartItems([]);
      setCartTotal(0);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // LOGIC TO IMPLEMENT LATER
    console.log('CLIENT INFO:', formData);
    console.log('ORDER ITEMS:', cartItems);
    console.log('TOTAL:', cartTotal);

    alert('Commande prête (submit à implémenter)');
  };

  return (
    <Container className="checkout-page mt-2 mb-1">
      <Row className="gy-4">
        {/* ORDER SUMMARY - FIRST ON MOBILE */}
        <Col xs={12} md={5} className="order-md-2">
          <Card className="checkout-card ">
            <Card.Body>
              <h4 className="mb-3">🛒 Résumé commande</h4>

              {cartItems.length === 0 && (
                <p className="text-muted">Votre panier est vide</p>
              )}

              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="flex-grow-1">
                    <h6>{item.name}</h6>
                    <small>
                      {item.quantity} × {item.price} MAD
                    </small>
                  </div>
                  <strong>{item.quantity * item.price} MAD</strong>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>{cartTotal} MAD</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* CLIENT INFO */}
        <Col xs={12} md={7} className="order-md-1">
          <Card className="checkout-card ">
            <Card.Body>
              <h4 className="mb-3">🧍 Informations client</h4>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nom complet"
                      name="fullName"
                      value={formData.fullName}
                      required
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12} className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Téléphone"
                      name="phone"
                      value={formData.phone}
                      required
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Ville"
                      name="city"
                      value={formData.city}
                      required
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Adresse"
                      name="address"
                      value={formData.address}
                      required
                      onChange={handleChange}
                    />
                  </Col>

                  <Col xs={12} className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Note (optionnel)"
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Button type="submit" className="confirm-btn w-100">
                  Confirmer la commande
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
