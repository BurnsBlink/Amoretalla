import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'
import '../App.css';
import 'react-phone-number-input/style.css'

const ContactForm = () => {
  const [value, setValue] = useState('+1 ')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', process.env.REACT_APP_EMAIL_ENV, e.target, process.env.REACT_APP_EMAIL_TOKEN)
      .then((result) => {
        console.log(result)
        alert('Message was sent!');
      }, (error) => {
        console.log(error.text);
        alert("We're sorry, there was an error, pleease try again.");
      });
  };

  return (
    <div className='pageBody'>
      <div className='container containerContact'>
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label htmlFor='firstName' className='form-text'>First Name</label>
                <input type='text' name='firstName' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName' className='form-text'>Last Name</label>
                <input type='text' name='lastName' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='phoneNumber' className='form-text'>Phone Number</label>
                <PhoneInput
                  placeholder='Enter phone number'
                  defaultCountry='US'
                  value={value}
                  onChange={setValue}
                  type='text'
                  name='phoneNumber'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='customerEmail' className='form-text'>Email address</label>
                <input type='email' name='email' className='form-control' aria-describedby='emailHelp' />
              </div>
              <div className='form-group'>
                <label htmlFor='weddingDate' className='form-text'>Wedding Date (if known)</label>
                <input type='date' name='weddingDate' className='form-control wedding-date' aria-describedby='date' />
              </div>
              <div className='form-group'>
                <label htmlFor='message' className='form-text'>Message</label>
                <textarea className='form-control' name='contactMessage' rows='4'></textarea>
              </div>
              <button type='submit' value='Send' className='btn btnSubmit'>SUBMIT</button>
            </form>
          </div>
          <div className='col-md-4 col-sm-12 contactInfo'>
            <div><a className='emailLink' href='mailto:g.atallah@amoretalla.com'>✉ g.atallah@amoretalla.com</a></div>
            <div><a className='phoneLink' href='tel:603-685-8478'>☏ 603-685-8478</a></div>

            <div className='addressBlock'><a className='address' href='http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003'>8 Stiles Road<br></br>
            Salem, NH 03079</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



