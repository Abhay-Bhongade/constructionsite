import React from "react";
import profilepic1 from "../../Images/profilepic.png";
import profilepic2 from "../../Images/profilpic2.jpg";
import profilepic3 from "../../Images/profilpic3.jpg";

import newlisting1 from "../../Images/newlisting1.png";
import newlisting2 from "../../Images/newlisting2.png";
import newlisting3 from "../../Images/newlisting3.png";
import newlisting4 from "../../Images/newlisting4.png";
import newlisting5 from "../../Images/newlisting5.png";
import bgforlsinn from "../../Images/newlisting6.png";
import newlisting6 from "../../Images/newlisting6.png";
import newlisting7 from "../../Images/newlisting7.png";
import newlisting8 from "../../Images/newlisting8.png";
import newlisting9 from "../../Images/newlisting9.png";
import "../NewListing/NewListing.css";
import bnimg1 from "../../Images/bnimg1.png";
import bnimg2 from "../../Images/bnimg2.png";
import bnimg3 from "../../Images/bnimg33.jpg";

const NewListing = () => {
  return (
    <div className="container my-5 cntinnewlisting">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-center my-3 headinginproduct">
            You Might Also Like
          </h1>

          <div className="box1 my-4">
            <div className="mt-3">
              <div
                className="oneimgcntinnewlisting bnimg1cnt"
                style={{ position: "relative" }}
              >
                {/* <div className="iconcntinlisting">
                  <span>
                    {" "}
                    <i className="fa fa-shopping-cart "></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-heart"></i>
                  </span>
                </div> */}
                <img
                  className="card-img-top "
                  src={bnimg1}
                  alt="Card image cap"
                />
              </div>
              <div
                className="twoimglsinbnsection"
                style={{ position: "relative" }}
              >
                {/* <div className="iconcntinlisting2">
                  <span>
                    {" "}
                    <i className="fa fa-shopping-cart "></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-heart"></i>
                  </span>
                </div>{" "}
                <div className="iconcntinlisting3">
                  <span>
                    {" "}
                    <i className="fa fa-shopping-cart "></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-heart"></i>
                  </span>
                </div> */}
                <img
                  className="card-img-top imgtwoinbgsec"
                  src={bnimg2}
                  alt="Card image cap"
                />
                <img
                  className="card-img-top imgthreeinbgsec ms-2"
                  src={bnimg3}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-5"
          style={{
            overflowY: "auto",
            maxHeight: "100vh",
            scrollbarWidth: "thin",
            scrollbarColor: "blue",
            scrollbarTrackColor: "blue",
          }}
        >
          <h1 className="text-center my-3 headinginproduct">New Listing</h1>

          <div className="box1">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic1}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 class="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p class="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting mt-3">
              <img
                className="card-img-top listoneimg"
                src={newlisting1}
                alt="Card image cap"
              />
            </div>
          </div>

          <div className="box2 my-4">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic2}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 class="headingintextcntinnewlisting">
                  ray234
                  <span className="spanintextcnt">
                    shared this listing closet
                  </span>
                </h5>
                <p class="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting3 mt-3">
              <div className="singleimgcntinbox2">
                <img
                  className="card-img-top firstimg"
                  src={newlisting2}
                  style={{
                    borderTopLeftRadius: "14px",
                    borderBottomLeftRadius: "14px",
                  }}
                  alt="Card image cap"
                />
              </div>
              <div className="multiimgcntinbox2 ms-3">
                <img
                  className="card-img-top secondimg mb-2"
                  src={newlisting3}
                  style={{
                    borderTopRightRadius: "14px",
                  }}
                  alt="Card image cap"
                />
                <img
                  className="card-img-top secondimg"
                  src={bgforlsinn}
                  style={{
                    borderBottomRightRadius: "14px",
                  }}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div className="box3">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic3}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 class="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p class="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting mt-3">
              <img
                className="card-img-top listoneimg"
                src={newlisting4}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="box4 my-4">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic2}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 class="headingintextcntinnewlisting">
                  ray234
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p class="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting3 mt-3">
              <div className="twoimgcntinnewlisting">
                <img
                  className="card-img-top fourimg mb-2"
                  src={newlisting5}
                  style={{ borderTopLeftRadius: "14px" }}
                  alt="Card image cap"
                />
                <img
                  className="card-img-top fourimg"
                  src={newlisting6}
                  style={{ borderBottomLeftRadius: "14px" }}
                  alt="Card image cap"
                />
              </div>
              <div className="twoimgcntinnewlisting">
                <img
                  className="card-img-top fourimg mb-2"
                  src={newlisting7}
                  style={{ borderTopRightRadius: "14px" }}
                  alt="Card image cap"
                />
                <img
                  className="card-img-top fourimg"
                  src={newlisting8}
                  style={{ borderBottomRightRadius: "14px" }}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
          <div className="box5 mb-5">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic1}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 class="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p class="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting mt-3">
              <img
                className="card-img-top listoneimg"
                src={newlisting9}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListing;
