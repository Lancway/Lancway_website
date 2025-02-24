import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Home from "./pages/Home";
import Login from "./Pages/Login";
import Services from "./pages/Services";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Background2 from "./components/Backgrounds/Background2";
import Contact from "./pages/Contact";


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Background2/>
      <Navbar username={"Ritik"} isLoggedIn={true} />
      <Sidebar />
      
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Services/> */}

      <Contact/>
      
      <Footer/>
    </>
  );
};

export default App;
