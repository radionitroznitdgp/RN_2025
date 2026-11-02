import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Feed from "./feed";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links */}
       {/* Quick Links */}
<div className="footer-section">
  <h3>Quick Links</h3>
  <ul className="quick-links">
    {[
      { name: "Home", href: "/" },
      { name: "YouTube", href: "https://www.youtube.com/@RadioNitroz" },
      { name: "Instagram", href: "https://www.instagram.com/radionitroz.nitdgp/" },
      { name: "Facebook", href: "https://www.facebook.com/radionitroz.nitdgp/" },
      { name: "WhatsApp", href: "https://whatsapp.com/channel/0029VbAmYiuInlqNIZAWBk39" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/radio-nitroz-nitdgp/" },
    ].map(({ name, href }) => (
      <li key={name}>
        <a href={href}>{name}</a>
      </li>
    ))}
  </ul>
</div>

        {/* Key Contacts */}
        <div className="footer-section key-contacts-section">
          <h3>Key Contacts</h3>
          <div className="contact-card">
            <p><strong>President:</strong> Basudev Pal <br />📞 +91 7750907396
</p>
            
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
 

  <div className="footer-section key-contacts-section">
           <h3>Contact Us</h3>
          
            <p>📍 National Institute of Technology,<br />
              MG Avenue, Durgapur, West Bengal, India, 713209
</p>
<p> 📩 radionitroz.nitdgp@gmail.com</p>
            
          
        </div>

  <div className="social-icons">
    {[
      { href: "https://www.facebook.com/radionitroz.nitdgp/", icon: <FaFacebook />, label: "Facebook" },
      { href: "https://www.linkedin.com/company/radio-nitroz-nitdgp", icon: <FaLinkedin />, label: "LinkedIn" },
      { href: "https://www.instagram.com/radionitroz.nitdgp/", icon: <FaInstagram />, label: "Instagram" },
      { href: "https://www.youtube.com/@RadioNitroz", icon: <FaYoutube />, label: "YouTube" },
    ].map(({ href, icon, label }) => (
      <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ))}
  </div>
</div>


      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Made with ❤️ by Web Dev Team <br />
          &copy; {new Date().getFullYear()} Radio NITroz. All Rights Reserved.
        </p>
      </div>
     <div className="footer-feedback">
        <Feed/>
      </div>
      
    </footer>
  );
};

export default Footer;
