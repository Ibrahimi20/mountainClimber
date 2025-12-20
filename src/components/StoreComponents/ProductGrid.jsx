import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
// import ProductCard from './ProductCard';
import products from '../../data/products';

const ProductGrid = () => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
