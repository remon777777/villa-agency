import React from 'react'
import './UnderVideo.css'
import { FaCircle } from "react-icons/fa";
const UnderVideo = () => {

    const facts = [
        { id: 1, number: "34", titleOne: "Buildings", titleTwo: "Finished Now" },
        { id: 2, number: "12", titleOne: "Years", titleTwo: "Experience" },
        { id: 3, number: "24", titleOne: "Awards", titleTwo: "Won 2023" },
    ];

    return (
        <div className="fact-wrapper ">
            {facts.map((fact) => (
                <div
                    key={fact.id}
                    className="fact card "
                >
                    <span className="text-coral ">
                        {fact.number}
                    </span>
                    <div className="fact-text ">
                        <span className="title-one">{fact.titleOne}</span>
                        <span className="title-two">{fact.titleTwo}</span>
                    </div>
                    <i className="icon-circle"><FaCircle /></i>
                </div>
            ))}
            
        </div>


    )
}

export default UnderVideo