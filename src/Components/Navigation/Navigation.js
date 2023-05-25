import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand ps-5" href="#">
          <img
            src="https://contractorsurplusstore.com/wp-content/uploads/2022/12/site-logo.png"
            height={70}
            width={233}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown mx-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Site Construction
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Site Remeditation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Site Preparation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Earthwork
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Concrete
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Precast Concrete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Grouts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mass Concrete
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mansory
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mansory Units
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Stone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Refractories
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Metals
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Metal Joists
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Metal Deck
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Metal Fabrications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Wood and Plastics
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Rough Carpentry
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Finish Carpentry
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Plastic Fabrications
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link">Contact Us</a>
            </li>
          </ul>
          <form className="d-flex pe-5" role="search">
            <div className="icon" onClick={toggleSearch}>
              <SearchIcon sx={{ fontSize: 30 }} />
            </div>
            {isSearchVisible && (
              <div className="search-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </div>
            )}
            <div className="icon">
              <Badge
                badgeContent={1}
                color="default"
                classes={{ badge: "custom-badge" }}
              >
                <FavoriteBorderIcon sx={{ fontSize: 25 }} />
              </Badge>
            </div>
            <div className="icon">
              <AccountCircleIcon sx={{ fontSize: 25 }} />
            </div>
            <div className="icon">
              <Badge
                badgeContent={1}
                color="default"
                classes={{ badge: "custom-badge" }}
              >
                <ShoppingBagIcon sx={{ fontSize: 25 }} />
              </Badge>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
