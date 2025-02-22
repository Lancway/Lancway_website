import "./Footer.css"; // Import the CSS file
import logo from '../assets/LancLogobgremoved2.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Company Logo */}
        <div className="footer-section">
          <img src={logo} alt="Lancway Logo" className="footer-logo" />
          <p className="footer-text">
            Your go-to platform for freelancing, internships, and training programs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Our Services</h3>
          <ul className="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">SEO Optimization</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p className="footer-text">Email: support@lancway.com</p>
          <p className="footer-text">Phone: +91 XXXXXXXXXX</p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Lancway. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
