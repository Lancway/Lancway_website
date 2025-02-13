import Sidebar from "./Navbar/Sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import ProjectCard from "./ProjectCard";
import ProfileCard from "./Profile";
//import "./App.css";
import AuthForm from "./AuthForm";
import Slider from "./Slider.jsx";
const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* Sidebar Component */}
      <Sidebar />

      <Slider/>

      <main style={{ flexGrow: 1 }}>
        {/* Navbar Component */}
        <Navbar username="Ritik" isLoggedIn={true} />

        
        <div>
          <ProjectCard
            project={{
              image: "your-image-url.jpg",
              name: "Delon Revolt",
              price: "1,199",
              description:
                "1.83 Display | BT Calling | Fastcharge | 110+ Sports Mode | 200+ WatchFaces Smartwatch",
            }}
          />
        </div>
        <div>
          <ProfileCard
            person={{
              image: "your-image-url.jpg",
              name: "John Doe",
              degree: "PhD in Computer Science",
              experience: "10",
            }}
          />
        </div>
        <div>
          <AuthForm />
        </div>
      </main>
    </div>
  );
};
export default Home;
