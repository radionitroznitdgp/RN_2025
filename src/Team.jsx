// src/Team.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

/* ---------------- IMAGE IMPORTS ---------------- */
// Faculty
import santanu from "./assets/images/faculty/santanu.jpg";
import soumya from "./assets/images/faculty/soumya.jpg";

// 4th Year
import jayantmandal from "./assets/images/4th_yr/Jayant.jpg";
import kirthika from "./assets/images/4th_yr/kir.jpg";
import asif from "./assets/images/4th_yr/asif.jpg";
import ramya from "./assets/images/4th_yr/ramya.jpg";
import kartikeya from "./assets/images/4th_yr/kar.jpg";
import pranesh from "./assets/images/4th_yr/pra.jpg";
import rupali from "./assets/images/4th_yr/rupali.jpg";
import arnab from "./assets/images/4th_yr/arnab.jpg";
import anshika from "./assets/images/4th_yr/ansh.jpg";
import sahil from "./assets/images/4th_yr/sai.JPG";
import sarmistha from "./assets/images/4th_yr/sar.jpg";
import raj from "./assets/images/4th_yr/raj.jpg";
import anshul from "./assets/images/4th_yr/anshul.jpeg";
import mmss from "./assets/images/4th_yr/mmss.jpeg";
import shankar from "./assets/images/4th_yr/shankar.jpg";
import touf from "./assets/images/4th_yr/touf.jpg";
import rishita from "./assets/images/4th_yr/rish.jpg";
import deepsika from "./assets/images/4th_yr/deep.jpg";
import sanjib from "./assets/images/4th_yr/sanjib.jpeg";
import harshada from "./assets/images/4th_yr/harsh.jpg";

// 3rd Year
import aman from "./assets/images/3rd_yr/aman.jpg";
import animesh from "./assets/images/3rd_yr/animesh.JPG";
import anth from "./assets/images/3rd_yr/anth.jpg";
import anurag from "./assets/images/3rd_yr/anurag.jpg";
import bashu from "./assets/images/3rd_yr/bashu.jpg";
import bhav from "./assets/images/3rd_yr/bhav.jpg";
import darshit from "./assets/images/3rd_yr/darshit.jpg";
import debasmitaSaha from "./assets/images/3rd_yr/DebasmitaSaha.jpg";
import gopeshwar from "./assets/images/3rd_yr/Gopeshwar.jpg";
import mmk from "./assets/images/3rd_yr/mmk.jpg";
import pulkit from "./assets/images/3rd_yr/pulkit.jpeg";
import sayantan from "./assets/images/3rd_yr/sayantan.jpg";
import shaswata from "./assets/images/3rd_yr/Shaswata.jpg";
import soni from "./assets/images/3rd_yr/soni.jpg";
import suraj from "./assets/images/3rd_yr/suraj.JPG";
import swastik from "./assets/images/3rd_yr/swastik.jpg";
import thanu from "./assets/images/3rd_yr/thanu.jpg";
import vishu from "./assets/images/3rd_yr/vishu.jpg";
import aditya from "./assets/images/3rd_yr/aditya.jpg";
import debjyoti from "./assets/images/3rd_yr/debjyoti.jpg";
import shruti from "./assets/images/3rd_yr/shruti.jpg";
import soumyadeep from "./assets/images/3rd_yr/soumyadeep.jpg";
import srijan from "./assets/images/3rd_yr/srijan.jpg";

// 2nd Year
import shivamKumar from "./assets/images/2nd_year/shivam.jpg";
import pratik from "./assets/images/2nd_year/Pratik.jpg";
import shobhit from "./assets/images/2nd_year/Shobhit_.jpg";
import raniPrasanna from "./assets/images/2nd_year/Rani.jpg";
import philimon from "./assets/images/2nd_year/Philimon_.jpg";
import suhani from "./assets/images/2nd_year/Suhani.jpg";
import pravat from "./assets/images/2nd_year/Pravat.JPG";
import tolaram from "./assets/images/2nd_year/Tolaram_.jpg";
import pallavi from "./assets/images/2nd_year/Pallavi Kumari_.jpg";
import arijit from "./assets/images/2nd_year/ar1.jpg";
import jayant from "./assets/images/2nd_year/jay.jpg";
import Akhil from "./assets/images/2nd_year/Akhil.jpg";
import Saipriya from "./assets/images/2nd_year/Saipriya .jpg";
import Chandra from "./assets/images/2nd_year/Chandramouli.jpg";
import Shivansh from "./assets/images/2nd_year/Shivansh.jpg";
import ishita from "./assets/images/2nd_year/ishita.jpg";

/* ---------------- MEMBER DATA ---------------- */
const members = {
  faculty: [
    {
      name: "Santanu Das",
      photo: santanu,
      post: "Faculty Advisor",
      domain: "CSE Department",
      instagram: "",
      linkedin: "",
      phone: "1234567890",
      email: "santanu@example.com",
    },
    {
      name: "Soumya Ranjan",
      photo: soumya,
      post: "Faculty Advisor",
      domain: "CSE Department",
      instagram: "",
      linkedin: "",
      phone: "1234567890",
      email: "soumya@example.com",
    },
  ],
  fourthYear: [
    { name: "Jayant Mandal", photo: jayantmandal, post: "President", instagram: "#", linkedin: "#", phone: "123", email: "jayant@example.com" },
    { name: "Kirthika", photo: kirthika, post: "Vice President", instagram: "#", linkedin: "#", phone: "123", email: "kirthika@example.com" },
    // add all 4th year members here similarly...
  ],
  thirdYear: [
    { name: "Aman", photo: aman, post: "Event Head", instagram: "#", linkedin: "#", phone: "123", email: "aman@example.com" },
    { name: "Animesh", photo: animesh, post: "Coordinator", instagram: "#", linkedin: "#", phone: "123", email: "animesh@example.com" },
    // add all 3rd year members...
  ],
  secondYear: [
    { name: "Shivam Kumar", photo: shivamKumar, post: "Member", instagram: "#", linkedin: "#", phone: "123", email: "shivam@example.com" },
    { name: "Pratik", photo: pratik, post: "Member", instagram: "#", linkedin: "#", phone: "123", email: "pratik@example.com" },
    // add all 2nd year members...
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
            <img className="avatar" src={photo} alt={name} />
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
    canvas.className = "particles-canvas";
    document.querySelector(".team-page").appendChild(canvas);

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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update() || p.draw());
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
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
              key={group}
              className={`tab-button ${selectedTab === group ? "active" : ""}`}
              onClick={() => setSelectedTab(group)}
            >
              <span className="tab-text">
                {group === "faculty" && "Faculty Advisor"}
                {group === "fourthYear" && "Office Bearers"}
                {group === "thirdYear" && "Senior Team"}
                {group === "secondYear" && "Junior Team"}
              </span>
              <div className="tab-highlight" />
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">{renderMembers(selectedTab)}</div>
    </div>
  );
}

