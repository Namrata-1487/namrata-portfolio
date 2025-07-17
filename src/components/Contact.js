import React from 'react';

const Contact = () => (
  <section className="section" data-aos="zoom-in-up" id="contact">
    <h2>📨 Connect with me </h2>
    <form>
      <input type="text" placeholder="Your Name" className="form-control mb-2" />
      <input type="email" placeholder="Your Email" className="form-control mb-2" />
      <textarea placeholder="Your Message" className="form-control mb-2"></textarea>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </section>
);
export default Contact;