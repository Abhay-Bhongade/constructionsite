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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  const [isSignUpFormOpen, setIsSignUpinFormOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const BecomeASellerNavigate = () => {
    Navigate("/becomeseller");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const Navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
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

  const handleSignUPClick = () => {
    setIsSignUpinFormOpen(true);
  };

  const handleCloseSignupForm = () => {
    setIsSignUpinFormOpen(false);
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
              <span
                onClick={BecomeASellerNavigate}
                className="me-5 signinsignupanchor"
              >
                {" "}
                Become a Seller
              </span>
              <a
                href="/#"
                className="pe-2 signinsignupanchor"
                onClick={handleLoginClick}
              >
                Log in
              </a>
              <span className="headerloginsignupverticalbar">|</span>
              <a
                href="/#"
                data-et-name="intro_tap_signup"
                className="ps-2 signinsignupanchor"
                onClick={handleSignUPClick}
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
        <IconButton
          aria-label="close"
          onClick={handleCloseLoginForm}
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>

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
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
      <Dialog
        open={isSignUpFormOpen}
        onClose={handleCloseSignupForm}
        className="custom-dialog"
        style={{
          maxWidth: "800px",
          width: "800px",
          height: "100vh",
          marginLeft: "auto",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseSignupForm}
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          className="mt-4"
          style={{
            textAlign: "center",
            lineHeight: "28px",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          Create Your Account
        </DialogTitle>
        <p className="text-muted text-center">
          Contractor Surplus Store : Buy,Sell And Discover Construction
          Materials
        </p>
        <div className="btncntinNavbar">
          <button className="facebookbtninNavbar" type="button">
            <i className="fa-brands fa-facebook"></i>
            <span className="ms-2">Continue with Facebook</span>
          </button>
          <button className="googlebtninNavbar mt-3" type="button">
            <i className="fa-brands fa-google"></i>
            <span className="ms-2">Continue with Google</span>
          </button>
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            paddingX: 5,
          }}
        >
          <hr style={{ flex: "1", borderColor: "black" }} />
          <Box
            component="span"
            className="text-muted"
            sx={{
              px: 1,

              fontSize: "0.85rem",
            }}
          >
            {"or, continue with email"}
          </Box>
          <hr style={{ flex: "1", borderColor: "black" }} />
        </Box>

        <DialogContent>
          <form onSubmit={handleLoginSubmit}>
            <div className="twoinputfieldcnt mt-2 mb-3">
              <TextField
                fullWidth
                id="firstname"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                className="mx-3"
                label="First Name"
                inputProps={{
                  autoComplete: "off",
                }}
              />

              <TextField
                fullWidth
                id="lastname"
                type="text"
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                label="Last Name"
                inputProps={{
                  autoComplete: "off",
                }}
              />
            </div>
            <div className="twoinputfieldcnt  my-4">
              <TextField
                fullWidth
                id="email"
                type="email"
                value={username}
                onChange={handleUsernameChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                className="mx-3"
                label="Email"
                inputProps={{
                  autoComplete: "off",
                }}
              />

              <TextField
                fullWidth
                id="mobilenumber"
                type="text"
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                label="Mobile Number"
                inputProps={{
                  autoComplete: "off",
                }}
              />
            </div>
            <div className="twoinputfieldcnt  my-4">
              <TextField
                fullWidth
                id="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                className="mx-3"
                label="Username"
                inputProps={{
                  autoComplete: "off",
                }}
              />

              <TextField
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                required
                autoComplete="off"
                size="small"
                label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <Box>
              <FormControl sx={{ width: "32.4rem" }} className="ms-3">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ height: "2.5rem" }}
                >
                  Select Country
                </InputLabel>
                <Select
                  sx={{ height: "2.5rem" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Select Country"
                  onChange={handleChange}
                  defaultValue={10} // Set the default value to 10 (United States)
                >
                  <MenuItem value={10}>United States</MenuItem>
                  <MenuItem value={20}>Canada</MenuItem>
                  <MenuItem value={30}>Mexico</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <p className="text-muted text-center my-3">
              By creating an Account , you afree to{" "}
              <a href="#">Poshmarks's Terms</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>

            <div className="text-center">
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
                  Stay Signed In
                </span>
              </label>
            </div>
            <DialogActions
              style={{ justifyContent: "flex-start" }}
              className="my-2"
            >
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className="mt-2"
              >
                Next
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
