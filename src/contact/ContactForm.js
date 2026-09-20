import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactForm = () => {
  const [phone, setPhone] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedPhone = phone ? formatPhoneNumber(phone) : '';
    const phoneInput = e.target.querySelector('input[name="phoneNumber"]');
    if (phoneInput) {
      phoneInput.value = formattedPhone;
    }

    emailjs
      .sendForm(
        'default_service',
        process.env.REACT_APP_EMAIL_ENV,
        e.target,
        process.env.REACT_APP_EMAIL_TOKEN
      )
      .then(
        () => {
          alert('Message was sent!');
          e.target.reset();
          setPhone(undefined);
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert("We're sorry, there was an error, please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="pageBody contactPage">
      <div className="container contactContainer">
        <h2 className="sectionTitle">Contact Us</h2>

        <div className="contactLayout">
          {/* Form */}
          <div className="contactFormWrapper">
            <form onSubmit={sendEmail} className="contactForm">
              <div className="formGroup">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="companyName">
                  Company <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="phoneNumber">Phone Number</label>
                <PhoneInput
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  className="phoneInput"
                />
                <input type="hidden" name="phoneNumber" value="" />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="contactSubmitBtn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contactInfoCard">
            <div className="contactInfoItem">
              <span className="contactLabel">Email</span>
              <a href="mailto:info@amoretalla.com">info@amoretalla.com</a>
            </div>

            <div className="contactInfoItem">
              <span className="contactLabel">Phone</span>
              <a href="tel:603-685-8478">603-685-8478</a>
            </div>

            <div className="contactInfoItem">
              <span className="contactLabel">Visit Us</span>
              <a
                href="https://maps.google.com/?q=8+Stiles+Rd,+Salem,+New+Hampshire,+03079"
                target="_blank"
                rel="noreferrer"
              >
                8 Stiles Road
                <br />
                Salem, NH 03079
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;