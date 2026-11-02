import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFoundImg from "/assets/images/404.webp";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-container">
      {/* Background Graphic Layer */}
      <div className="nf-bg-layer" aria-hidden="true">
        <img
          src={notFoundImg}
          alt="404 Background"
          className="nf-bg-image"
          loading="eager"
        />
        {/* Dark cyber/synthwave tint to blend image into the theme */}
        <div className="nf-bg-tint" />
        {/* Radial vignette to fade image edges seamlessly into #0f0f1a */}
        <div className="nf-bg-vignette" />
        {/* Top & bottom seam fades to merge with navbar and footer */}
        <div className="nf-bg-fade-top" />
        <div className="nf-bg-fade-bottom" />
        {/* Ambient neon glows */}
        <div className="nf-ambient-glow nf-glow-1" />
        <div className="nf-ambient-glow nf-glow-2" />
        {/* Subtle grid pattern overlay */}
        <div className="nf-grid-overlay" />
      </div>

      {/* Foreground Hero Content */}
      <div className="not-found-content">
        <div className="nf-glass-card">
          <div className="nf-card-top-glow" aria-hidden="true" />
          <h1 className="nf-glitch-title">404</h1>
          <h2 className="nf-subtitle">Page Not Found</h2>
          <div className="nf-actions">
            <Link to="/" className="nf-btn nf-btn-primary">
              <svg
                className="nf-btn-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
