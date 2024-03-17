import React from 'react'
import Hero from '../components/Hero/Hero'
import PropertBg from '../assets/page-heading-bg.jpg'
import Card from '../components/Card/Card'
import villas from "../../villas.json";
import Footer from '../components/Footer/Footer';
import '../App.css'
import Button from '../components/Button/Button';
import '../components/Button/Button.css';

const Propert = () => {
  return (
    <div>
      <Hero
        clName='hero-mid'
        img={PropertBg}
        title='HOME / PROPERTIES'
        desc='PROPERTIES '

      />
      <div className='bottun-container'>
        <Button
          cName='buttonpropert'
          buttonUrl="/propertydetails"
          title=' Show All'
        />
        <Button
          cName='buttonpropert'
          buttonUrl="/propertydetails"
          title=' Apartment'
        />
        <Button
          cName='buttonpropert'
          buttonUrl="/propertydetails"
          title=' Villa House'
        />
        <Button
          cName='buttonpropert'
          buttonUrl="/propertydetails"
          title=' Penthouse'
        />
      </div>
      <div className="card-container">
        {villas.map((villa) => (
          <Card key={villa.id} villa={villa} />
        ))}
      </div>
      <Footer />

    </div>
  )
}

export default Propert