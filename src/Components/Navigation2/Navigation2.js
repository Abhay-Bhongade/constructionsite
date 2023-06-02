import React, { useState } from "react";
import "../Navigation2/Navigation2.css";

const Navigation2 = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#F7F7F7",
          boxShadow: "0 1px 5px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 allcategoriesinnav2">
            <li className="nav-item dropdown mx-5">
              <a className="nav-link navlinknav2" href="#">
                All Categories
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex ms-auto pe-5 navbar-nav">
              <li className="nav-item ">
                <a className="nav-link navlinknav2" href="#">
                  Shop
                </a>
              </li>

              <li className="nav-item dropdown mx-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Vendor
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Stores
                  </a>
                  <a className="dropdown-item" href="#">
                    Vendor Dashboard
                  </a>

                  <a className="dropdown-item" href="#">
                    Vendor Membership
                  </a>
                </div>
              </li>
              <li className="nav-item ">
                <a className="nav-link navlinknav2" href="#">
                  How It Works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation2;
