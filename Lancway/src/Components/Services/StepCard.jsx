import "./Services.css";

const StepList = ({ step, title, description }) => {
  return (
    <div className="step-card" data-aos="fade-up">
      <h3 className="step-number">{step}</h3>
      <h4 className="step-title">{title}</h4>
      <p className="step-description">{description}</p>
    </div>
  );
};

const StepCard = () => {
  const steps = [
    { step: "01", title: "Select Service", description: "Choose from our wide range of services tailored to your needs." },
    { step: "02", title: "Connect with Talent", description: "We match you with the right experts for your project." },
    { step: "03", title: "Get Your Project Done", description: "Sit back and watch your project come to life!" }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-heading">
        <span></span>
        <h2>How It Works</h2>
        <span></span>
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <StepList key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default StepCard;
