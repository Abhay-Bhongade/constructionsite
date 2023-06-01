import React from "react";
import step1 from "../../Images/Construction section/1.png";
import step2 from "../../Images/Construction section/2.png";
import step3 from "../../Images/Construction section/3.png";

import "../IAmSeller/IAmSeller.css";

const IAmBuyer = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage">
          <div className="imgcntinIamSeller">
            <img src={step1} width={354} height={298} alt="Soft Chair" />
          </div>
          <div className="textcntinIamSeller mt-5 ms-5">
            <div className="section-title-10 bottom-border">
              <h3 className="listitheading">LIST IT</h3>
            </div>
            <p className="parainiamseller mt-2">
              Take a photo and upload to your closet in less <br /> than 60
              seconds - right from your phone!
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage ms-5">
          <div className="textcntinIamSeller mt-5 mrintextcntinIamSeller ms-5">
            <div className="section-title-11 bottom-border">
              <h3 className="listitheading">SHARE IT</h3>
            </div>
            <p className="parainiamseller mt-2">
              Take a photo and upload to your closet in less <br /> than 60
              seconds - right from your phone!
            </p>
          </div>
          <div className="imgcntinIamSeller msinimgcnt">
            <img src={step2} width={354} height={298} alt="Soft Chair" />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage">
          <div className="imgcntinIamSeller">
            <img src={step3} width={354} height={298} alt="Soft Chair" />
          </div>
          <div className="textcntinIamSeller mt-5 ms-5">
            <div className="section-title-10 bottom-border">
              <h3 className="listitheading">EARN CASH</h3>
            </div>
            <p className="parainiamseller mt-2">
              Take a photo and upload to your closet in less <br /> than 60
              seconds - right from your phone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAmBuyer;
