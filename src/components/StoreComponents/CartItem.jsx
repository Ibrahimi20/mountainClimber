import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-3 mb-4 align-items-center">
      <img
        src={item.image}
        alt={item.name}
        width={70}
        height={90}
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />

      <div className="flex-grow-1">
        <h6 className="mb-1">{item.name}</h6>
        <small className="text-muted">${item.price}</small>

        <div className="d-flex align-items-center gap-2 mt-2">
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Math.max(1, item.quantity - 1),
                })
              )
            }
          >
            −
          </Button>

          <span>{item.quantity}</span>

          <Button
            size="sm"
            variant="outline-dark"
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </Button>
        </div>
      </div>

      <Button
        variant="light"
        size="sm"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        ✕
      </Button>
    </div>
  );
};

export default CartItem;
