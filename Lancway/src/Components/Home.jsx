import Sidebar from "./Navbar/Sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "../App.css";
import AuthForm from "./AuthForm";
import Slider from "./Slider.jsx";
// import Background from "./Backgrounds/Background.jsx";
import Background2 from "./Backgrounds/Background2.jsx";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Background2 />
      <Sidebar />

      {/* <Slider /> */}

      <main style={{ flexGrow: 1 }}>
        <Navbar username="Ritik" isLoggedIn={true} />

        
        <AuthForm />
      </main>
    </div>
  );
};

export default Home;
