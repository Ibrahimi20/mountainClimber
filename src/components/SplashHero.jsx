import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../assets/video/k2-winter-nimsdai-d.mp4';

const SplashHero = () => {
  return (
    <section
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
        className="container h-100 d-flex flex-column justify-content-center align-items-start"
        style={{ position: 'relative', zIndex: 3 }}
      >
        {/* Title */}
        <h1
          className="fw-bold"
          style={{
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0px 4px 10px rgba(0,0,0,0.7)',
          }}
        >
          Explorer les Sommets
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3"
          style={{
            fontSize: '1.4rem',
            maxWidth: '650px',
            lineHeight: '1.6',
            color: '#f0f0f0',
          }}
        >
          Nous organisons des voyages d’aventure pour passionnés d’escalade et
          amoureux de montagnes. Découvrez des paysages uniques et vivez une
          expérience inoubliable au cœur des sommets.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="btn mt-4 px-4 py-2"
          style={{
            backgroundColor: '#2AA8A1',
            color: 'white',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500',
            boxShadow: '0px 3px 12px rgba(0,0,0,0.3)',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#218B86')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2AA8A1')}
        >
          Commencer l’aventure
        </a>
      </div>
    </section>
  );
};

export default SplashHero;
