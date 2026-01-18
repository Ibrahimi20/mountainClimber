import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import MountainTicker from './ountainTicker';

const Navbar = ({ onMenuToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      onMenuToggle(next); // 🔥 synchro avec MainLayout
      return next;
    });
  };
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const [navbarColor, setNavbarColor] = useState('transparent');
  const location = useLocation();
  useEffect(() => {
    // Change color based on URL
    if (location.pathname === '/') {
      setNavbarColor('transparent'); // home page
    } else {
      setNavbarColor('#000'); // other pages
    }
  }, [location.pathname]);

  // Disable body scroll menu open
  useEffect(() => {
    document.body.style.overflowX = 'hidden'; // Prevent horizontal scroll ALWAYS
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navItems = [
    { label: 'MY STORY', to: '/My_Story' },
    { label: 'CLIMB WITH ME', to: '/climb_with_me' },
    { label: 'RUN WITH ME', to: '/run_with_me' },
    { label: 'Shop', to: '/shop' },
    { label: 'talks', to: '/talks' },
    { label: 'Podcast', to: '/Podcast' },
    { label: 'CONTACT ME', to: '/contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // dès qu'on scrolle un peu
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg fixed-top pb-4 w-100 ${
          scrolled ? 'navbar-scrolled' : ''
        }`}
        style={{
          zIndex: 1500,
          backgroundColor: navbarColor, // dynamic color here
          transition: 'background-color 0.4s ease',
        }}
      >
        <div className="container-fluid px-3 px-lg-4 d-flex justify-content-between align-items-center">
          {/* LOGO */}
          <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
            Mourad Ghanem
          </Link>

          {/* MOBILE ICONS (TikTok + Instagram + three dots) */}
          <div className="d-flex align-items-center gap-3 d-lg-none text-white">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
            >
              <FaLinkedinIn />
            </a>

            {/* BURGER / CLOSE BUTTON */}
            <button
              className="border-0 bg-transparent p-0"
              onClick={toggleMenu}
              style={{ zIndex: 1200 }}
            >
              {menuOpen ? (
                <IoClose size={32} color="white" />
              ) : (
                <IoMenu size={32} color="white" />
              )}
            </button>
          </div>

          {/* DESKTOP MENU (center) */}
          <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
            <ul className="navbar-nav  whitespace-nowrap gap-4">
              {navItems.slice(0, -1).map((item) => (
                <li className="nav-item whitespace-nowrap" key={item.label}>
                  <Link
                    className="nav-link text-uppercase text-white fw-bold px-2 custom-link"
                    style={{}}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP RIGHT SECTION */}
          <div className="d-none d-lg-flex align-items-center gap-3 text-white">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5 opacity-75"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5 opacity-75"
            >
              <FaLinkedinIn />
            </a>

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="btn   fw-bold  text-uppercase"
              style={{
                backgroundColor: '#ffb400',
                border: 'none',
                letterSpacing: '0.5px',
                color: '#fff',
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ MOUNTAIN TICKER UNDER NAVBAR */}
      {/* <div
        style={{
          position: 'fixed',
          // top: scrolled ? '70px' : '90px', // adapt to navbar height
          width: '100%',
          zIndex: 1400,
        }}
      >
        <MountainTicker />
      </div> */}
      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 d-lg-none 
        d-flex flex-column justify-content-center align-items-center
        bg-black text-white 
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
        style={{
          transition: 'opacity 0.35s ease',
          zIndex: 1100,
        }}
      >
        <ul className="navbar-nav text-center">
          {navItems.map((item) => (
            <li className="nav-item my-3" key={item.label}>
              <Link
                className="nav-link fs-3 fw-bold text-uppercase"
                style={{ letterSpacing: '1px' }}
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
