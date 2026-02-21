import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import MountainTicker from './components/ountainTicker';

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const section1 = document.getElementById('section-1');
    if (!section1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowTicker(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-120px 0px 0px 0px', // ajuste selon la hauteur voulue
      },
    );

    observer.observe(section1);

    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      <MyNavbar onMenuToggle={setMenuOpen} />

      {/* 🎯 MountainTicker lié à la visibilité de la section 1 */}
      {isHome && !menuOpen && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: 1400,

            /* 🎬 ANIMATION */
            opacity: showTicker ? 1 : 0,
            transform: showTicker ? 'translateY(0)' : 'translateY(-20px)',
            pointerEvents: showTicker ? 'auto' : 'none',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <MountainTicker />
        </div>
      )}

      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
