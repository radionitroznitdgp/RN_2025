import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';
import Home from './Home';
import './index.css';
import Sponsors from './sponsors';
import Event from './Event';
import Alumni from './Alumni';
import Preloader from './Preloader';
import Footer from './Footer';
import Team from './Team';
import NotFound from './NotFound';

function AppContent() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const homeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Reset to full opacity when returning to home page
    if (location.pathname === '/') {
      setBackgroundOpacity(1);
    } else {
      setBackgroundOpacity(0);
    }

    const handleScroll = () => {
      // Only apply scroll effect on home page
      if (location.pathname !== '/' || !homeRef.current) return;

      const homeHeight = homeRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(0, 1 - (scrollPosition / (homeHeight * 0.1)));
      setBackgroundOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Force update opacity when home page mounts
  useEffect(() => {
    if (location.pathname === '/' && homeRef.current) {
      const homeHeight = homeRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(0, 1 - (scrollPosition / (homeHeight * 0.1)));
      setBackgroundOpacity(opacity);
    }
  }, [location.pathname, homeRef.current]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: backgroundOpacity,
            transition: 'opacity 0.5s ease-out',
            pointerEvents: 'none' // Add this to prevent interaction issues
          }}>
            <AnimatedBackground />
          </div>

          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <div ref={homeRef}>
                    <Home />
                    <Event />
                   
                  </div>
                </>
              } />
              <Route path="/team" element={<Team />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
