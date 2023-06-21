import React, { useState, useContext, useEffect, useMemo } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import "../../Components/BecomeSeller/BecomeSeller.css";
import { addOrder } from "../../../src/rtk/features/order/AddOrderSlice";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
const BecomeSeller = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    userName: "",
    storeName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phoneNumberStore: "",
    roleType: "",
    shortDescription: "",
    email: "",
    password: "",
    country: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  console.log("formValue", formValue);

  const ResponceFromAddOrder = useSelector(
    (state) => state.AddOrder.order.status
  );
  const customId = "custom-id-yes";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addVendorInputHandle = ({ target: { name, value } }) => {
    if (["postcode", "phoneNumberStore"].includes(name)) {
      setFormValue({
        ...formValue,
        [name]: !isNaN(value) ? value : "",
      });
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
  };

  const requiredFields = [
    "userName",
    "email",
    "storeName",
    "address1",
    "country",
    "postcode",
    "phoneNumberStore",
    "roleType",
    "shortDescription",
    "password",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = requiredFields.some(
      (fieldName) => !formValue[fieldName]
    );

    if (hasEmptyFields) {
      toast.error("Please fill all the required fields", {
        toastId: customId,
      });
      return;
    }

    const formFields = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      userName: formValue.userName,
      storeName: formValue.storeName,
      address1: formValue.address1,
      address2: formValue.address2,
      city: formValue.city,
      state: formValue.state,
      postcode: formValue.postcode,
      phoneNumberStore: formValue.phoneNumberStore,
      roleType: formValue.roleType,
      shortDescription: formValue.shortDescription,
      email: formValue.email,
      password: formValue.password,
      country: formValue.country,
    };

    const form = new FormData();

    Object.entries(formFields).forEach(([name, value]) => {
      form.append(name, value);
    });

    dispatch(addOrder(formValue))
      .then(() => {
        switch (ResponceFromAddOrder) {
          case "success":
            toast.success(" Vendor Creation Successfully", {
              toastId: customId,
            });
            navigate("/OrderListing");
            break;
          case "fail":
            toast.error("Internal server Error", {
              toastId: customId,
            });
            break;
          case "Internal server error":
            toast.error("Backend server Crash", {
              toastId: customId,
            });
            break;
          default:
            break;
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [sellerType, setSellerType] = React.useState("");
  const handleChange = (event) => {
    setSellerType(event.target.value);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.firstName}
                  name="firstName"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  name="lastName"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.lastName}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  onChange={addVendorInputHandle}
                  value={formValue.email}
                  variant="outlined"
                  name="email"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Verification Code"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="hyperlinkin_becomeseller">
                  <span className="text-end resendhyperlink">
                    <a href="/resend-code" className="td--ul tc--lg">
                      Resend
                    </a>
                  </span>
                </div>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Username"
                  name="userName"
                  onChange={addVendorInputHandle}
                  value={formValue.userName}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Mobile Number"
                  onChange={addVendorInputHandle}
                  value={formValue.phoneNumberStore}
                  variant="outlined"
                  name="phoneNumberStore"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.password}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  name="country"
                  onChange={addVendorInputHandle}
                  value={formValue.country}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: "32rem" }} className="ms-2">
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      height: "2.5rem",
                      fontSize: "14px",
                      color: "#9b9691",
                    }}
                  >
                    Seller Type
                  </InputLabel>
                  <Select
                    sx={{ height: "2.5rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Country"
                    onChange={addVendorInputHandle}
                    value={formValue.roleType}
                    defaultValue={"Contractor"}
                    name="roleType"
                  >
                    <MenuItem value="Individual Seller">
                      Individual Seller
                    </MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Distributtor">Distributtor</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Store Name"
                  name="storeName"
                  onChange={addVendorInputHandle}
                  value={formValue.storeName}
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Address1"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={addVendorInputHandle}
                  value={formValue.address1}
                  name="address1"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address2"
                  variant="outlined"
                  onChange={addVendorInputHandle}
                  value={formValue.address2}
                  name="address2"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="City/Town"
                  onChange={addVendorInputHandle}
                  value={formValue.city}
                  name="city"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="State"
                  onChange={addVendorInputHandle}
                  value={formValue.state}
                  name="state"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "85ch",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  onChange={addVendorInputHandle}
                  value={formValue.postcode}
                  name="postcode"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Shop Description"
                  onChange={addVendorInputHandle}
                  value={formValue.shortDescription}
                  name="shortDescription"
                  variant="outlined"
                  size="small"
                  color="warning"
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      color: "#9b9691",
                    },
                  }}
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              className="w-75 my-4"
              style={{ marginLeft: "11rem" }}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
