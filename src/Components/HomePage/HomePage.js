import React from "react";
import bannerImage from "../../Images/homepagebanner.png";
import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h3 className="heading pb-0">Buy Sell and discover</h3>
        <h3 className="heading pb-0">Construction Materials</h3>

        <div className="slider-btn-brown btn-hover mt-4">
          <h1 className="animated">
            Sign up now and join millions of people on the social marketplace
            for all Construction things.
          </h1>
        </div>
        <div className="btncntinhomepage">
          <button className="facebookbtn" type="button">
            <i class="fa-brands fa-facebook"></i>
            <span className="ms-2">Continue with Facebook</span>
          </button>
          <button className="googlebtn mt-3" type="button">
            <i class="fa-brands fa-google"></i>
            <span className="ms-2">Continue with Google</span>
          </button>
          <div className="signupwithemailcnt mt-4">
            <a class="signupwithemail" href="/shop-grid-standard">
              Sign up with Email
            </a>
          </div>
        </div>
      </div>
      <img
        src="/static/media/homepagebanner.7f4356f9e5961c3f10c1.png"
        alt="Image"
        class="responsive-image"
      ></img>
    </div>
  );
};

export default HomePage;
