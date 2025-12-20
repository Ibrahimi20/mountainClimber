import { Offcanvas, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const CartOffcanvas = ({ show, onClose }) => {
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement="end"
      className="cart-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>🛒 Your Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {items.length === 0 ? (
          <p className="text-center text-muted mt-5">Your cart is empty</p>
        ) : (
          <>
            <div className="flex-grow-1 overflow-auto mt-3">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>

              <Button
                variant="dark"
                className="w-100 mb-2"
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
              >
                Checkout
              </Button>

              <Button
                variant="outline-dark"
                className="w-100"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
