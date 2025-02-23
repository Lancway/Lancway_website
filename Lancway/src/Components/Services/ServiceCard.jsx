import { FaCode, FaMobileAlt, FaPaintBrush, FaUserCheck, FaChartBar, FaBrain } from "react-icons/fa";
import "./Services.css"; // Ensure styling is modular

const services = [
  { id: 1, name: "Web Development", icon: <FaCode />, description: "We create modern, responsive websites that combine visual appeal with seamless functionality. From landing pages to complex web applications, we make your vision a reality." },
  { id: 2, name: "App Development", icon: <FaMobileAlt />, description: "Our team develops intuitive mobile applications for iOS and Android platforms, offering seamless performance and engaging user experiences to meet your business goals." },
  { id: 3, name: "UI/UX Design", icon: <FaPaintBrush />, description: "We craft visually stunning and highly intuitive user interfaces, ensuring a seamless experience for your audience." },
  { id: 4, name: "Power BI", icon: <FaChartBar />, description: "We empower businesses with advanced data visualization tools, turning raw data into meaningful insights that help you make strategic, data-driven decisions." },
  { id: 5, name: "Machine Learning", icon: <FaBrain />, description: "We harness the power of AI to automate processes, discover hidden patterns, and provide insights that optimize workflows and improve decision-making." },
  { id: 6, name: "Consultation", icon: <FaUserCheck />, description: "Our consulting services provide expert guidance to help you navigate the complexities of the digital world, ensuring the success of your initiatives." }
];

const ServiceCard = ({ icon, name, description }) => {
  return (
    <div className="service-card" data-aos="fade-up">
      <div className="service-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServiceList = () => {
  return (
    <section className="services">
      {/* 🔥 Services Heading */}
      <div className="services-heading">
        <span></span>
        <h2>Services</h2>
        <span></span>
      </div>
      <p>We deliver cutting-edge digital solutions tailored to help your business grow and thrive.</p>
      
      {/* 🌟 Service Cards */}
      <div className="service-grid">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            icon={service.icon} 
            name={service.name} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
