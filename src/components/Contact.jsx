import React, { useState } from 'react';
import Bob from '../assets/Bob.png';
import alice from '../assets/alice.png';
import '../styles/Contact.css';

const customerCare = [
  {
    name: 'Alice Johnson',
    email: 'alice@bakerzbites.com',
    avatar: 'alice',
    role: 'Customer Care Lead',
  },
  {
    name: 'Bob Martinez',
    email: 'bob@bakerzbites.com',
    avatar: 'Bob',
    role: 'Customer Care Rep',
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: send formData to API/email service
    console.log('Submit', formData);
    setStatus('success'); // or 'error'
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="customer-care">
        <h2>Customer Care Team</h2>
        <div className="profiles">
          {customerCare.map((cc) => (
            <div key={cc.email} className="profile-card">
              <img src={cc.avatar} alt={cc.name} className="avatar" />
              <h3>{cc.name}</h3>
              <p className="role">{cc.role}</p>
              <a href={`mailto:${cc.email}`} className="email">{cc.email}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {status === 'success' && (
            <p className="status success">Thanks! We’ll be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p className="status error">Oops! Something went wrong. Try again.</p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
