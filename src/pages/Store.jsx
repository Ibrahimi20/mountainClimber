import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filters from '../components/StoreComponents/Filters';
import ProductGrid from '../components/StoreComponents/ProductGrid';
import CartOffcanvas from '../components/StoreComponents/CartOffcanvas';

const NAVBAR_HEIGHT = 90;

const Store = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
      <Container className="">
        <Row>
          <Col lg={3} className="">
            <Filters />
          </Col>

          <Col lg={9}>
            {totalQuantity > 0 && (
              <Card className="mb-4 border-0 shadow-sm">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">
                      🛒 Cart
                      <Badge bg="dark" className="ms-2">
                        {totalQuantity}
                      </Badge>
                    </h6>
                    <small className="text-muted">
                      Total ${totalAmount.toFixed(2)}
                    </small>
                  </div>

                  <Button variant="dark" onClick={() => setShowCart(true)}>
                    View Cart
                  </Button>
                </Card.Body>
              </Card>
            )}

            <ProductGrid onAdd={() => setShowCart(true)} />
          </Col>
        </Row>
      </Container>

      <CartOffcanvas show={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
};

export default Store;
