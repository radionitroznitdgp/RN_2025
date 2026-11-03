    instagram:"https://www.instagram.com/__hasiniii_08?igsh=MWtxeDZ1MHNsMGhlYw==",
    linkedin:"https://www.linkedin.com/in/gnana-hasini-majji-a114a137b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    phone:"+917569590040",
    email:"majjignanahasini@gmail.com",
  },
  {
    name: "Dinesh Kumar",
    photo: dinesh,
    domain: "Graphic design",
    instagram:"#",
    linkedin:"#",
    phone:"+918297321466",
    email:"#",
  },
  {
    name: "Rudra Sai Laxmi Prasad",
    photo: rudra,
    domain: "Content Writing",
    instagram:"https://www.instagram.com/irslaxmiprasad?igsh=cWE5MGRmcXF0czhx",
    linkedin:"#",
    phone:"+918895344570",
    email:"rudrasailaxmiprasad9920@gmail.com",
  },
],
};


/* ---------------- MEMBER CARD ---------------- */
const MemberCard = ({ name, photo, post, domain, instagram, linkedin, phone, email }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-blur-area">
          <div className="avatar-wrapper">
            <img className="avatar" src={photo || "/assets/images/default-avatar.webp"} alt={name} />
            <div className="avatar-glow" />
          </div>
          <h3 className="teammember-name">{name}</h3>
          <p className="member-role">{post || domain}</p>
        </div>

        <div className="hover-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href={`tel:${phone}`} className="contact-link">{phone}</a>
            </div>
            <div className="social-links">
              <a href={instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href={linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- TEAM PAGE ---------------- */
export default function TeamPage() {
  const [selectedTab, setSelectedTab] = React.useState("faculty");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const teamPage = document.querySelector(".team-page");
    if (!ctx || !teamPage) return;
    canvas.className = "particles-canvas";
    teamPage.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(108, 99, 255, ${this.size / 3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    };
  }, []);

  const renderMembers = (group) => (
    <div className="card-grid">
      {members[group].map((member, index) => (
        <MemberCard key={index} {...member} style={{ animationDelay: `${index * 0.1}s` }} />
      ))}
    </div>
  );

  return (
    <div className="team-page">
      <div className="header-glow" />
      <div className="particles-container" />

      <h1 className="title">
        <span className="title-text">Radio Nitroz</span>
        <span className="title-sub">Official Entertainment Club</span>
      </h1>

      <div className="tabs-container">
        <div className="tabs">
          {Object.keys(members).map((group) => (
            <button