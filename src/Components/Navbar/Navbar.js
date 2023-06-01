import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import "../Navigation/Navigation.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const Navigate = useNavigate();
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

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleLoginClick = () => {
    setIsLoginFormOpen(true);
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    Navigate("/combonew");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // Reset form fields
    setUsername("");
    setPassword("");
    // Close the login form
    setIsLoginFormOpen(false);
  };

  return (
    <div className="container-fluid navbar-light bg-light">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-light bg-light justify-content-between mx-5">
            <a className="navbar-brand">
              <img
                src="https://contractorsurplusstore.com/wp-content/uploads/2022/12/site-logo.png"
                height={50}
                width={233}
                alt="Logo"
              />
            </a>
            <div className="headerloginsignup">
              <a href="/#" className="me-5 signinsignupanchor">
                Become a Seller
              </a>
              <a
                href="/#"
                className="pe-2 signinsignupanchor"
                onClick={handleLoginClick}
              >
                Log in
              </a>
              <span className="headerloginsignupverticalbar">|</span>
              <a
                href="/signup"
                data-et-name="intro_tap_signup"
                className="ps-2 signinsignupanchor"
              >
                Sign up
              </a>
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        open={isLoginFormOpen}
        onClose={handleCloseLoginForm}
        className="custom-dialog"
        style={{
          maxWidth: "600px",

          height: "100vh",
          marginLeft: "auto",
        }}
      >
        <DialogTitle
          className="my-4"
          style={{
            textAlign: "center",
            lineHeight: "28px",
            fontWeight: "700",
            fontSize: "1rem",
          }}
        >
          Login
        </DialogTitle>
        <DialogContent style={{ height: "500px" }}>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label
                className="mb-1"
                htmlFor="username"
                style={{
                  lineHeight: "26px",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                USERNAME OR EMAIL ADDRESS{" "}
              </label>
              <TextField
                id="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                variant="outlined"
                fullWidth
                required
                autoComplete="off"
              />
            </div>
            <div className="my-4">
              <label
                className="mb-1"
                htmlFor="password"
                style={{
                  lineHeight: "26px",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                PASSWORD
              </label>
              <TextField
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                fullWidth
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="remember-me">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <span
                  className="ms-2"
                  style={{
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  Remember Me
                </span>
              </label>
            </div>
            <DialogActions
              style={{ justifyContent: "flex-start" }}
              className="my-2"
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-2"
              >
                Login
              </Button>
            </DialogActions>
          </form>
          <div className="forgot-password" style={{ textAlign: "start" }}>
            <a href="/forgot-password">Lost your password?</a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
