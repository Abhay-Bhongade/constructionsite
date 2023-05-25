import React from "react";
import "../Footer/Footer.css";
import combinelogo from "../../Images/combilelogo.png";

const Footer = () => {
  return (
    <div className="container my-5 cntinfooter">
      <div className="row">
        <div className="col-md-12">
          <div className="allcol4cntinfooter">
            <div className="col-lg-2 col-sm-4 logocntinfooter">
              <div className="copyright mb-30">
                <div className="footer-logo">
                  <a href="/">
                    <img alt="" src={combinelogo} className="combinelogoimg" />
                  </a>
                </div>
                <p className="allrightreserveparatag">
                  © 2023{" "}
                  <a
                    href="https://hasthemes.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contractors
                  </a>
                  .<br /> All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 infocnt">
              <div className="footer-widget mb-30 footer-widgetli">
                <div className="footer-title">
                  <h3>INFORMATION</h3>
                </div>
                <div className="footer-list footer-listli">
                  <ul>
                    <li>
                      <a href="/about">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/contact">Order Tracking</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 mt-2">
              <div className="footer-widget mb-30 footer-widgetli">
                <div className="footer-title">
                  <h3>EXTRAS</h3>
                </div>
                <div className="footer-list  footer-listli">
                  <ul>
                    <li>
                      <a href="/home-furniture-four#/">About Us</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Delivery Information</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Returns</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Become a Seller</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Membership Plans</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mt-4">
              <div className="footer-widget mb-30">
                <div className="footer-title">
                  <h3>HAVE A QUESTION?</h3>
                </div>
                <div className="footer-list">
                  <ul className="liststylenonefooterul">
                    <li>
                      <span>
                        <i class="fa-solid fa-clock pe-2"></i>
                      </span>
                      Monday - Friday:
                      <p className="exrtraptag">09.00-18:30</p>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-location-pin pe-2"></i>
                      </span>{" "}
                      1600 7th Avenue,
                      <p className="exrtraptag">Seattle, WA 98101</p>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-phone pe-2"></i>
                      </span>{" "}
                      +1.888.299.7171
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-mobile pe-2"></i>
                      </span>{" "}
                      +1.888.299.7272
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-envelope pe-2"></i>
                      </span>{" "}
                      shop@rigid.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="footer-title">
                  <h3>SUBSCRIBE</h3>
                </div>
                <div className="subscribe-style">
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <div>
                    <div className="subscribe-form">
                      <div className="mc-form">
                        <div>
                          <input
                            id="mc-form-email"
                            className="email"
                            type="email"
                            placeholder="Enter your email address..."
                          />
                        </div>
                        <div className="clear">
                          <button className="button">SUBSCRIBE</button>
                          <div className="social-iconsinfooter mt-3">
                            <span
                              className="social-iconinfooter"
                              title="Add to cart"
                            >
                              {" "}
                              <i class="fa-brands fa-facebook-f"></i>
                            </span>
                            <span
                              title="Quick View"
                              className="social-iconinfooter mx-3"
                            >
                              <i class="fa-brands fa-instagram"></i>
                            </span>

                            <span
                              title="Add to wishlist"
                              className="social-iconinfooter"
                            >
                              <i class="fa-brands fa-twitter"></i>
                            </span>
                            <span
                              title="Add to wishlist"
                              className="social-iconinfooter mx-3"
                            >
                              <i class="fa-brands fa-youtube"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
