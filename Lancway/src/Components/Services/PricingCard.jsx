import PropTypes from "prop-types";
import "./Services.css";

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="pricing-card" data-aos="fade-up" data-aos-duration="600">
      <h3 className="pricing-title">{title}</h3>
      <h4 className="pricing-price">{price}</h4>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

// Prop validation
PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const PricingList = () => {
  const pricingPlans = [
    {
      title: "Hourly",
      price: "$30/hr",
      features: ["Flexible work hours", "Pay as you go", "Great for small tasks"],
    },
    {
      title: "Fixed",
      price: "$500+",
      features: ["One-time payment", "Project-based pricing", "Ideal for defined projects"],
    },
    {
      title: "Subscription",
      price: "$1000/mo",
      features: ["Unlimited requests", "Priority support", "Best for ongoing work"],
    },
  ];

  return (
    <section className="pricing">
      <div className="pricing-heading">
        <span></span>
        <h2>Pricing Plans</h2>
        <span></span>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingList;
