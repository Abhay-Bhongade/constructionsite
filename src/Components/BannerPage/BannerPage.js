import React from "react";
import bannerinbannerp from "../../Images/bannerinbannerp.png";
import "../BannerPage/BannerPage.css";
import bannerimage from "../../Images/bannerimage.png";

const BannerPage = () => {
  return (
    <div className="banner-page my-5">
      <div className="contentinbp">
        <h3 className="headinginbp pb-0 mb-30">Build what you want !</h3>

        <div className="slider-btn-brown btn-hover mb-30">
          <h1 className="animatedinbp">
            Discover the ultimate collection of the finest construction <br />
            materials for your projects.
          </h1>
        </div>

        <div className="slider-btn-brown btn-hover mtclinbtn">
          <a className="animatedsss black" href="/shop-grid-standard">
            Shop Now
          </a>
        </div>
      </div>
      <img src={bannerinbannerp} alt="Image" className="responsive-imageinbp" />
    </div>
  );
};

export default BannerPage;
