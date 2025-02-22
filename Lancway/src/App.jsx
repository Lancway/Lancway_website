import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Footer from "./Footer/Footer";
// import Home from "./components/Home";
import Home from "./pages/Home";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <Navbar username={"Ritik"} isLoggedIn={true} />
      <Sidebar />
      {/* <Home /> */}
      <Login/>
      <div className="footer">
      <Footer/>

      </div>
    </>
  );
};

export default App;
