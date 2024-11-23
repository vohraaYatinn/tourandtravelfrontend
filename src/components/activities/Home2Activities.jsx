import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/image/home2img.png'
import imagelogo1 from '../../../public/image/image 2.png'
import imagelogo2 from '../../../public/image/image 3.png'
import imagelogo3 from '../../../public/image/image 4.png'

const Home2Activities = () => {
  return (
    <div className="home2-activities container margintop">
      <div className="home2active-boxes">
        <div className="boxes1-left">
          <Image src={image1} 
        
          />
        </div>
        <div className="boxes1-det">
          <h2>We create the trips you love</h2>
          <p>
            We take the best of what we’ve learned over our 25 years of experience as luxury travel agents and bring it all together to create bespoke luxury travel experiences.
          </p>
          <div className="home2-boxes">
            <div className="home2-box">
              <Image src={imagelogo1} alt="Best Tours" className="img-fluid" width={80} height={80} 
              style={{
                mixBlendMode: "multiply"
              }}/>
<div>             
   <h4 className='center-alg'>Best Tours</h4>
<p className='center-alg'>A strict screening process ensures that we only offer the best tours and trip packages.</p></div>
            </div>
            <div className="home2-box">
              <Image src={imagelogo2} alt="Best Price" className="img-fluid" width={80} height={80}  style={{
                mixBlendMode: "multiply"
              }}/>
<div>              <h4 className='center-alg'>Best Price</h4>
<p className='center-alg'>We guarantee you the best price. Found a lower price? We will match it.</p></div>
            </div>
            <div className="home2-box">
              
              <Image src={imagelogo3} alt="Free Cancellation" className="img-fluid" width={80} height={80}  style={{
                mixBlendMode: "multiply"
              }}/>

            
<div>         
       <h4 className='center-alg'>Free Cancellation</h4>
<p className='center-alg'>We understand how important flexibility is right now, just one click and it's done!</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2Activities
