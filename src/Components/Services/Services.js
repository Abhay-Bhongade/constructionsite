import React from "react";
import FREEAUTHENTICATION from "../../Images/FREEAUTHENTICATION.png";
import EXPEDITEDSHIPPING from "../../Images/EXPEDITEDSHIPPING.png";
import PROTECTEDPAYMENTS from "../../Images/PROTECTEDPAYMENTS.png";

import "../Services/Services.css";
const Services = () => {
  return (
    <div className="container  mtmb50">
      <div className="row">
        <h2 className="text-center mb-5">We have got you Back</h2>
        <div className="col-md-4 px-md-5 px-3">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <img
                className="image-fluid"
                src={PROTECTEDPAYMENTS}
                alt="Soft Chair"
                width={100}
                height={100}
              />
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">PROTECTED PAYMENTS</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                If it's not what you ordered, we guarantee to give your money
                back.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-md-5 px-3 my-3 my-md-0">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <img
                width={100}
                height={100}
                className="image-fluid"
                src={EXPEDITEDSHIPPING}
                alt="Soft Chair"
              />
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">EXPEDITED SHIPPING</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                All orders ship via USPS priority mail. With our pre-paid label,
                shipping has never been easier!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-md-5 px-3">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <img
                width={100}
                height={100}
                className="image-fluid"
                src={FREEAUTHENTICATION}
                alt="Soft Chair"
              />
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">FREE AUTHENTICATION</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Shop with confidence! Posh Authenticate offers free
                authentication on luxury items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
