import React from "react";
import "../Services/Services.css";
const Services = () => {
  return (
    <div className="container  mtmb50">
      <div className="row">
        <div className="col-md-4 px-md-5 px-3">
          <div className="boxinservices ">
            <div className="imgcntinservices">
              <i className="fa-sharp fa-solid fa-truck-fast"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">Free Shipping</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-md-5 px-3 my-3 my-md-0">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <i className="fa-sharp fa-solid fa-headphones"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">Support 24/7</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-md-5 px-3">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <i className="fa-solid fa-wallet fa-sharp"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">Money Return</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
