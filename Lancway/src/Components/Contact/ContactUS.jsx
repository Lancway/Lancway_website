import "./ContactUs.css";

const ContactUS = () => {
  return (
    <div className="contact-container">
      {/* Title & Description */}
      <h2 className="contact-title" data-aos="fade-up">
        Contact Us
      </h2>
      <p className="contact-description" data-aos="fade-up" data-aos-delay="200">
        If you have any queries or require assistance, please don&apos;t
        hesitate to get in touch with us. We aim to respond to all inquiries
        promptly and provide you with the support you need.
      </p>

      {/* Contact Section */}
      <div className="contact-content">
        {/* Left Section - Contact Details */}
        <div className="contact-info glass-box" data-aos="fade-right">
          <h3>
            <i className="fas fa-map-marker-alt"></i> Location:
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            neque? Lorem ipsum dolor sit amet.
          </p>

          <h3>
            <i className="fas fa-envelope"></i> Email:
          </h3>
          <p>
            <a href="mailto:support@lancway.com">support@lancway.com</a>
          </p>

          <h3>
            <i className="fas fa-phone"></i> Call:
          </h3>
          <span className="phone-call">
            <a href="phone:XXXXXXXXXX">+91 XXXXXXXXXX</a>
          </span>

          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d3151.8354345093747!2d-0.38390418468128985!3d51.50874297963542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzI4LjEiTiAwwrAzMycwMC4yIlc!5e0!3m2!1sen!2suk!4v1605792713434!5m2!1sen!2suk"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="contact-map"
            data-aos="zoom-in-up"
          ></iframe>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form glass-box" data-aos="fade-left">
          <form>
            <div className="form-group">
              <div className="input-wrapper" data-aos="fade-up">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-wrapper" data-aos="fade-up" >
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="input-wrapper" data-aos="fade-up" >
              <i className="fas fa-heading"></i>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="input-wrapper" data-aos="fade-up" >
              <i className="fas fa-comment-dots"></i>
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="send-button" data-aos="" >
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
