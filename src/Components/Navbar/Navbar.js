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
import {
  register,
  reset,
  logout,
  login,
} from "../../rtk/features/auth/authSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import "yup-phone";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import Select from "@mui/material/Select";
import "../Navigation/Navigation.css";
import facebookimg from "../../Images/iconsfacebook.png";
import googleimg from "../../Images/iconsgoogle.png";
import "../Navbar/Navbar.css";
import Navigation4 from "../Navigation4/Navigation4";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  mobilenumber: "",
  password: "",
};

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
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

  const Navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [country, setCountry] = React.useState("");

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

  const signupSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Please enter valid name")
      .min(2)
      .max(40)
      .required("firstName   is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Please enter valid name")
      .min(2)
      .max(40)
      .required("lastName is required"),
    userName: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, "userName must be Alphanumeric")
      .min(4)
      .max(10)
      .required("userName is required"),
    mobilenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "mobile number is not valid")
      .required("mobile number is required"),
    email: Yup.string()
      .email("Email must be in a correct format")
      .required("Please enter your email"),
    password: Yup.string().min(8).required("password is required"),
    country: Yup.string()
      .oneOf(
        ["United States", "Canada", "Mexico"],
        "country selection is required"
      )
      .required("Please select at least one country"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        if (values) {
          console.log("Registration ~ values", values);
          dispatch(register(values));
          toast.success("User Registration Sucessfull");
          handleCloseSignupForm();
          // dispatch(logout());
          // dispatch(reset());
          // navigate("/");
          action.resetForm();
        } else if (isError) {
          toast.error(message);
        }
      },
    });
  console.log("Registration ~ errors", errors);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange2 = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("login click");
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
    console.log("userdata in loginform", userData);
    navigate("/becomeseller");
  };

  return (
    <div className="container-fluid navbar-light bg-light p-0 m-0">
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
            fontSize: "1.5rem",
          }}
        >
          Login
        </DialogTitle>
        <DialogContent style={{ height: "500px" }}>
          <Form onSubmit={handleSubmit2}>
            <div>
              <label
                className="mb-1"
                htmlFor="userName"
                style={{
                  lineHeight: "26px",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                USERNAME OR EMAIL ADDRESS{" "}
              </label>
              <TextField
                id="email"
                type="email"
                name="email"
                onChange={onChange2}
                value={email}
                variant="outlined"
                fullWidth
                autoComplete="off"
                size="small"
                required
                label="Enter Username or Email Address"
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
                onChange={onChange2}
                value={password}
                name="password"
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

            <div className="ms-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Stay Signed In"
                size="small"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 18 },
                  fontSize: 10, // Decreased font size (adjust the value as needed)
                }}
              />
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
          </Form>
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
            <img src={facebookimg} width={16} height={16} alt="facebook" />
            <span className="ms-2">Continue with Facebook</span>
          </button>
          <button className="googlebtninNavbar mt-3" type="button">
            <img
              src={googleimg}
              width={13}
              height={13}
              alt="google"
              style={{ marginLeft: "-16px" }}
            />{" "}
            <span className="ms-2" style={{ marginLeft: "-9px" }}>
              Continue with Google
            </span>
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
          <Form onSubmit={handleSubmit}>
            <div className="twoinputfieldcnt mt-2 mb-4">
              <TextField
                fullWidth
                id="firstName"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                className="mx-3"
                label="First Name"
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
              />

              <TextField
                fullWidth
                id="lastName"
                type="text"
                value={values.lastName}
                name="lastName"
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                label="Last Name"
                inputProps={{
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
              />
            </div>
            <div className="errorcnt">
              <div className="errortext">
                {errors.firstName && touched.firstName ? (
                  <p className="form-error">{errors.firstName}</p>
                ) : null}{" "}
              </div>
              <div className="errortext">
                {errors.lastName && touched.lastName ? (
                  <p className="form-error">{errors.lastName}</p>
                ) : null}
              </div>
            </div>
            <div className="twoinputfieldcnt  mb-4">
              <TextField
                fullWidth
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                className="mx-3"
                label="Email"
                inputProps={{
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
              />

              <TextField
                fullWidth
                id="mobilenumber"
                type="text"
                value={values.mobilenumber}
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                label="Mobile Number"
                inputProps={{
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
              />
            </div>
            <div className="errorcnt">
              <div className="errortext">
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}{" "}
              </div>
              <div className="errortext">
                {errors.mobilenumber && touched.mobilenumber ? (
                  <p className="form-error">{errors.mobilenumber}</p>
                ) : null}
              </div>{" "}
            </div>

            <div className="twoinputfieldcnt mb-4">
              <TextField
                fullWidth
                id="userName"
                type="text"
                value={values.userName}
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                className="mx-3"
                label="userName"
                inputProps={{
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
              />

              <TextField
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onChange={handleChange}
                variant="outlined"
                autoComplete="off"
                size="small"
                label="Password"
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    color: "#9b9691",
                  },
                }}
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
            <div className="errorcnt">
              <div className="errortext">
                {errors.userName && touched.userName ? (
                  <p className="form-error">{errors.userName}</p>
                ) : null}{" "}
              </div>{" "}
              <div className="errortext">
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
            </div>

            <Box className="mb-4">
              <FormControl sx={{ width: "32.4rem" }} className="ms-3">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    height: "2.5rem",
                    fontSize: "14px",
                    bottom: "7px",
                    top: "unset",
                  }}
                >
                  Select Country
                </InputLabel>
                <Select
                  sx={{ height: "2.5rem", fontSize: "14px", color: "#9b9691" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.country}
                  name="country"
                  label="Select country"
                  onChange={handleChange}
                  defaultValue={"United States"} // Set the default value to 10 (United States)
                >
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Mexico">Mexico</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="errorcnt">
              <div className="errortext">
                {errors.country && touched.country && (
                  <p className="form-error">{errors.country}</p>
                )}
              </div>
            </div>

            <div class="caption signup__footer__disclaimer">
              <span>
                By creating an account, you agree to{" "}
                <a href="/terms" place="terms" className="td--ul tc--lg">
                  Contractor Surplus Store
                </a>{" "}
                and{" "}
                <a href="/privacy" place="privacy" className="td--ul tc--lg">
                  Privacy Policy
                </a>
                .
              </span>
            </div>
            <div className="flexprpty">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Stay Signed In"
                size="small"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 18 },
                  fontSize: 10, // Decreased font size (adjust the value as needed)
                }}
              />
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
          </Form>
        </DialogContent>
      </Dialog>
      <Navigation4 />
    </div>
  );
};

export default Navbar;
