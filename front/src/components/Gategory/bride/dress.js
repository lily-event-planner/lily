import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BackgroundSlider from "react-background-slider";
const Dress = ({ name, price, description, productPicture }) => {
  const message = () => {
    alert("add succesfully ");
  };
  // render() {
    // this.state = {
    //   name : "" ,
    //   price : ""
    // }
      
    return (
    
      <div>
          <BackgroundSlider
          images={[
            "https://images.pexels.com/photos/70737/pexels-photo-70737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/3204420/pexels-photo-3204420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "https://images.pexels.com/photos/3474504/pexels-photo-3474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ]}
          duration={10}
          transition={2}
        />
  <div className="wrapper-grey padded">
        <div className="container">
          <div className="col-xs-12 col-sm-4">
            <div
              className="card"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/50/24/50/50245045ef94d53ac600feb823193343.jpg)",
              }}
            >
              {/* <div className="card-category">City</div> */}
              <div className="flex justify-center items-center vh-100">
                <button className="btn" onClick={message} target="_blank">
                  <div className="button relative">
                    <div className="element">
                      <p> book me  </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="card-description">
                <h2> Satin dress </h2>
                <p>  Modest and organza wedding dresses </p>
                <span> 5000 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }


export default Dress;
