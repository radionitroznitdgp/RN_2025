import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const fullText = "Radio Nitro";
  const fullSubtitle = "\"Official Entertainment Club of NIT Durgapur\"";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Main title typewriter effect
 

  // Subtitle typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 80;
    const pauseTime = 2000;

    const typeSubtitle = () => {
      if (!isDeleting) {
        if (index < fullSubtitle.length) {
          setSubtitleText(fullSubtitle.slice(0, index + 1));
          index++;
          setTimeout(typeSubtitle, typeSpeed);
        } else {
          setTimeout(() => {
            isDeleting = true;
            typeSubtitle();
          }, pauseTime);
        }
      } else {
        if (index > 0) {
          setSubtitleText(fullSubtitle.slice(0, index - 1));
          index--;
          setTimeout(typeSubtitle, deleteSpeed);
        } else {
          isDeleting = false;
          setTimeout(typeSubtitle, 500);
        }
      }
    };

    const initialDelay = setTimeout(() => {
      typeSubtitle();
    }, ); // Start after main title finishes typing

    return () => clearTimeout(initialDelay);
  }, [isVisible]);

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className={`home-content ${isVisible ? "visible" : ""}`}>
          <div className="home-text">
            <h1 className="main-title">Radio Nitroz</h1><br />

            <h2 className="subtitle-typewriter">
              {subtitleText}
              <span className="cursor">|</span>
            </h2>

            <p className="subtitle">
              Welcome to the epic multiverse of Radio NITroz – the undisputed
              entertainment overlords of NIT Durgapur! We're not just a club,
              we're a full-blown, high-voltage blockbuster franchise running
              since 2006, with more drama, comedy, and suspense than your
              semester exams!
            </p>
          </div>

          {/* Social Media Section */}
          <div className="home-right-content">
            <h1 className="share">Share us!</h1>
            <div className="social-media-group">
              <div className="social-row top">
                <button
                  className="social-card whatsapp"
                  aria-label="WhatsApp"
                  onClick={() =>
                    window.open(
                      "https://whatsapp.com/channel/0029VbAmYiuInlqNIZAWBk39",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="icon"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 .667C7.84.667.667 7.84.667 16c0 2.827.747 5.6 2.16 8.053L.667 31.333l7.44-2.12A15.253 15.253 0 0 0 16 31.333c8.16 0 15.333-7.173 15.333-15.333S24.16.667 16 .667zm0 28.8c-2.56 0-5.067-.693-7.253-2l-.52-.307-4.8 1.387 1.28-4.693-.347-.56a12.8 12.8 0 1 1 11.64 6.173zm7.467-9.6c-.4-.2-2.373-1.173-2.747-1.307-.373-.133-.64-.2-.907.2-.267.4-1.067 1.307-1.307 1.573-.24.267-.453.28-.853.093-.4-.2-1.707-.627-3.2-2.027-1.187-1.067-1.987-2.387-2.213-2.787-.227-.4-.027-.64.173-.853.173-.173.4-.453.6-.68.2-.227.267-.4.4-.667.133-.267.067-.493.027-.68-.04-.187-.88-2.107-1.2-2.88-.32-.76-.64-.653-.88-.667-.227-.013-.493-.013-.76-.013a1.453 1.453 0 0 0-1.053.493c-.373.4-1.413 1.387-1.413 3.387s1.067 3.92 1.213 4.187c.147.267 2.08 3.2 5.053 4.48.707.307 1.253.493 1.68.633.707.227 1.347.2 1.853.12.567-.087 1.747-.72 2.107-1.413.373-.693.373-1.28.253-1.413-.12-.133-.453-.213-.907-.373z" />
                  </svg>
                </button>
                <button
                  className="social-card linkedin"
                  aria-label="LinkedIn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/radio-nitroz-nitdgp",
                      "_blank"
                    )
                  }
                >
                  <svg className="icon" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </button>
              </div>
              <div className="social-row bottom">
                <button
                  className="social-card facebook"
                  aria-label="Facebook"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/radionitroz.nitdgp/",
                      "_blank"
                    )
                  }
                >
                  <svg className="icon" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </button>
                <button
                  className="social-card instagram"
                  aria-label="Instagram"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/radionitroz.nitdgp/",
                      "_blank"
                    )
                  }
                >
                  <svg className="icon" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
