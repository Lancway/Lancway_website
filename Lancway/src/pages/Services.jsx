import "./CSS/services.css";
import ServiceCard from "../components/Services/ServiceCard";
import StepCard from "../components/Services/StepCard";
import PricingCard from "../components/Services/PricingCard";
import Banner from "../components/Banner/Banner";

const Services = () => {
  return (
    <>
      <div className="services-page">

        <Banner
          title="OUR SERVICES"
          subtitle="Tailored for Your Business Needs!"
          buttonText="Explore Services"
          bgImage="https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg"
        />

        <ServiceCard />

        <StepCard />

        <PricingCard />
      </div>
    </>
  );
};

export default Services;
