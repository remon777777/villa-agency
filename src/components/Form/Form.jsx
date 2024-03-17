import React from 'react'
import Button from '../Button/Button'
import "../Form/Form.css"
const Form = () => {
    return (
        <div className="form-container">
            
            <form className="simple-form">
                <label >Full Name</label>
                <input
                 placeholder="Your Name..."
                    type="text"
                    id="name"
                />
                <label htmlFor="email">Email Address</label>
                <input
                 placeholder="Your Email..."
                    type="email"
                    id="email"
                />
                <label htmlFor="subject">Subject</label>
                <input
                 placeholder="Subject..."
                    type="text"
                    id="subject"
                />
                <label htmlFor="message">Message</label>
                <textarea
                 placeholder="Message..."
                    id="message"
                />
                <Button
          cName='buttonpropert'
          buttonUrl="/propertydetails"
          title='Send Message'
        />
            </form>
        </div>
    )
}

export default Form