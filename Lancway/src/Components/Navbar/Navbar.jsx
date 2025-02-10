import "./Navbars.css";
import logo from "../../assets/LancLogobgremoved.png";
import defaultProfile from "../../assets/profile.jpg"; // Ensure the correct file extension

function Navbar(props) {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="Lancway" />
      </div>
      <div className="nav-links">
        {props.isLoggedIn ? (
          <>
            <div className="greet">Hi, {props.username}</div>
            <img
              className="profile-pic"
              src={props.profileImage || defaultProfile} // Corrected usage
              alt="Profile"
            />
          </>
        ) : (
          <>
            <a href="#Login">Login</a>
            <a href="#Signup">Signup</a>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
