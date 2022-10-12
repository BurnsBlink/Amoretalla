import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'
import '../App.css';
import 'react-phone-number-input/style.css'

const ContactForm = () => {
  const [value, setValue] = useState('+1 ')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'amoretalla_com', e.target, '9JLHNtI3a60G-I1ml')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='pageBodyContact'>
      <div className='container containerContact'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="firstName" className='form-text'>First Name</label>
            <input type="text" name="firstName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className='form-text'>Last Name</label>
            <input type="text" name="lastName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className='form-text'>Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              value={value}
              onChange={setValue}
              type="text"
              name="phoneNumber"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="customerEmail" className='form-text'>Email address</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="weddingDate" className='form-text'>Wedding Date (if known)</label>
            <input type="date" name="weddingDate" className="form-control wedding-date" aria-describedby="date" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className='form-text'>Message</label>
            <textarea className="form-control" name="contactMessage" rows="4"></textarea>
          </div>
          <button type="submit" value="Send" className="btn btnSubmit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;



