import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

import TextField from "@mui/material/TextField";
const BecomeSeller = () => {
  const [sellerType, setSellerType] = React.useState("");
  const handleChange = (event) => {
    setSellerType(event.target.value);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                color="warning"
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
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Verification Code"
                variant="outlined"
                size="small"
                color="warning"
                sx={{ width: "45ch" }}
              />
              <Button variant="contained" sx={{ width: "20ch" }}>
                Re-Send Code
              </Button>
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="StoreName"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
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
              />
              <TextField
                id="outlined-basic"
                label="Address2"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="City/Town"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="State/Country"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="PostalCode/Zip"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="StorePhone"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ width: "32rem" }} className="ms-2">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ height: "2.5rem" }}
                >
                  Seller Type
                </InputLabel>
                <Select
                  sx={{ height: "2.5rem" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sellerType}
                  label="Select Country"
                  onChange={handleChange}
                  defaultValue={10} // Set the default value to 10 (United States)
                >
                  <MenuItem value={10}>Individual Seller</MenuItem>
                  <MenuItem value={20}>Contractor</MenuItem>
                  <MenuItem value={30}>Distributtor</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="ShopDescription"
                variant="outlined"
                size="small"
                color="warning"
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
                  width: "30ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                size="small"
                color="warning"
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            fullWidth
            className="w-75 my-4"
            style={{ marginLeft: "11rem" }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
