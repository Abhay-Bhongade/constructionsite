import React from "react";
import bannerImage from "../../Images/homepagebanner.png";
import "../HomePage/HomePage.css";
import facebookimg from "../../Images/iconsfacebook.png";
import googleimg from "../../Images/iconsgoogle.png";

const HomePage = () => {
  return (
    <div className="container-fluid containerbginhomepage">
      <div className="row">
        <div className="col-3 pt-3 ps-3 pe-5 bg-white">
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 1: Site Construction
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  02050 Basic Site Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02100 Site Remediation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02200 Site Preparation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02300 Earthwork
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2400 Tunneling, Boring and Jacking
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02450 Foundation and Load-bearing Elements
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02500 Utility Services
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02600 Drainage and Containment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02700 Bases, Ballasts, Pavements and Appurtenances
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02800 Site Improvements and Amenities
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  02950 Site Restoration and Rehabilitation
                </a>
              </li>
            </div>
          </div>

          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 2: Concrete
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  03050 Basic Concrete Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03100 Concrete Forms and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03200 Concrete Reinforcement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03300 Cast-in-Place Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03400 Precast Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03500 Cementitious Decks and Underlayment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03600 Grouts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grouts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03700 Mass Concrete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  03900 Concrete Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>

          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 3: Masonry{" "}
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  04050 Basic Masonry Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04200 Masonry Units
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04400 Stone
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04500 Refractories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04600 Corrosion-Resistant Masonry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04700 Simulated Masonry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04800 Masonry Assemblies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  04900 Masonry Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 4: Metals
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  05050 Basic Metal Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05100 Structural Metal Framing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05200 Metal Joists
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05300 Metal Deck
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05400 Cold-Formed Metal Framing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05500 Metal Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05600 Hydraulic Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05650 Railroad Track and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05700 Ornamental Metal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05800 Expansion Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05900 Metal Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 5: Wood and Plastics
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  06050 Basic Wood and Plastic Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06100 Rough Carpentry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06200 Finish Carpentry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  05200 Metal Joists
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06400 Architectural Woodwork
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06500 Structural Plastics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06600 Plastic Fabrications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  06900 Wood and Plastic Restoration and Cleaning
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 6: Thermal & Moisture Protection
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  07050 Basic Thermal and Moisture Protection Materials and
                  Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07100 Dampproofing and Waterproofing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07200 Thermal Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07300 Shingles, Roof Tiles, and Roof Coverings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07400 Roofing and Siding Panels
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07500 Membrane Roofing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07600 Flashing and Sheet Metal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07700 Roof Specialties and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07800 Fire and Smoke Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  07900 Joint Sealants
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 7: Doors and Windows
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  08050 Basic Door and Window Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08100 Metal Doors and Frames
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08200 Wood and Plastic Doors
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08300 Specialty Doors
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08400 Entrances and Storefronts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08500 Windows
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08600 Skylights
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08700 Hardware
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08800 Glazing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  08900 Glazed Curtain Wall
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 8: Finishes
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  09050 Basic Finish Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09100 Metal Support Assemblies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09200 Plaster and Gypsum Board
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09300 Tile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09400 Terrazzo
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09500 Ceilings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09600 Flooring
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09700 Wall Finishes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09800 Acoustical Treatment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  09900 Paints and Coatings
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 9: Specialties
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  10150 Compartments and Cubicles
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10200 Louvers and Vents
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10240 Grilles and Screens
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10250 Service Walls
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10260 Wall and Corner Guards
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10270 Access Flooring
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10340 Manufactured Exterior Specialties
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10600 Partitions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10670 Storage Shelving
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  10700 Exterior Protection
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 10: Equipment
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  11000 Maintenance Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11120 Vending Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11130 Audio-Visual Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11150 Parking Control Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11160 Loading Dock Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11170 Solid Waste Handling Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11200 Water Supply and Treatment Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11280 Hydraulic Gates and Valves
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11480 Athletic, Recreational, and Therapeutic Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11500 Industrial and Process Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11680 Office Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  11700 Medical Equipment
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 11: Furnishings{" "}
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              {" "}
              <li>
                <a className="dropdown-item" href="#">
                  12300 Manufactured Casework
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12400 Furnishings and Accessories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12500 Furniture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12600 Multiple Seating
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12700 Systems Furniture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  12800 Interior Plants and Planters
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 12: Special Construction
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  13080 Sound, Vibration, and Seismic Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13100 Lightning Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13110 Cathodic Protection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13150 Swimming Pools
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13200 Storage Tanks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13220 Filter Underdrains and Media
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13260 Sludge Conditioning Systems
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13280 Hazardous Material Remediation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13550 Transportation Control Instrumentation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13600 Solar and Wind Energy Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13850 Detection and Alarm
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  13900 Fire Suppression
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 13: Conveying Systems
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  14100 Dumbwaiters
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14200 Elevators
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14300 Escalators and Moving Walks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14400 Lifts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14500 Material Handling
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14600 Hoists and Cranes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14700 Turntables
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14800 Scaffolding
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  14900 Transportation
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 14: Mechanical
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  15050 Basic Mechanical Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15100 Building Services Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15200 Process Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15300 Fire Protection Piping
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15400 Plumbing Fixtures and Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15500 Heat-Generation Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15600 Refrigeration Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15700 Heating, Ventilating, and Air Conditioning Equipment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15800 Air Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15900 HVAC Instrumentation and Controls
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  15000 Misc Mechanical
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Division 15: Electrical
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  16050 Basic Electrical Materials and Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16100 Wiring Methods
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16200 Electrical Power
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  116300 Transmission and Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16400 Low-Voltage Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16500 Lighting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  16700 Communications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1600 Misc Electrical
                </a>
              </li>
            </div>
          </div>
          <div className="dropdown dropend">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Miscellaneous Items
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="home-page">
            <div className="content">
              <h3 className="heading pb-0">Buy Sell and discover</h3>
              <h3 className="heading pb-0">Construction Materials</h3>

              <div className="slider-btn-brown btn-hover mt-4">
                <h1 className="animated">
                  Sign up now and join millions of people on the social
                  marketplace for all Construction things.
                </h1>
              </div>
              <div className="btncntinhomepage">
                <button className="facebookbtn" type="button">
                  <img
                    src={facebookimg}
                    width={24}
                    height={24}
                    alt="facebook"
                  />
                  <span className="ms-2">Continue with Facebook</span>
                </button>
                <button className="googlebtn mt-3" type="button">
                  <img
                    src={googleimg}
                    width={20}
                    height={20}
                    alt="google"
                    style={{ marginLeft: "-18px" }}
                  />
                  <span className="ms-2">Continue with Google</span>
                </button>
                <div className="signupwithemailcnt mt-4">
                  <a
                    className="signupwithemail text-white"
                    href="/shop-grid-standard"
                  >
                    Sign up with Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="home-page">
    //   <div className="content">
    //     <h3 className="heading pb-0">Buy Sell and discover</h3>
    //     <h3 className="heading pb-0">Construction Materials</h3>

    //     <div className="slider-btn-brown btn-hover mt-4">
    //       <h1 className="animated">
    //         Sign up now and join millions of people on the social marketplace
    //         for all Construction things.
    //       </h1>
    //     </div>
    //     <div className="btncntinhomepage">
    //       <button className="facebookbtn" type="button">
    //         <img src={facebookimg} width={24} height={24} alt="facebook" />
    //         <span className="ms-2">Continue with Facebook</span>
    //       </button>
    //       <button className="googlebtn mt-3" type="button">
    //         <img
    //           src={googleimg}
    //           width={20}
    //           height={20}
    //           alt="google"
    //           style={{ marginLeft: "-18px" }}
    //         />
    //         <span className="ms-2">Continue with Google</span>
    //       </button>
    //       <div className="signupwithemailcnt mt-4">
    //         <a className="signupwithemail" href="/shop-grid-standard">
    //           Sign up with Email
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <img
    //     src="/static/media/homepagebanner.7f4356f9e5961c3f10c1.png"
    //     alt="Image"
    //     className="responsive-image"
    //   ></img>
    // </div>
  );
};

