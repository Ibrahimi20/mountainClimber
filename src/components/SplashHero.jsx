import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../assets/video/k2-winter-nimsdai-d.mp4';
import { Container } from 'react-bootstrap';

const SplashHero = () => {
  return (
    <section
      id="section-1"
      className="position-relative text-white"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* ---- BACKGROUND VIDEO ---- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* ---- DARK OVERLAY ---- */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: 'rgba(0,0,0,0.45)',
          zIndex: 2,
        }}
      ></div>

      {/* ---- TEXT CONTENT ---- */}
      <div
        className="container h-100 d-flex flex-column justify-content-center  align-items-center text-start"
        style={{ position: 'relative', zIndex: 3 }}
      >
        {/* Title */}

        <Container className="text-center story-hero-content">
          <h1 className="story-quote">
            Climbing high.
            <br />
            Running far.
            <br />
            Learning always.
          </h1>
        </Container>
        {/* CTA Button */}
        <a
          href="/My_Story"
          className="btn mt-4 px-4 py-2"
          style={{
            backgroundColor: 'orange',
            color: 'white',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500',
            boxShadow: '0px 3px 12px rgba(0,0,0,0.3)',
            transition: '0.3s',
          }}
        >
          Find out more
        </a>
      </div>
    </section>
  );
};

export default SplashHero;
