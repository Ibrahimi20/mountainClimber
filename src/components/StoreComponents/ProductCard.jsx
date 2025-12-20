import { Card, Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false); // 👈 feedback local

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);

    // reset badge après 1s
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card className="border-0 shadow-sm h-100">
      <div className="position-relative">
        {product.badge && (
          <Badge bg="dark" className="position-absolute top-0 start-0 m-2">
            {product.badge}
          </Badge>
        )}

        {added && (
          <Badge bg="success" className="position-absolute top-0 end-0 m-2">
            ✓ Added
          </Badge>
        )}

        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          style={{ height: '320px', objectFit: 'cover' }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6 fw-semibold">{product.name}</Card.Title>

        <div className="text-muted mb-3">${product.price}</div>

        <Button
          variant={added ? 'success' : 'outline-dark'}
          className="mt-auto w-100"
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? 'Added' : 'Add to cart'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
