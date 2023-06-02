import React from "react";
import "../WasteManagment/WasteManagment.css";
const WasteManagment = () => {
  return (
    <div className="container  mtmb50">
      <div className="row">
        <div className="col-md-3 px-md-5 px-3">
          <div className="boxinservices ">
            <div className="imgcntinservices">
              <i className="fa-sharp fa-solid fa-truck-fast"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">FedEx</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Hazardous Material Shipping.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 px-md-5 px-3 my-3 my-md-0">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <i className="fa-solid fa-box fa-sharp"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">Unishippers</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">
                Hazardous Material Shipping.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 px-md-5 px-3">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <i className="fa-sharp fa-solid fa-recycle"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">Waste Managment</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">Hazardous Waste Disposal.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 px-md-5 px-3">
          <div className="boxinservices">
            <div className="imgcntinservices">
              <i className="fa-solid fa-seedling fa-sharp"></i>
            </div>
            <div className="section-title-9 text-center bottom-border">
              <h5 className="headinginservices">HWH Environmental</h5>
            </div>
            <div className="pt-2">
              <p className="paragraphinservices">Hazardous Waste Disposal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteManagment;
