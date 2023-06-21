import React, { useState } from "react";
import "../Navigation2/Navigation2.css";
import { Link, useNavigate } from "react-router-dom";
import "../../Components/Navigation4/Navigation4.css";

const Navigation4 = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Navigate = useNavigate();

  const BecomeASellerNavigate = () => {
    Navigate("/becomeseller");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#F7F7F7",
          boxShadow: "0 1px 5px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="container-fluid ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 allcategoriesinnav2">
            <li className="nav-item dropdown" style={{ marginLeft: "3rem" }}>
              <a
                className="nav-link signinsignupanchor"
                href="#"
                style={{ fontWeight: "500", color: "#000", fontSize: "1rem" }}
              >
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
            <ul className="d-flex ms-auto pe-4 navbar-nav">
              <li className="nav-item" onClick={BecomeASellerNavigate}>
                <a
                  className="nav-link signinsignupanchor"
                  href="#"
                  style={{ fontWeight: "500", color: "#000", fontSize: "1rem" }}
                >
                  Become A Vendor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation4;
