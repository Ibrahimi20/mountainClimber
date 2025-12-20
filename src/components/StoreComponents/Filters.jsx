import { Form } from 'react-bootstrap';

const Filters = () => {
  return (
    <div className="mb-4 p-3 border rounded">
      <Form>
        <Form.Select className="mb-3">
          <option>All categories</option>
          <option>T-Shirts</option>
          <option>Sweatshirts</option>
        </Form.Select>

        <Form.Select className="mb-3">
          <option>All sizes</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </Form.Select>

        <Form.Range />
        <small className="text-muted">Price range</small>
      </Form>
    </div>
  );
};

export default Filters;
