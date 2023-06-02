import React, { useState } from "react";
import profilepic1 from "../../Images/profilepic.png";
import profilepic2 from "../../Images/profilpic2.jpg";
import profilepic3 from "../../Images/profilpic3.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import newlisting1 from "../../Images/newlisting1.png";
import newlisting2 from "../../Images/newimguse.png";
import newlisting3 from "../../Images/newlisting3.png";
import newlisting4 from "../../Images/newlisting4.png";
import newlisting5 from "../../Images/newlisting5.png";
import bgforlsinn from "../../Images/newlisting6.png";
import newlisting6 from "../../Images/newlisting6.png";
import newlisting7 from "../../Images/newlisting7.png";
import newlisting8 from "../../Images/newlisting8.png";
import newlisting9 from "../../Images/newlisting9.png";
import "../NewListing/NewListing.css";
import bnimg1 from "../../Images/like1.png";
import bnimg2 from "../../Images/like2.png";
import bnimg3 from "../../Images/like3.png";

const NewListing = () => {
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [rating, setRating] = useState("");

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <div className="container my-5 cntinnewlisting">
      <div className="row">
        <div className="col-md-2 card pb-0 mb-0">
          <h1 class="my-3 headinginproduct" style={{ textAlign: "left" }}>
            Filters
          </h1>
          <div className=" filter-sectioncnt">
            <div className="filter-section">
              <h4 className="filtersectionheading my-3">Price</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priceRange"
                  id="priceRange1"
                  value="under100"
                  checked={priceRange === "under100"}
                  onChange={handlePriceRangeChange}
                />
                <label className="form-check-label" htmlFor="priceRange1">
                  Under $100
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priceRange"
                  id="priceRange2"
                  value="under200"
                  checked={priceRange === "under200"}
                  onChange={handlePriceRangeChange}
                />
                <label className="form-check-label" htmlFor="priceRange2">
                  Under $200
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priceRange"
                  id="priceRange2"
                  value="under200"
                  checked={priceRange === "under200"}
                  onChange={handlePriceRangeChange}
                />
                <label className="form-check-label" htmlFor="priceRange2">
                  Under $300
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priceRange"
                  id="priceRange2"
                  value="under200"
                  checked={priceRange === "under200"}
                  onChange={handlePriceRangeChange}
                />
                <label className="form-check-label" htmlFor="priceRange2">
                  Under $400
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priceRange"
                  id="priceRange2"
                  value="under200"
                  checked={priceRange === "under200"}
                  onChange={handlePriceRangeChange}
                />
                <label className="form-check-label" htmlFor="priceRange2">
                  Under $500
                </label>
              </div>
              <h4 className="filtersectionheading my-3">Sort By</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sortBy"
                  id="sortBy1"
                  value="popularity"
                  checked={sortBy === "popularity"}
                  onChange={handleSortByChange}
                />
                <label className="form-check-label" htmlFor="sortBy1">
                  Popularity
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sortBy"
                  id="sortBy2"
                  value="priceHighToLow"
                  checked={sortBy === "priceHighToLow"}
                  onChange={handleSortByChange}
                />
                <label className="form-check-label" htmlFor="sortBy2">
                  Price High to Low
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sortBy"
                  id="sortBy3"
                  value="priceLowToHigh"
                  checked={sortBy === "priceLowToHigh"}
                  onChange={handleSortByChange}
                />
                <label className="form-check-label" htmlFor="sortBy3">
                  Price Low to High
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sortBy"
                  id="sortBy4"
                  value="newestFirst"
                  checked={sortBy === "newestFirst"}
                  onChange={handleSortByChange}
                />
                <label className="form-check-label" htmlFor="sortBy4">
                  Newest First
                </label>
              </div>
              <h4 className="filtersectionheading my-3">Rating</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating1"
                  value="4starAbove"
                  checked={rating === "4starAbove"}
                  onChange={handleRatingChange}
                />
                <label className="form-check-label" htmlFor="rating1">
                  4★ &amp; above
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating2"
                  value="3starAbove"
                  checked={rating === "3starAbove"}
                  onChange={handleRatingChange}
                />
                <label className="form-check-label" htmlFor="rating2">
                  3★ &amp; above
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating3"
                  value="2starAbove"
                  checked={rating === "2starAbove"}
                  onChange={handleRatingChange}
                />
                <label className="form-check-label" htmlFor="rating3">
                  2★ &amp; above
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id="rating4"
                  value="1starAbove"
                  checked={rating === "1starAbove"}
                  onChange={handleRatingChange}
                />
                <label className="form-check-label" htmlFor="rating4">
                  1★ &amp; above
                </label>
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
                <h5 className="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p className="textparainlisting">7 sec ago</p>
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
                <h5 className="headingintextcntinnewlisting">
                  ray234
                  <span className="spanintextcnt">
                    shared this listing closet
                  </span>
                </h5>
                <p className="textparainlisting">7 sec ago</p>
              </div>
            </div>

            <div className="imglistingnewlisting3 mt-3">
              <div className="singleimgcntinbox2">
                <img
                  className="card-img-top firstimg img-fluid"
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
                <h5 className="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p className="textparainlisting">7 sec ago</p>
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
                <h5 className="headingintextcntinnewlisting">
                  ray234
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p className="textparainlisting">7 sec ago</p>
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
          <div className="box5">
            <div className="profilcnt">
              <div className="imgcntinnewlisting">
                <img
                  className="card-img-top profilpic"
                  src={profilepic1}
                  alt="Card image cap"
                />
              </div>
              <div className="textcntinnewlisting ms-3">
                <h5 className="headingintextcntinnewlisting">
                  skrama87
                  <span className="spanintextcnt">
                    {" "}
                    shared this listing closet
                  </span>{" "}
                </h5>
                <p className="textparainlisting">7 sec ago</p>
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
        <div className="col-md-5">
          <h1 className="text-center my-3 headinginproduct">
            You Might Also Like
          </h1>

          <div className="box1 my-4">
            <div className="mt-3">
              <div
                className="oneimgcntinnewlisting bnimg1cnt"
                style={{ position: "relative" }}
              >
                <div className="iconcntinlisting">
                  {/* <span>
                    <ShoppingCartOutlinedIcon />
                  </span>
                  <span className="ms-2">
                    <FavoriteBorderOutlinedIcon />
                  </span> */}
                </div>
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
                <div className="iconcntinlisting2">
                  {/* <span>
                    {" "}
                    <ShoppingCartOutlinedIcon />
                  </span>
                  <span>
                    {" "}
                    <FavoriteBorderOutlinedIcon />
                  </span> */}
                </div>{" "}
                <div className="iconcntinlisting3">
                  {/* <span>
                    {" "}
                    <ShoppingCartOutlinedIcon />
                  </span>
                  <span>
                    {" "}
                    <FavoriteBorderOutlinedIcon />
                  </span> */}
                </div>
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
      </div>
    </div>
  );
};

export default NewListing;