export default HomePage;

// import React from "react";
// import bannerImage from "../../Images/homepagebanner.png";
// import "../HomePage/HomePage.css";
// import facebookimg from "../../Images/iconsfacebook.png";
// import googleimg from "../../Images/iconsgoogle.png";

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="content">
//         <h3 className="heading pb-0">Buy Sell and discover</h3>
//         <h3 className="heading pb-0">Construction Materials</h3>

//         <div className="slider-btn-brown btn-hover mt-4">
//           <h1 className="animated">
//             Sign up now and join millions of people on the social marketplace
//             for all Construction things.
//           </h1>
//         </div>
//         <div className="btncntinhomepage">
//           <button className="facebookbtn" type="button">
//             <img src={facebookimg} width={24} height={24} alt="facebook" />
//             <span className="ms-2">Continue with Facebook</span>
//           </button>
//           <button className="googlebtn mt-3" type="button">
//             <img
//               src={googleimg}
//               width={20}
//               height={20}
//               alt="google"
//               style={{ marginLeft: "-18px" }}
//             />
//             <span className="ms-2">Continue with Google</span>
//           </button>
//           <div className="signupwithemailcnt mt-4">
//             <a className="signupwithemail" href="/shop-grid-standard">
//               Sign up with Email
//             </a>
//           </div>
//         </div>
//       </div>
//       <img
//         src="/static/media/homepagebanner.7f4356f9e5961c3f10c1.png"
//         alt="Image"
//         className="responsive-image"
//       ></img>
//     </div>
//   );
// };

// export default HomePage;
