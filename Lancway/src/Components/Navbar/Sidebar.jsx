import { useState, useEffect } from "react";
import "./Sidebar.css"; // Import CSS for styling
import logo from "../../assets/LancLogobgremoved2.png";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      // You can log the window size here to debug, or adjust based on needs
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: "fa-house", label: "Home" },
    { icon: "fa-layer-group", label: "Dashboard" },
    { icon: "fa-chart-line", label: "Analytics" },
    { icon: "fa-chart-simple", label: "Leaderboard" },
    { icon: "fa-user", label: "Account" },
    { icon: "fa-gear", label: "Settings" },
    { icon: "fa-comment-dots", label: "Contact" },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className={`menu-btn fa ${collapsed ? "fa-bars" : "fa-times"}`}
        onClick={() => setCollapsed(!collapsed)}
      ></button>

      <a href="/" className="logo-wrapper">
        <span className="fa-brands fa-uikit"></span>
        <span className="brand-name"><img src={logo} alt="" /></span>
      </a>

      <div className="separator"></div>

      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">
              <span className={`icon fa ${item.icon}`}></span>
              <span className="item-name">{item.label}</span>
            </a>
            <span className="tooltip">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
