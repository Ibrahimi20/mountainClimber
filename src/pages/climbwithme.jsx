import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
} from 'react-bootstrap';
import { useEffect, useRef } from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import '../PageStyle/StoryPage.css';

const NAVBAR_HEIGHT = 48;

const ClimbWithMe = () => {
  const [show, setShow] = useState(false);
  const revealRefs = useRef([]);

  const expeditions = [
    {
      name: 'Mount Everest',
      height: '8,848.86 m',
      region: 'Asia',
      year: 2023,
      climbs: 1,
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b',
    },
    {
      name: 'Kilimanjaro',
      height: '5,895 m',
      region: 'Africa',
      year: 2017,
      climbs: 2,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada',
    },
    {
      name: 'Aconcagua',
      height: '6,961 m',
      region: 'South America',
      year: 2019,
      climbs: 2,
      image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2',
    },
    {
      name: 'K2',
      height: '8,611 m',
      region: 'Asia',
      year: 2024,
      climbs: 1,
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8',
    },

    {
      name: 'Mount Vinson',
      height: '4,892 m',
      region: 'Antarctica',
      year: 2024,
      climbs: 1,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    },
    {
      name: 'Mount Toubkal',
      height: '4,167 m',
      region: 'Africa (Morocco)',
      year: 2015,
      climbs: 21,
      image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91',
    },
  ];

  /* ================= Scroll Reveal ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ================= Parallax ================= */
  useEffect(() => {
    const hero = document.querySelector('.story-hero');
    const onScroll = () => {
      hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="story-hero d-flex align-items-center">
        <div className="story-overlay" />
        <Container className="text-center story-hero-content">
          <h1 className="story-quote">
            You don't need experience to start
            <br />
            just the courage to take
            <br />
            the first step
          </h1>
        </Container>
      </section>

      {/* ================= STORY ================= */}
      <section
        className="story-section reveal"
        ref={(el) => (revealRefs.current[0] = el)}
      >
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <motion.img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop"
                srcSet="
        https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop 600w,
        https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop 1000w,
        https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop 1600w
      "
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                alt="Climbing journey"
                className="img-fluid story-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <p className="story-big-text">
                My journey into mountaineering began with curiosity and fear.
                The first steps were slow, uncertain, but every climb taught
                discipline, patience, and humility. Mountains became my school.
              </p>

              <button
                className="story-learn-more"
                onClick={() => setShow(true)}
              >
                Learn more →
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= MODAL ================= */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered={false}
        contentClassName="  "
        dialogClassName="story-modal-dialog pt-2  "
      >
        {/* Image (fixed) */}
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Mountaineering"
          />
        </div>

        {/* Scrollable body */}
        <Modal.Body className="story-modal-body">
          <span className="story-badge">🏔️ Mountaineering Journey</span>

          <h3 className="story-title">Lessons from the Summit</h3>

          <p className="story-text">
            Over the years, mountaineering shaped my mindset more than my body.
            From freezing alpine mornings to long nights planning routes, I
            learned resilience, risk awareness, and respect for nature.
          </p>

          <p className="story-text muted">
            Each ascent reinforced one truth: progress is built step by step,
            never rushed, always earned.
          </p>

          {/* TEST SCROLL */}
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="story-text muted">
              Extra content line {i + 1}
            </p>
          ))}
        </Modal.Body>
      </Modal>

      <>
        {/* ================= EXPEDITIONS ================= */}
        <section className="expeditions-section">
          <Container>
            <h2 className="section- text-start">Trekking Regions</h2>

            {expeditions.map((exp, index) => (
              <Row key={index} className="expedition-row mb-4">
                {[0, 1].map((colIndex) => {
                  const item = expeditions[index * 2 + colIndex];
                  if (!item) return null;

                  return (
                    <Col key={colIndex} xs={12} md={6} className="mb-3">
                      <div className="expedition-card-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="expedition-img"
                          loading="lazy"
                        />

                        {/* TOP INFO */}
                        <div className="overlay overlay-top">
                          <h3>{item.name}</h3>
                          <span>📏 {item.height}</span>
                          <span>🌍 {item.region}</span>
                        </div>

                        {/* BOTTOM INFO */}
                        <div className="overlay overlay-bottom">
                          <span>📅 Year: {item.year}</span>
                          <span>
                            🧗 Climbs: {item.climbs} ascent
                            {item.climbs > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            ))}
          </Container>
        </section>

        {/* ================= STYLES EXPEDITIONS ================= */}
        <style>{`
          /* MOBILE FIRST */
          .expeditions-section {
            background: #0c0c0c;
            color: #ffffff;
            padding: 3rem 0;
          }
  
          .section-title {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 3rem;
            letter-spacing: 1px;
          }
  
          .expedition-row {
            margin-bottom: 3rem;
          }
  
          .expedition-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 1rem;
          }
  
          .expedition-card {
            background: #151515;
            border-radius: 1rem;
            padding: 1.5rem;
            height: 100%;
          }
  
          .expedition-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
  
          .meta {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.95rem;
            opacity: 0.9;
          }
  
          /* TABLET & DESKTOP */
          @media (min-width: 768px) {
            .section-title {
              font-size: 2.4rem;
            }
  
            .expedition-img {
              height: 320px;
            }
  
            .meta {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 1rem;
            }
  
            .reverse-desktop {
              flex-direction: row-reverse;
            }
          }
        `}</style>
      </>

      <>
        <section className="athletics-section">
          <Container>
            <h2 className="section-title text-start">Talk to an Expert</h2>

            {/* {achievements.map((run, index) => (
              <Row
                key={index}
                className={`run-row ${
                  index % 2 !== 0 ? 'reverse-desktop' : ''
                }`}
              >
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <img
                    src={run.image}
                    alt={run.name}
                    className="run-img"
                    loading="lazy"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <div className="run-card">
                    <h3>{run.name}</h3>
                    <p className="run-type">{run.type}</p>
                    <p className="run-desc">{run.description}</p>

                    <div className="run-meta">
                      <span>📍 {run.region}</span>
                      <span>📅 {run.year}</span>
                      <span>⏱️ PB: {run.personalBest}</span>
                      <span>🏃 Runs: {run.runs}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))} */}
          </Container>
        </section>

        <style>{`
          /* MOBILE FIRST */
          .athletics-section {
            background: #010101;
            color: #fff;
            padding: 3rem 0;
          }
  
          .section-title {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 2.5rem;
          }
  
          .run-row {
            margin-bottom: 2.5rem;
          }
  
          .run-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 1rem;
          }
  
          .run-card {
            background: #111;
            padding: 1.5rem;
            border-radius: 1rem;
            height: 100%;
          }
  
          .run-card h3 {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
          }
  
          .run-type {
            font-size: 1rem;
            font-weight: 600;
            opacity: 0.85;
          }
  
          .run-desc {
            font-size: 0.95rem;
            margin: 1rem 0;
            opacity: 0.9;
            line-height: 1.4;
          }
  
          .run-meta {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.95rem;
            opacity: 0.9;
          }
  
          @media (min-width: 768px) {
            .section-title {
              font-size: 2.4rem;
            }
  
            .run-img {
              height: 300px;
            }
  
            .run-meta {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 1rem;
            }
  
            .reverse-desktop {
              flex-direction: row-reverse;
            }
          }
        `}</style>
      </>
    </>
  );
};

export default ClimbWithMe;
