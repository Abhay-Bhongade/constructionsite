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
import ReactSlider from "./ReactSlider/ReactSlider";
import Navigation3 from "./Navigation3/Navigation3";
import NewListing from "./NewListing/NewListing";

const ComboNew = () => {
  return (
    <div>
      <Navigation />
      <Navigation3 />
      <ReactSlider />
      <NewListing />
      <Footer />
    </div>
  );
};

export default ComboNew;
