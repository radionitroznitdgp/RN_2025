import { useState, useEffect } from 'react';
import './Navbar.css';
import logoImage from './assets/rnlogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update section if on home page
      if (location.pathname === '/') {
        const sections = ['home', 'events', 'team'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id, path) => {
    setActiveSection(id);
    setMenuOpen(false);

    // If navigating to a different page
    if (location.pathname !== path) {
      if (path === '/sponsors' || path === '/alumni' || path === '/team' || path === '/home') {
        // For sponsor/alumni/team pages, scroll to top after navigation
        navigate(path, { state: { scrollToTop: true } });
      } else {
        navigate(path);
      }
    }
    // If on home page and clicking a home section
    else if (location.pathname === '/' && path === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link
            to="/"
            onClick={() => handleNavClick('home', '/')}
          >
            <img src={logoImage} alt="RN Logo" className="logo-image" />
          </Link>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={menuOpen ? 'active' : ''}>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home', '/')}
              >
                Home
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                onClick={() => handleNavClick('team', '/team')}
                className={activeSection === 'team' ? 'active' : ''}
              >
                Team
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/alumni"
                onClick={() => handleNavClick('alumni', '/alumni')}
                className={activeSection === 'alumni' ? 'active' : ''}
              >
                Alumni
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                onClick={() => handleNavClick('sponsors', '/sponsors')}
                className={activeSection === 'sponsors' ? 'active' : ''}
              >
                Sponsors
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="https://wavecraze2026.radionitroz.in/"
                onClick={() => handleNavClick('wave craze')}
                className={activeSection === 'wave craze' ? 'active' : ''}
              >
                Wave Craze
                <span className="nav-indicator"></span>
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
