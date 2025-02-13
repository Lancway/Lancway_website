import Sidebar from "./Navbar/Sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import ProjectCard from "./ProjectCard";;
import ProfileCard from "./Profile";
//import "./App.css";
import AuthForm from "./AuthForm";
const Home = () => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Sidebar Component */}
        <Sidebar />
  
        <main style={{ flexGrow: 1 }}>
          {/* Navbar Component */}
          <Navbar username="Ritik" isLoggedIn={true} />
  
          <div style={{ padding: "20px", color: "#fff" }}>
            <h1>Welcome to Lancway Dashboard Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil repudiandae nulla non sint assumenda ipsam doloremque recusandae laudantium modi obcaecati expedita maxime sed iure repellendus saepe ab similique inventore error voluptatibus, amet nam animi temporibus nesciunt. At voluptatem distinctio doloribus ipsum tenetur. Quaerat quibusdam maiores sed praesentium, cum nesciunt iure ab perspiciatis numquam repellendus autem exercitationem in sunt quam esse, magni facilis fugiat veritatis error eum assumenda itaque aperiam impedit. Delectus, soluta numquam. Reprehenderit, voluptas doloribus, dolores architecto ducimus necessitatibus soluta molestias id recusandae aut perspiciatis exercitationem. Amet laboriosam harum, dolorem ut repellat porro error minus voluptates distinctio, reprehenderit ex.</h1>
            <p>Your content goes here!</p>
          </div>
          <div>
          <ProjectCard project={{
   image: "your-image-url.jpg",
    name: "Delon Revolt",
   price: "1,199",
  description: "1.83 Display | BT Calling | Fastcharge | 110+ Sports Mode | 200+ WatchFaces Smartwatch",
     }} />
          </div>
          <div>
          <ProfileCard person={{
    image: "your-image-url.jpg",
    name: "John Doe",
    degree: "PhD in Computer Science",
    experience: "10"
  }} />
  
          </div>
          <div>
        <AuthForm />
      </div>   
        </main>
      </div>
    );
  };
  export default Home;