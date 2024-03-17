import React from 'react'
import './Container.css'
const Container1 = () => {
  return (
    <div className='container1'>
      <div className="img1">
        <img src='src/assets/featured.jpg' />
      </div>

      <div className='infoo'>src/assets
        <h6>| Featured</h6>
        <h2>Best Appartment Sea view</h2>
        <h2 >
          <button className='linkn-button'>
            Best useful links ?
          </button>
        </h2>
        <p>Get the best villa website template in HTML CSS and Bootstrap for your business.
           TemplateMo provides you the best free CSS templates in the world.
            Please tell your friends about it.</p>
      </div>
      <div className='featuress'>
        <ul>
          <li> <img src='src/assets/info-icon-01.png' /><div className='text-container'><h4>250 m2</h4> <span>Total Flat Space</span></div></li>
          <li> <img src='src/assets/info-icon-02.png' /><div className='text-container'><h4>Contract</h4> <span>Contract Ready</span></div></li>
          <li> <img src='src/assets/info-icon-03.png' /><div className='text-container'><h4>Payment</h4> <span>Payment Process</span></div></li>
          <li> <img src='src/assets/info-icon-04.png' /><div className='text-container'><h4>Safety</h4> <span>Under Control</span></div></li>

        </ul>
      </div>
      

    </div>
  )
}

export default Container1