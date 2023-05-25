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
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget mb-30 ml-30">
                <div className="footer-title">
                  <h3>ABOUT US</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Store location</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Orders tracking</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget mb-30 ml-50">
                <div className="footer-title">
                  <h3>USEFUL LINKS</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <a href="/home-furniture-four#/">Returns</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Support Policy</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">Size guide</a>
                    </li>
                    <li>
                      <a href="/home-furniture-four#/">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget mb-30 ml-75">
                <div className="footer-title">
                  <h3>FOLLOW US</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget mb-30 ml-70">
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
