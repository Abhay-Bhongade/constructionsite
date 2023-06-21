import React from "react";
import Concrete from "../../Images/Concrete.png";
import SiteConstruction from "../../Images/SiteConstruction.png";
import Woods from "../../Images/Woods.png";
import "../Cards/Cards.css";

const Cards = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="category-grid">
            <div className="category-grid__image">
              <a href="#">
                <img src={Concrete} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="category-grid__content">
              <a href="#">Concrete</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-30">
          <div className="category-grid">
            <div className="category-grid__image">
              <a href="#">
                <img src={SiteConstruction} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="category-grid__content">
              <a href="#">Site Construction</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-30">
          <div className="category-grid">
            <div className="category-grid__image">
              <a href="#">
                <img src={Woods} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="category-grid__content">
              <a href="#">Woods</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
