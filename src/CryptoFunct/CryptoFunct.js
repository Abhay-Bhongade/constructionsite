import CryptoJS from "crypto-js";

// Encrypt
export const encrypt = (data) => {
  console.log("data", data, process.env.REACT_APP_CRYPTO_KEY);
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_CRYPTO_KEY
  ).toString();
};

// Decrypt
export const decrypt = (data) => {
  var bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_CRYPTO_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
