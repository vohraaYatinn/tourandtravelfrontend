"use client"; // Add this if you're using Next.js Client Component

import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/image (4).png';
import image2 from '../../../public/image/image (5).png';
import image3 from '../../../public/image/image (6).png';
import image4 from '../../../public/image/image (7).png';


const Home2Destinationslide = () => {
  const details = [
    {
      img: image1,
      title: "spain",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image2,
      title: "italy",
      desc: "Get the best flight deals with amazing discounts.",
    },
    {
      img: image3,
      title: "usa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image4,
      title: "japan",
      desc: "Thrilling adventures await at exclusive destinations.",
    },

  
  ];

  return (
    <div>
      <div className="with-our-top container">
    
        <div className="heading-for-all">
          <h2>Explore Other Countries</h2>
          <span>Uncover secret wonders and celebrated attractions in top travel spots worldwide - your next escapade awaits!</span>
        </div>
        <div className="tour-boxes tour-boxes-countries">
          {details.map((item, index) => (
            <div
              key={index}
              className={`tour-box ${index % 2 === 0 ? "up" : "down-box"}`} 
            >
              <div className="tour-box-img">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p style={{
                    padding:"1rem",
                    color:"white"
                  }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home2Destinationslide;
