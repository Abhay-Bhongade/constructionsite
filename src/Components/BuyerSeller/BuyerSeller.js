import React, { useState } from "react";
import "../BuyerSeller/BuyerSeller.css";
import IAmBuyer from "../IAmBuyer/IAmBuyer";
import IAmSeller from "../IAmSeller/IAmSeller";

const Products = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title-8 text-center mb-30 bottom-border">
            <h2 className="headinginproduct">How It Works</h2>
          </div>
          <div className="tabcntinproducts mb-30">
            <span
              onClick={() => handleTabClick(1)}
              className={
                activeTab === 1
                  ? "activeTabButton defaultTabButton"
                  : "defaultTabButton"
              }
            >
              I Am a Seller
            </span>
            <span
              onClick={() => handleTabClick(2)}
              className={
                activeTab === 2
                  ? "activeTabButton defaultTabButton mx-5"
                  : "defaultTabButton mx-5"
              }
            >
              I Am a Buyer
            </span>

            {/* Display cards based on active tab */}
            {activeTab === 1 && <IAmBuyer />}
            {activeTab === 2 && <IAmSeller />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
