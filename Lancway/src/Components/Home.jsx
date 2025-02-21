import Sidebar from "./Navbar/Sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "../App.css";
import AuthForm from "./Login/AuthForm.jsx";
import Slider from "./Slider.jsx";
// import Background from "./Backgrounds/Background.jsx";
import Background2 from "./Backgrounds/Background2.jsx";
import HeroCarousel from "./Sliders/HeroCarousel.jsx";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", background: "Black" }}>
      <Navbar username="Ritik" isLoggedIn={true} />
      <Background2 />

      <Sidebar />
      {/* <Slider /> */}

      <HeroCarousel/>

      <main>{/* <AuthForm /> */}</main>
    </div>
  );
};

export default Home;
