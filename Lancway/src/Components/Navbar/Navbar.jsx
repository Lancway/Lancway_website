import "./Navbars.css";
import logo from "../../assets/LancLogobgremoved2.png";
import defaultProfile from "../../assets/profile.jpg"; // Ensure correct path

function Navbar({ isLoggedIn, username, profileImage }) {
  return (
    <div className="Nav">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Lancway" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <div className="greet">Hi, {username}</div>
            <img
              className="profile-pic"
              src={profileImage || defaultProfile}
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
