import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/nelly-attar-logo-black-acd32e59_Signateur.svg';

const navItems = [
  { label: 'MY STORY', to: '/My_Story' },
  { label: 'CLIMB WITH ME', to: '/climb_with_me' },
  { label: 'RUN WITH ME', to: '/run_with_me' },
  { label: 'Shop', to: '/shop' },
  { label: 'Talks', to: '/talks' },
  { label: 'CONTACT ME', to: '/contact' },
];

function Footer() {
  // Split nav into 2 responsive columns
  const leftNav = navItems.slice(0, 3);
  const rightNav = navItems.slice(3, 6);

  return (
    <footer style={{ backgroundColor: '#0a0a0a' }} className="py-5  text-light">
      <Container>
        {/* TOP SECTION */}
        <Row className="align-items-start text-center text-md-start ">
          {/* LOGO */}
          <Col xs={12} md={3} className="mb-4">
            <img
              src={logo}
              alt="logo"
              style={{ width: '140px', height: 'auto' }}
            />
          </Col>

          {/* NAV - 2 COLUMNS */}
          <Col xs={12} md={6} className="mb-4">
            <Row>
              <Col xs={6} className="d-flex flex-column gap-2">
                {leftNav.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    className="text-light text-decoration-none fw-semibold"
                    style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Col>

              <Col xs={6} className="d-flex flex-column gap-2">
                {rightNav.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    className="text-light text-decoration-none fw-semibold"
                    style={{ whiteSpace: 'nowrap', fontSize: '0.95rem' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Col>
            </Row>
          </Col>

          {/* FOLLOW ME COLUMN */}
          <Col xs={12} md={3} className="text-start mb-4">
            <h6
              className="fw-bold mb-3"
              style={{ letterSpacing: '1px', whiteSpace: 'nowrap' }}
            >
              FOLLOW ME ON SOCIAL MEDIA
            </h6>

            <div className="d-flex justify-content-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaInstagram size={28} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <FaTiktok size={28} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: '#000000ff' }} />
      </Container>
    </footer>
  );
}

export default Footer;
