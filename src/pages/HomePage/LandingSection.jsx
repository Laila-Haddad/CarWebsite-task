import React from 'react'
import carPic from "../../assets/home-car.png";
import carPic2 from "../../assets/home-car2.png";
import carPic3 from "../../assets/home-car3.png";




import "./HomePage.css";

function LandingSection() {

  return (
    <section className="landing">
          <div>
          <img className='landing-img-small' src={carPic2} alt="Car" />
            <h6>Arriving Summer 2019</h6>
            <h1>MAKE EVERY DAY LEGENDARY.</h1>
            <p className="landing-description">
              The culmination of comfort, luxury, and powerful living is
              embodied in the First-Ever BMUX7 - the biggest BMU ever built.
            </p>
          {/* <img className='landing-car-small' src={carPic3} alt="Car"  /> */}

            <a href="#products"><button className="filled-btn" >EXPLORE</button></a>
          </div>
          <div className="landing-image">
            <img src={carPic} alt="Car" />
          </div>

        </section>
  )
}

export default LandingSection