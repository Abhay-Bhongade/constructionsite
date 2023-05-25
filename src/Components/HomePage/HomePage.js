import React from "react";
import bannerImage from "../../Images/homepagebanner.png";
import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h3 className="heading pb-0">Our</h3>
        <h3 className="heading pb-0">Construction Essentials</h3>
        <h3 className="heading pb-0 heading2">Your house root</h3>
        <div className="slider-btn-brown btn-hover mt-4">
          <h1 className="animated">
            Construction
            <span className="hub"> hub</span>
          </h1>
        </div>

        <div className="slider-btn-brown btn-hover mtclinbtn">
          <a className="animatedsss black" href="/shop-grid-standard">
            Shop Now
          </a>
        </div>
      </div>
      <img src={bannerImage} alt="Image" className="responsive-image" />
    </div>
  );
};

export default HomePage;
