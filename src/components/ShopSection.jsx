import { Container, Row, Col } from 'react-bootstrap';

export default function ShopSection() {
  return (
    <section className="w-full py-5 py-md-5 bg-dark text-white">
      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          {/* IMAGE COLUMN */}
          <Col
            md={6}
            sm={12}
            className="mb-4 mb-md-0 d-flex justify-content-center"
          >
            <div
              className="w-100 rounded shadow-sm"
              style={{
                height: '350px',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
              }}
            />
          </Col>

          {/* TEXT COLUMN */}
          <Col md={6} sm={12} className="text-center text-md-start">
            <h1 className="fw-bold text-uppercase mb-3 display-5">
              Custom T-Shirts & Sweatshirts
            </h1>

            <p className="text-light fs-5 mb-4">
              Discover our exclusive collection of high-quality, custom-designed
              T-shirts and sweatshirts. Made for comfort, crafted with style,
              and designed to match your adventurous spirit — whether you're on
              the trail or in the city.
            </p>

            <a
              href="/shop"
              className="btn btn-light text-dark fw-bold px-4 py-2 rounded-3"
            >
              Visit the Shop
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
