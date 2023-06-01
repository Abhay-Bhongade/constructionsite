import React from "react";
import thirteen from "../../Images/Construction prodcuts (1)/13.png";
import fourteen from "../../Images/Construction prodcuts (1)/14.png";
import fifthteen from "../../Images/Construction prodcuts (1)/15.png";
import sixteen from "../../Images/Construction prodcuts (1)/16.png";
import seven from "../../Images/Construction prodcuts (1)/7.png";
import eight from "../../Images/Construction prodcuts (1)/8.png";
import "../CardSet1/CardSet1.css";

const CardSet3 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img
              className="image-top"
              src={eight}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = eight)}
              onMouseOut={(e) => (e.currentTarget.src = seven)}
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="price-2 card-text">
                <span className="old">€12.5</span>
                <span className="span">€10</span>{" "}
              </p>
              <div className="social-icons">
                <span className="social-icon" title="Add to cart">
                  {" "}
                  <i className="fa fa-shopping-cart"></i>
                </span>
                <span title="Quick View" className="social-icon mx-3">
                  <i className="fa fa-eye"></i>
                </span>

                <span title="Add to wishlist" className="social-icon">
                  <i className="fa fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img
              className="image-top"
              src={sixteen}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = sixteen)}
              onMouseOut={(e) => (e.currentTarget.src = fifthteen)}
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="price-2 card-text">
                <span className="old">€12.5</span>
                <span className="span">€10</span>{" "}
              </p>
              <div className="social-icons">
                <span className="social-icon" title="Add to cart">
                  {" "}
                  <i className="fa fa-shopping-cart"></i>
                </span>
                <span title="Quick View" className="social-icon mx-3">
                  <i className="fa fa-eye"></i>
                </span>

                <span title="Add to wishlist" className="social-icon">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img
              className="image-top"
              src={fourteen}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = fourteen)}
              onMouseOut={(e) => (e.currentTarget.src = thirteen)}
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="price-2 card-text">
                <span className="old">€12.5</span>
                <span className="span">€10</span>{" "}
              </p>
              <div className="social-icons">
                <span className="social-icon" title="Add to cart">
                  {" "}
                  <i className="fa fa-shopping-cart"></i>
                </span>
                <span title="Quick View" className="social-icon mx-3">
                  <i className="fa fa-eye"></i>
                </span>

                <span title="Add to wishlist" className="social-icon">
                  <i className="fa fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSet3;
