import ContactUS from "../components/Contact/ContactUS";
import FAQ from "../components/Contact/FAQ";
import Footer from "../components/Footer/Footer";
import ServiceList from "../components/Services/ServiceCard";
import HeroCarousel from "../components/Sliders/HeroCarousel";


const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <ServiceList/>
      <FAQ/>
      <ContactUS/>
    </>
  )
}

export default Home;