import React, { useState } from "react";
import "../Products/Products.css";
import CardSet1 from "../CardSet1/CardSet1";
import CardSet2 from "../CardSet2/CardSet2";
import CardSet3 from "../CardSet3/CardSet3";

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
            <h2 className="headinginproduct">Products Collection</h2>
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
              Equipment
            </span>
            <span
              onClick={() => handleTabClick(2)}
              className={
                activeTab === 2
                  ? "activeTabButton defaultTabButton mx-5"
                  : "defaultTabButton mx-5"
              }
            >
              Electrical
            </span>
            <span
              onClick={() => handleTabClick(3)}
              className={
                activeTab === 3
                  ? "activeTabButton defaultTabButton"
                  : "defaultTabButton"
              }
            >
              Metals
            </span>

            {/* Display cards based on active tab */}
            {activeTab === 1 && <CardSet1 />}
            {activeTab === 2 && <CardSet2 />}
            {activeTab === 3 && <CardSet3 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
