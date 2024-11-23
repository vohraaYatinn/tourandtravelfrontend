"use client"; // Ensures client-side rendering for React

import React from "react";
import Image from "next/image";
import box1img from "../../../public/image/image 19.png"; // Update the path if necessary
import box2img from "../../../public/image/image 19 (1).png"; // Update the path if necessary
import box3img from "../../../public/image/image 19 (2).png"; // Update the path if necessary


const Home2Destinationslide = () => {
  const details = [
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "Domestic Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box1img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
  ];

  return (
    <div className="exclusive container margintop checkmail" >
  <div className="heading-for-all">
  <h2>Exclusive Offers</h2>
  <span>Select the offer that suits you best</span>
  </div>
      <div className="exclusive-boxes">
        {details.map((detail, index) => (
          <div className="exclusive-box" key={index}>
            <div className="box-left-img">
              <Image src={detail.img} alt={detail.flightname} width={100} height={100} />
            </div>
        <div className="box-right-det">
        <p className="flightname" style={
          {
            fontWeight:500
          }
        }>{detail.flightname}</p>
            <h3>{detail.title}</h3>
            <p className="desc">{detail.desc}</p>
            <button className="book-btn">Book Now</button>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2Destinationslide;
