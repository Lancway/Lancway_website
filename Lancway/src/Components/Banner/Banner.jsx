import "./Banner.css";

const Banner = ({ title, subtitle, buttonText, bgImage }) => {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content">
        <h1 data-aos="fade-up">
          <span style={{ color: "var(--highlight-text)" }}>{title}</span>
        </h1>
        <p data-aos="fade-up">{subtitle}</p>
        {buttonText && (
          <button className="explore-btn" data-aos="fade-up">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
