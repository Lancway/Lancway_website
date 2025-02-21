import { useState, useEffect } from "react";
import "./Sidebar.css"; 
import logo from "../../assets/LancLogobgremoved2.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setCollapsed(window.innerWidth >= 768); // Always collapsed on laptops
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".sidebar") && !event.target.closest(".menu-btn")) {
        setCollapsed(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  return (
    <>
      <div 
        className={`sidebar ${collapsed ? "collapsed" : "expanded"}`} 
        onMouseEnter={() => !isMobile && setCollapsed(false)}
        onMouseLeave={() => !isMobile && setCollapsed(true)}
      >
        <a href="/" className="logo-wrapper">
          <span className="fa-brands fa-uikit"></span>
          <span className="brand-name">
            <img src={logo} alt="Lancway Logo" />
          </span>
        </a>

        <div className="separator"></div>

        <ul className="menu-items">
          {[
            { icon: "fa-house", label: "Home" },
            { icon: "fa-layer-group", label: "Dashboard" },
            { icon: "fa-chart-line", label: "Analytics" },
            { icon: "fa-chart-simple", label: "Leaderboard" },
            { icon: "fa-user", label: "Account" },
            { icon: "fa-gear", label: "Settings" },
            { icon: "fa-comment-dots", label: "Contact" }
          ].map((item, index) => (
            <li key={index}>
              <a href="#">
                <span className={`icon fa ${item.icon}`}></span>
                <span className="item-name">{item.label}</span>
              </a>
              <span className="tooltip">{item.label}</span>
            </li>
          ))}
        </ul>

        {isMobile && (
          <button 
            className="menu-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i className={`fa ${collapsed ? "fa-bars" : "fa-times"}`}></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;
