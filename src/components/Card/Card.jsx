import React from 'react';
import './Card.css';
import '../Button/Button.css'
import "../../../villas.json"
import Button from '../Button/Button';
import '../VideoSection/UnderVideo.css'
import { FaCircle } from "react-icons/fa";

const Card = ({ villa: {title, price, address, bedrooms, bathrooms, area, parking, floor, imageUrl }}) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl}  />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">{price}</p>
        <p className="card-address">{address}</p>
        <ul className="card-details">
          <li>
            <span className="card-detail-label">Bedrooms:</span> {bedrooms}
          </li>
          <li>
            <span className="card-detail-label">Bathrooms:</span> {bathrooms}
          </li>
          <li>
            <span className="card-detail-label">Area:</span> {area} m²
          </li>
          <li>
            <span className="card-detail-label">Floor:</span> {floor}
          </li>
          <li>
            <span className="card-detail-label">Parking:</span> {parking} spots
          </li>
        </ul>
        <Button 
        cName='button1'
        buttonUrl="/propertydetails"
        title='Schedule a visit' />
      </div>
      <i className="icon-cir"><FaCircle /></i>

    </div>
  );
};

export default Card;