import ContactUS from "../components/Contact/ContactUS";
import Footer from "../components/Footer/Footer";
import ServiceList from "../components/Services/ServiceCard";
import HeroCarousel from "../components/Sliders/HeroCarousel";


const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <ServiceList/>
      <ContactUS/>
    </>
  )
}

export default Home;