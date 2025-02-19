import Sidebar from "./Navbar/Sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "../App.css";
import AuthForm from "./Login/AuthForm.jsx";
import Slider from "./Slider.jsx";
// import Background from "./Backgrounds/Background.jsx";
import Background2 from "./Backgrounds/Background2.jsx";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Navbar username="Ritik" isLoggedIn={true} />

      <Sidebar />
      <Slider />

      <main>
        {/* <AuthForm /> */}
        <Background2 />
      </main>
    </div>
  );
};

export default Home;
