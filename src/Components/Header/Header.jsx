import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const navigationItems = [
    { label: "Home", id: "home", url: "/" },
    { label: "About", id: "about", url: "/aboutus" },
    { label: "Services", id: "services", url: "/services" },
    { label: "Career", id: "career", url: "/career" },
    { label: "Contact", id: "contact", url: "/contact" },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Core<span className="text-primary">Legos</span>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={activeItem === item.id ? "active" : ""}
              >
                <Link
                  className="nav-link"
                  to={item.url}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
