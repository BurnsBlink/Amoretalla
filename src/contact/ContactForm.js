import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'
import '../App.css';
import 'react-phone-number-input/style.css'

const ContactForm = () => {
  const bizCardSizeSmall = 'https://ik.imagekit.io/r596hampx/tr:w-600/aubrey.png'
  const bizCardSizeMed = 'https://ik.imagekit.io/r596hampx/tr:w-800/aubrey.png'
  const bizCardSizeLarge = 'https://ik.imagekit.io/r596hampx/tr:w-1200/aubrey.png'
  const bizCardSizeXlarge = 'https://ik.imagekit.io/r596hampx/tr:w-1600/aubrey.png'
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
          <div className='col-md-7 col-sm-12'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label htmlFor='fullName' className='form-text'>Name</label>
                <input type='text' name='fullName' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='companyName' className='form-text'>Company <span className='italicStyle'>(Optional)</span></label>
                <input type='text' name='companyName' className='form-control' />
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
                <label htmlFor='message' className='form-text'>Message</label>
                <textarea className='form-control' name='contactMessage' rows='4'></textarea>
              </div>
              <button type='submit' value='Send' className='btn btnSubmit'>SUBMIT</button>
            </form>
          </div>
          <div className='col-md-5 col-sm-12'>
            <div className='row justify-content-center'>
              <div className='col-md-12 col-sm-12 contactInfo'>
                <div><a className='emailLink' href='mailto:info@amoretalla.com'>✉ info@amoretalla.com</a></div>
                <div><a className='phoneLink' href='tel:603-685-8478'>☏ 603-685-8478</a></div>

                <div className='addressBlock'><a className='address' href='http://maps.google.com/?q=8 Stiles Rd, Salem, New Hampshire, 03079'>8 Stiles Road<br></br>
                  Salem, NH 03079</a></div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <a target='_blank' rel='noreferrer' href='mailto:arbridalsales@gmail.com'>
                  <img
                    className='bizCard'
                    src='https://ik.imagekit.io/r596hampx/aubrey.png'
                    srcSet={`${bizCardSizeSmall} 600w, ${bizCardSizeMed} 800w, ${bizCardSizeLarge} 1200w,  ${bizCardSizeXlarge} 1600w`}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



