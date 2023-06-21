import axios from "axios";
import { decrypt } from "../../../CryptoFunct/CryptoFunct";

// const process.env.REACT_APP_API_URL = "http://localhost:5000/api/users";

const register = async (userData) => {
  console.log(
    "this function is called or not when click on the sign up",
    userData
  );
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "users/signup",
    userData
  );
  console.log("what is in response", response);
  const decryptedResponse = decrypt(response.data.data);
  console.log(
    "checking what is coming in decryptedResponse after user successfully registration",
    decryptedResponse
  );

  if (decryptedResponse) {
    localStorage.setItem("user", JSON.stringify(decryptedResponse));
  }
  return decryptedResponse;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "users/login",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }
  );
  console.log("response", response);
  const decryptedResponse = decrypt(response.data.data);
  console.log(
    "checking what is coming in decryptedResponse in login",
    decryptedResponse
  );
  if (decryptedResponse) {
    console.log(
      " decryptedResponse response data when user login",
      decryptedResponse
    );
    localStorage.setItem("user", JSON.stringify(decryptedResponse));
    localStorage.setItem("token", `Bearer ${decryptedResponse.token}`);
  }
  return decryptedResponse;
};

// const login = async (userData) => {
//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/userLogin`, userData, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "*/*",
//       },
//       withCredentials: true,
//     });

//     if (response.data) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//       localStorage.setItem("token", `Bearer ${response.data.token}`);
//     }

//     return response.data;
//   } catch (error) {
//     // Handle any errors here
//     console.error("Login failed:", error);
//     throw error; // Rethrow the error or handle it appropriately
//   }
// };

const getOtp = async (contactnumber) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/getOtp",
    contactnumber
  );
  return response.data;
};

const verifyOtp = async (otpnumber) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/verifyOtp",
    otpnumber
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", `Bearer ${response.data.token}`);
  }
  return response.data;
};

const resetPassword = async (newPassword) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/resetPassword",
    newPassword
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", `Bearer ${response.data.token}`);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  getOtp,
  verifyOtp,
  resetPassword,
};

export default authService;
