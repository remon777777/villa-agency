import React from 'react'
import Button from '../Button/Button'
import './Container.css'
const Container2 = ({ villatype: {space, floor, rooms, imgurl, ctitle, desc} }) => {
    return (
        <><div className='bottun-container'>
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
            <div className='container1'>
                <div className='featuress'>
                    <ul>
                        <li>Total Flat Space <span>{space}</span></li>
                        <li>Floor number <span>{floor}</span></li>
                        <li>Number of rooms <span>{rooms}</span></li>
                        <li>Parking Available <span>Yes</span></li>
                        <li>Payment Process <span>Bank</span></li>
                    </ul>
                </div>

                <div className="img1">
                    <img src={imgurl} />

                </div>

                <div className='infoo'>
                    <h2>{ctitle}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Container2