"use client"; // Add this if you're using Next.js Client Component

import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/tour1.png';
import image2 from '../../../public/image/image (2).png';
import image3 from '../../../public/image/image (1).png';
import image4 from '../../../public/image/image (3).png';
import image5 from '../../../public/image/tourimg.png';

const Home2about = () => {
  const details = [
    {
      img: image4,
      title: "Holiday Packages",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image2,
      title: "flight booking",
      desc: "Get the best flight deals with amazing discounts.",
    },
    {
      img: image3,
      title: "umrah",
      desc: "Explore the world's finest hotels and resorts.",
    },
    {
      img: image1,
      title: "hotel booking",
      desc: "Thrilling adventures await at exclusive destinations.",
    },
    {
      img: image5,
      title: "activities",
      desc: "Special packages for memorable family vacations.",
    },
  
  ];

  return (
    <div>
      <div className="with-our-top container">
      <div className="heading-for-all">
          <h2>With our Top Experience</h2>
          <span>Select the offer that suits you best</span>
        </div>
        <div className="tour-boxes">
          {details.map((item, index) => (
            <div
              key={index}
              className={`tour-box ${index % 2 === 0 ? "up" : "down"}`} // Staggered effect
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

export default Home2about;
