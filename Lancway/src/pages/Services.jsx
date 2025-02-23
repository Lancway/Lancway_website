import "./CSS/services.css";
import Background2 from "../components/Backgrounds/Background2";
import ServiceCard from "../components/Services/ServiceCard";
import StepCard from "../components/Services/StepCard";
import PricingCard from "../components/Services/PricingCard";
import { FaCode, FaMobileAlt, FaPaintBrush, FaUserCheck } from "react-icons/fa";


const steps = [
  { step: "01", title: "Select Service", description: "Choose from our wide range of services tailored to your needs." },
  { step: "02", title: "Connect with Talent", description: "We match you with the right experts for your project." },
  { step: "03", title: "Get Your Project Done", description: "Sit back and watch your project come to life!" }
];

const pricingPlans = [
  { title: "Hourly", price: "$30/hr", features: ["Flexible work hours", "Pay as you go", "Great for small tasks"] },
  { title: "Fixed", price: "$500+", features: ["One-time payment", "Project-based pricing", "Ideal for defined projects"] },
  { title: "Subscription", price: "$1000/mo", features: ["Unlimited requests", "Priority support", "Best for ongoing work"] }
];

const Services = () => {
  return (
    <>
      <Background2 />
      <div className="services-page">
        {/* Hero Section */}
        <section className="hero" >
          <h1 data-aos="fade-up" ><span style={{ color: 'var(--highlight-text)' }}>OUR SERVICES</span> <br/>  Tailored for Your Business Needs!</h1>
          <p data-aos="fade-up">High-quality development & design services to scale your business.</p>
          <button className="explore-btn" data-aos="fade-up">Explore Services</button>
        </section>
<br />
        {/* Services Section */}
        
        <ServiceCard />
            

        {/* How It Works Section */}
        
              <StepCard />
        

        {/* Pricing Section */}
     
              <PricingCard  />
            
      </div>
    </>
  );
};

export default Services;
