import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vfetmox', 'template_s5tca8o', form.current, {
        publicKey: 'Q_9rq_xZHv3sM-6Ul',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(' Thank you for contacting me ! Email sended successfully!!')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
         Feel free to reach out to me for any inquiries or collaboration opportunities!
        </p>
      </div>
      <form className="contact--form--container"
       ref={form} onSubmit={sendEmail}
       >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_name"
              id="user_name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="user_email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
          />
        </label>
        <div>
          <button 
           className="btn btn-primary contact--form--btn"
           type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
