import "./ContactUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-details-section">
      {/* Head Office Address */}
      <div className="contact-details-card" data-aos="fade-right">
        <h3>
          <FaMapMarkerAlt className="contact-details-icon" />
          Head Office Address:
        </h3>
        <p><strong>India Office:</strong> Lorem ipsum dolor sit amet consectetur..</p>
        <p><strong>Canada Office:</strong> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      {/* Call for Help */}
      <div className="contact-details-card" data-aos="fade-up">
        <h3>
          <FaPhoneAlt className="contact-details-icon" />
          Call for Help:
        </h3>
        <p>+91 - XXXXXXXXXX</p>
        <p>+91 - XXXXXXXXXX</p>
      </div>

      {/* Email Information */}
      <div className="contact-details-card" data-aos="fade-left">
        <h3>
          <FaEnvelope className="contact-details-icon" />
          Mail for Information:
        </h3>
        <p>support.lancway@gmail.com</p>
        <p>info@lancway.com</p>
      </div>
    </section>
  );
};

export default ContactInfo;
