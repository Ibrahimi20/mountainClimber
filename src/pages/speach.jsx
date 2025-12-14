import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../assets/S2/april12-ebc-97-2-d7e220b9-900.webp';

const My_Story = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60vh', // adjust for mobile first
        position: 'relative',
      }}
    >
      {/* Optional dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        }}
      />

      {/* Centered content */}
      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center h-100"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <h1 className="text-white fw-bold mb-3">Your Title Here</h1>
        <p className="text-white fs-5">
          Your subtitle or description goes here.
        </p>
      </Container>
    </div>
  );
};

export default My_Story;
