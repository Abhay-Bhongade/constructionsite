import React from "react";
import softchair from "../../Images/softchair.jpg";
import one from "../../Images/Construction prodcuts (1)/1.png";
import two from "../../Images/Construction prodcuts (1)/2.png";
import three from "../../Images/Construction prodcuts (1)/3.png";
import four from "../../Images/Construction prodcuts (1)/4.png";
import five from "../../Images/Construction prodcuts (1)/5.png";
import six from "../../Images/Construction prodcuts (1)/6.png";

import "./CardSet1.css";

const CardSet1 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img
              className="image-top"
              src={one}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = one)}
              onMouseOut={(e) => (e.currentTarget.src = two)}
            />
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p className="price-2 card-text">
                <span className="old">€12.5</span>
                <span className="span">€10</span>{" "}
              </p>
              <div className="social-icons">
                <span className="social-icon" title="Add to cart">
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
              src={three}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = three)}
              onMouseOut={(e) => (e.currentTarget.src = four)}
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
              src={five}
              alt="Soft Chair"
              onMouseOver={(e) => (e.currentTarget.src = five)}
              onMouseOut={(e) => (e.currentTarget.src = six)}
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

export default CardSet1;
