import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import MoveWithMeSection from './movewithme';

const PartnershipsSection = () => {
  return (
    <div>
      {/* <MoveWithMeSection /> */}
      <section
        id="Partnerships"
        className="d-flex flex-column justify-content-center align-items-center bg-dark "
        style={{
          paddingTop: '200px',
          paddingBottom: '0px',
          gap: '100px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="d-flex flex-column flex-lg-row justify-content-center align-items-start w-100"
          style={{
            maxWidth: '1200px',
            minWidth: '80%',
            gap: '32px',
          }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-start w-100 w-lg-100 mt-5"
            style={{ gap: '32px' }}
          >
            <h3
              className="font-weight-bold text-white text-uppercase text-left"
              style={{
                fontSize: '100px',
                lineHeight: '100px',
                fontFamily: 'Helvetica Neue, sans-serif',
              }}
            >
              partnerships
            </h3>
            <p
              className="text-light text-left"
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontFamily: 'Helvetica Neue, sans-serif',
                fontWeight: 'normal',
              }}
            >
              I collaborate with brands that champion movement, inclusion,
              diversity, and sustainability. It’s not just about
              sponsorships—it’s about collectively creating a positive change in
              society.&nbsp;
            </p>
          </div>
          <a
            href="/partnerships"
            className="btn btn-primary d-flex justify-content-center align-items-center text-white text-uppercase font-weight-bold"
            style={{
              padding: '16px 24px',
              transition: 'all 300ms ease-in-out',
              fontSize: '16px',
              letterSpacing: '0.5px',
            }}
            aria-label="All Partnerships"
          >
            all partnerships
          </a>
        </div>
        <div className="row w-100 justify-content-center">
          {/* CNN x Visit Saudi */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="https://sponsorcontent.cnn.com/edition/2023/saudi-tourism/saudi-sports/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none"
              aria-label="CNN x Visit Saudi"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/screenshot-2025-03-14-at-10-52-20-pm-c91a21a0-450.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)', // Assuming bg-overlay is a dark overlay
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    cnn x visit saudi
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/* Nike */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="#"
              className="d-block text-decoration-none"
              aria-label="Nike"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/nelly-attar-climber-nike-cd701b82-900.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    nike
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/* Bateel */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="https://www.atteline.com/portfolio/bateel-x-nelly-attar/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none"
              aria-label="Bateel"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/20220720-k2-r5-terray-sylvester-0094-4f7267b8-1920.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    bateel
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/* Rotana */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="https://www.rotanaearth.com/initiatives/highlights/86."
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none"
              aria-label="Rotana"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/nelly-x-rotana-staircase-challenge-1-8f9d74a6-900.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    rotana
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/* Apple Music */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="https://music.apple.com/sa/playlist/nelly-attar-music-that-moves-me/pl.39a8ff38da644177975015e18178dd0e"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none"
              aria-label="Apple Music"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/nelly-attar-climber-apple-music-3ee4da70-600.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    apple music
                  </h1>
                </div>
              </div>
            </a>
          </div>

          {/* Columbia */}
          <div className="col-lg-4 col-md-6 mb-3">
            <a
              href="https://www.instagram.com/columbiasportswear_me/reel/CphGB--MxJu/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none"
              aria-label="Columbia"
            >
              <div
                className="d-flex flex-column justify-content-end align-items-center position-relative"
                style={{
                  height: '50vh',
                  backgroundImage:
                    "url('https://www.nellyattar.com/media/123/img-3843-36ac5e1e-600.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(0)',
                  transition: 'filter 300ms ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0)')
                }
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-absolute"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '40px',
                  }}
                >
                  <h1
                    className="font-weight-bold text-white text-uppercase text-center"
                    style={{
                      fontSize: '48px',
                      lineHeight: '48px',
                      fontFamily: 'Helvetica Neue, sans-serif',
                    }}
                  >
                    columbia
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>{' '}
    </div>
  );
};

export default PartnershipsSection;
