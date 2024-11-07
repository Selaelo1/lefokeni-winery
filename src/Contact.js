
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          Contact us to learn more about our wines, schedule a tasting, or join our mailing list.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <textarea placeholder="Message" className="form-textarea" />
          <button className="form-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;




