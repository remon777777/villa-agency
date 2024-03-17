import React from 'react'
import Hero from '../components/Hero/Hero'
import PropertBg from '../assets/page-heading-bg.jpg'
import Form from '../components/Form/Form'
import './Contact.css';
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';
const Contact = () => {
  return (
    <div>
      <Hero
        clName='hero-mid'
        img={PropertBg}
        title='HOME / CONTACT US'
        desc='CONTACT US '

      />
      <div className='contact-container'>
        <div className='contactSection'>
          <div className='sectionHeading'>
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
          <p className='contactSectionPara'>
            When you really need to download free CSS templates, please remember our
            website TemplateMo. Also, tell your friends about our website. Thank
            you for visiting. There is a variety of Bootstrap HTML CSS templates on
            our website. If you need more information, please contact us.
          </p>
          <div className='contactItems'>
            <div className='contactItem'>
              <img
                src="src/assets/phone-icon.png"
                alt=""
                style={{ maxWidth: '52px' }}
              />
              <div>
                <h6>010-020-0340</h6>
                <span>Phone Number</span>
              </div>
            </div>
            <div className='contactItem'>
              <img
                src="src/assets/email-icon.png"
                alt=""
                style={{ maxWidth: '52px' }}
              />
              <div>
                <h6>info@villa.com</h6>
                <span>Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <div className='map'>
      <Map />
      </div>
      <Footer />
    </div>
    
  )
}

export default Contact