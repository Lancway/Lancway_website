import Banner from "../components/Banner/Banner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactUS from "../components/Contact/ContactUS";
import FAQ from "../components/Contact/FAQ";
import "./CSS/Contact.css";

import bgImage from "../assets/contact-banner-Background-info.jpg";
const Contact = () => {
  return (
    <>
      <div className="contactpage">
        <Banner
          title="CONTACT US"
          subtitle="Get in Touch with Our Team!"
          buttonText="Contact Now"
          bgImage={bgImage}
        />
        <ContactInfo/>

        <ContactUS />

        <FAQ/>
      </div>
    </>
  );
};

export default Contact;
