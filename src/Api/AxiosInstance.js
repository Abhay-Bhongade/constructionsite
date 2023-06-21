import axios from "axios";
// import { getAccessToken, getRefreshToken, setAccessToken, getType } from '../utils/common-utils';
// const Api_url = "http://localhost:5000/api/user";

const token = localStorage.getItem("token");
const toke2 = localStorage.getItem("user");
// const user = JSON.parse(localStorage.getItem('user'))

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    Authorization: token,
    toke2,
    "Content-Type": "application/json",
  },
});
export default AxiosInstance;
