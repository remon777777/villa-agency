import React from 'react'
import './Hero.css'
function Hero({ img, title, desc, clName }) {
    return (
            <div  >
                <img className={clName} src={img}  />
                <div className='info'>
                    <p className='show'>{title}</p>
                    <h1>{desc}</h1>
                </div>
            </div>
    )
}

export default Hero