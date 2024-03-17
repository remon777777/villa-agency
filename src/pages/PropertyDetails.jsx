import React from 'react'
import Hero from '../components/Hero/Hero'
import PropertBg from '../assets/page-heading-bg.jpg'
import Container1 from '../components/Container/Container1'
import Container2 from '../components/Container/Container2'
import Footer from '../components/Footer/Footer';
import villatypeData from "../../villatype.json";

const PropertyDetails = () => {
  const selectedItem = villatypeData[0];

  return (
    <div>
      <Hero
        clName='hero-mid'
        img={PropertBg}
        title='HOME / SINGLE PROPERTY'
        desc='SINGLE PROPERTY '

      />
      <Container1 />

      <Container2 villatype={selectedItem} />
      <Footer />

    </div>
  )
}

export default PropertyDetails