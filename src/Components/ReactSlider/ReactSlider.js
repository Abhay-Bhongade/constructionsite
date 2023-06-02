import React from "react";
import Slider from "react-slick";
import "../ReactSlider/ReactSlider.css";
import cardimg1 from "../../Images/card1.avif";
import cardimg2 from "../../Images/card2.avif";
import cardimg3 from "../../Images/card3.avif";
import cardimg4 from "../../Images/card4.avif";
import one from "../../Images/New Construction productsNew/1.png";
import two from "../../Images/New Construction productsNew/2.png";
import three from "../../Images/New Construction productsNew/3.png";
import four from "../../Images/New Construction productsNew/4.png";
import five from "../../Images/New Construction productsNew/5.png";
import six from "../../Images/New Construction productsNew/6.png";
import seven from "../../Images/New Construction productsNew/7.png";
import eight from "../../Images/New Construction productsNew/8.png";
const ReactSlider = () => {
  var settings = {
    dots: false, // Set dots to false
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay

    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false, // Set dots to false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false, // Set dots to false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Set dots to false
        },
      },
    ],
  };

  return (
    <div
      className="container-fluid p-4 slidercnt"
      style={{ boxShadow: "0 1px 5px 2px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="row mx-2">
        <h1 className="text-center my-5 headinginproduct section-title-8 bottom-border">
          Featured Products
        </h1>
        <div className="col-md-12">
          <Slider {...settings} className="slider-container">
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={one} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Blue PVC Pipe</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$2,00</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={two} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Stainless Steel Joint Knife</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$300</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={three} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Komelon Gripper Measure</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$400</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={four} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Plastering Trowel</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$500</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={five} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">3-Piece Wood Chisel</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$600</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={six} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Scaffolding Forged Iron</h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$700</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={seven} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Roughcheck Earth </h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$800</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "14.5rem" }}>
              <img className="card-img-top" src={eight} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Roughcheck Earth </h5>
                <p className="card-text">Stainless Steel</p>
                <p className="card-text">$900</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReactSlider;
