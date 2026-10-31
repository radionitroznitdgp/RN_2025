import { useState, useEffect } from "react";
import "./feed.css";
import sad from "/assets/emojis/sad.png";
import neutral from "/assets/emojis/neutral.png";
import doubt from "/assets/emojis/doubt.png";
import happy from "/assets/emojis/happy.png";
import star from "/assets/emojis/star.png";
import heart from "/assets/emojis/heart.png";

// Email destination for feedback submissions
const RECIPIENT_EMAIL = import.meta.env.VITE_FEEDBACK_EMAIL || "pkonel1234@gmail.com";

function Feed() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [feedback, setFeedback] = useState("");

  const [typedText, setTypedText] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const feedbackData = {
    1: {
      emoji: sad,
      message: "We'll work harder."
    },
    2: {
      emoji: neutral,
      message: "Sorry to hear that."
    },
    3: {
      emoji: doubt,
      message: "Thanks! We'll keep improving."
    },
    4: {
      emoji: happy,
      message: "Great! Thanks for your feedback."
    },
    5: {
      emoji: star,
      message: "Thank you! We're glad you loved it!"
    }
  };

  useEffect(() => {
    if (step !== 2 || !rating) return;

    const text = feedbackData[rating].message;

    setTypedText("");
    setShowContinue(false);

    let index = 0;

    const typing = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setShowContinue(true);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [step, rating]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setRating(0);
      setTypedText("");
      setShowContinue(false);
    } else if (step === 3) {
      setStep(2);
      setSubmitError("");
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Rating: `${rating} / 5 Stars`,
          Sentiment: feedbackData[rating]?.message || "",
          Feedback: feedback.trim() || "(No written comment provided)",
          SubmittedAt: new Date().toLocaleString(),
          _subject: `New Feedback Received - ${rating} Star Rating`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setStep(4);
      } else {
        throw new Error(data.message || "Failed to submit feedback.");
      }
    } catch (err) {
      console.error("Feedback submission error:", err);
      setSubmitError("Failed to send feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setOpen(false);

    setTimeout(() => {
      setStep(1);
      setRating(0);
      setHover(0);
      setFeedback("");
      setTypedText("");
      setShowContinue(false);
      setSubmitError("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <>
      <button
        className="feedback-btn"
        onClick={() => setOpen(true)}
      >
        Feedback
      </button>

      {open && (
        <div className="overlay">
          {/* SVG Filter */}
          <svg
            className="svg-container"
            width="0"
            height="0"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="turbulent-displace"
                colorInterpolationFilters="sRGB"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.02"
                  numOctaves="10"
                  result="noise1"
                  seed="1"
                />
                <feOffset in="noise1" result="offsetNoise1">
                  <animate
                    attributeName="dy"
                    values="700;0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </feOffset>

                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.02"
                  numOctaves="10"
                  result="noise2"
                  seed="2"
                />
                <feOffset in="noise2" result="offsetNoise2">
                  <animate
                    attributeName="dy"
                    values="0;-700"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </feOffset>

                <feComposite
                  in="offsetNoise1"
                  in2="offsetNoise2"
                  result="combinedNoise"
                />

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="combinedNoise"
                  scale="30"
                  xChannelSelector="R"
                  yChannelSelector="B"
                />
              </filter>
            </defs>
          </svg>

          <div className="card-container">
            <div className="inner-container">
              <div className="border-outer">
                <div className="main-card"></div>
              </div>

              <div className="glow-layer-1"></div>
              <div className="glow-layer-2"></div>
            </div>

            <div className="modal">
              <div className="overlay-1"></div>
              <div className="overlay-2"></div>
              <div className="background-glow"></div>
              <button
                className="close-btn"
                onClick={closeModal}
              >
                ✕
              </button>

              {(step === 2 || step === 3) && (
                <button
                  className="back-btn"
                  onClick={handleBack}
                >
                  ← Back
                </button>
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <div className="rating-screen">
                  <h2>Rate Your Experience</h2>

                  <p className="rating-sub">
                    Your feedback helps us improve
                  </p>

                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= (hover || rating)
                            ? "star active"
                            : "star"
                        }
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => handleRating(star)}
                      >
                        {star <= (hover || rating)
                          ? "★"
                          : "☆"}
                      </span>
                    ))}
                  </div>

                  {rating > 0 && (
                    <button
                      className="continue-btn"
                      onClick={() => setStep(2)}
                    >
                      Continue
                    </button>
                  )}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="emoji-screen">
                  <div className="big-emoji">
                    <img
                      src={feedbackData[rating].emoji}
                      alt="emoji"
                      className="emoji-img"
                    />
                  </div>

                  <p className="typed-message">
                    {typedText}
                  </p>

                  {showContinue && (
                    <button
                      className="continue-btn"
                      onClick={() => setStep(3)}
                    >
                      Continue
                    </button>
                  )}
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <div className="particles">
                    {[...Array(50)].map((_, i) => (
                      <span
                        key={i}
                        className="particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          fontSize: `${14 + Math.random() * 10}px`,
                          animationDuration: `${6 + Math.random() * 8}s`,
                          animationDelay: `${Math.random() * 5}s`,
                        }}
                      >
                        {i % 3 === 0 ? (
                          "✨"
                        ) : (
                          <img
                            src={feedbackData[rating].emoji}
                            className="particle-img"
                            alt=""
                          />
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="form-screen">
                    <h2>Tell us more</h2>

                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Tell us what you loved, what can be improved, or any suggestions..."
                      disabled={isSubmitting}
                    />

                    {submitError && (
                      <p className="feedback-error-msg">{submitError}</p>
                    )}

                    <button
                      className="submit-btn"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Feedback"}
                    </button>
                  </div>
                </>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="thankyou-screen">
                  <div className="heart">
                    <img
                      src={heart}
                      alt="heart"
                      className="heart-img"
                    />
                  </div>

                  <h2>
                    Thank you for your feedback
                  </h2>

                  <button
                    className="submit-btn"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Feed;
