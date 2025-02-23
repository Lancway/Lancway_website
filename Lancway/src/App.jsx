import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
// import Home from "./components/Home";
import Home from "./pages/Home";
// import Login from "./Pages/Login";
// import Services from "./pages/Services";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // Initialize AOS for animations when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar username={"Ritik"} isLoggedIn={true} />
      <Sidebar />
      
      <Home />
      {/* <Login/> */}
      
      {/* Services Page */}
      {/* <Services /> */}
      
      {/* Footer Section */}
      <Footer/>
    </>
  );
};

export default App;
