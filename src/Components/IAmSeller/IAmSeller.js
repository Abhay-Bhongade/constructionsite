import React from "react";

import step4 from "../../Images/Construction section/4.png";
import step5 from "../../Images/Construction section/5.png";
import step6 from "../../Images/Construction section/6.png";
import { StarBorderPurple500TwoTone } from "@mui/icons-material";

const IAmSeller = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage">
          <div className="imgcntinIamSeller">
            <img src={step4} width={354} height={298} alt="Soft Chair" />
          </div>
          <div className="textcntinIamSeller mt-5 ms-5">
            <div className="section-title-10 bottom-border">
              <h3 className="listitheading">DISCOVER ITEMS</h3>
            </div>
            <p className="parainiamseller mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage ms-5">
          <div className="textcntinIamSeller mt-5 mrintextcntinIamSeller ms-5">
            <div className="section-title-11 bottom-border">
              <h3 className="listitheading">GET STYLED</h3>
            </div>
            <p className="parainiamseller mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className="imgcntinIamSeller msinimgcnt">
            <img src={step5} width={354} height={298} alt="Soft Chair" />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="imgandtextcntinIamSellerpage">
          <div className="imgcntinIamSeller">
            <img src={step6} width={354} height={298} alt="Soft Chair" />
          </div>
          <div className="textcntinIamSeller mt-5 ms-5">
            <div className="section-title-10 bottom-border">
              <h3 className="listitheading">SPREAD THE LOVE</h3>
            </div>
            <p className="parainiamseller mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAmSeller;
