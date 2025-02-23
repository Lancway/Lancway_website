import "./CSS/services.css";
// import Background2 from "../components/Backgrounds/Background2";
import ServiceCard from "../components/Services/ServiceCard";
import StepCard from "../components/Services/StepCard";
import PricingCard from "../components/Services/PricingCard";


const Services = () => {
  return (
    <>
      {/* <Background2 /> */}
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
