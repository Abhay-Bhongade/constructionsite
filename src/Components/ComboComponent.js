import React from "react";
import Navigation from "./Navigation/Navigation";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import WasteManagment from "./WasteManagment/WasteManagment";
import BannerPage from "./BannerPage/BannerPage";
import Products from "./Products/Products";
import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import BuyerSeller from "./BuyerSeller/BuyerSeller";

const ComboComponent = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Cards />
      <WasteManagment />
      <BannerPage />
      <Products />
      <BuyerSeller />
      <Brands />
      <Services />
      <Footer />
    </div>
  );
};

export default ComboComponent;
