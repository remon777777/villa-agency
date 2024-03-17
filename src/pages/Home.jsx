import React from 'react'
import Hero from '../components/Hero/Hero'
import HomeBg from '../assets/banner-01.jpg'
import ContactBg from '../assets/contact-bg.jpg'
import VideoBg from "../assets/page-heading-bg.jpg"
import Video from "../assets/video-frame.jpg"
import Card from '../components/Card/Card'
import villas from "../../villas.json";
import villatypeData from "../../villatype.json";
import Container1 from '../components/Container/Container1';
import VideoSection from '../components/VideoSection/VideoSection';
import Map from '../components/Map/Map';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form'
import UnderVideo from '../components/VideoSection/UnderVideo'
import Container2 from '../components/Container/Container2'
const Home = () => {
  const selectedItem = villatypeData[0];
  return (
    <div>
      
      <Hero
        clName='hero-home'
        img={HomeBg}
        title='Toronto, Canada'
        desc='HURRY! GET THE BEST VILLA FOR YOU '

      />
      <div>
        <Container1 />
      </div>
      <div>
        <VideoSection 
        img={VideoBg}
        title='| VIDEO VIEW'
        desc='Get Closer View & Different Feeling'
        video={Video}
        />
        <UnderVideo />
      </div>
      <Container2 villatype={selectedItem} />
      <div className="card-container">
        {villas.map((villa) => (
          <Card key={villa.id} villa={villa} />
        ))}
      </div>
      
      <div>
      <VideoSection 
        img={ContactBg}
        title='Contact Us'
        desc='Get In Touch With Our Agents '
        video={null}
        />
     
      </div>
      <div className="map-form-container">
        <Map />
        <Form />
      </div>
      <Footer />

    </div>
  )
}

export default Home