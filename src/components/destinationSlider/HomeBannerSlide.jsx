import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/city.png';
import image2 from '../../../public/image/dubaicity.png';
import image3 from '../../../public/image/fantastic.png';

const Home2Blog = () => {
  return (
    <div className="Home2Blog">
      <div className="Home2Blog-heading margintop">
        <h2>Discover Our Hottest Packages</h2>
        <p className='mb-4'>Select a service that suits you best</p>
      </div>
      <div className="Home2Blog-boxes">
        {[image1, image2, image3].map((image, index) => (
          <div className="Home2Blog-box" key={index}>
            <div className="image-wrapper">
              <Image
                src={image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
                width={500}
                height={300} // Maintain aspect ratio
              />
              <div className="overlay-of-image">
                <div className="overlay-content">
                  <h3>Luxury Staycation Tour</h3>
                  <h1>5D/4N</h1>
                </div>
                <button className="Home2Blog-btn">AED 27000/-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2Blog;
