import React from 'react'
import { TiSocialFacebookCircular ,TiSocialTwitter ,TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaEnvelope } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
const AboveNav = () => {
  return (

  <div className="contact-info">
    <div className="info-item">
    <i className="icon icon-envelope"><FaEnvelope /></i>
      <span>info@company.com</span>
    
    <i className="icon icon-map"><FaMap /></i>
      <span>Sunny Isles Beach, FL 33160</span>
    </div>
    <div className="social-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
      <i className="icon icon-facebook"><TiSocialFacebookCircular /></i>
      </a>
      <a href="https://x.com/minthu" target="_blank" rel="noopener noreferrer">
      <i className="icon icon-twitter"><TiSocialTwitter /></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
      <i className="icon icon-linkedin"><TiSocialLinkedin /></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
      <i className="icon icon-instagram"><SlSocialInstagram /></i>
      </a>
    </div>
  </div>

  )
}

export default AboveNav