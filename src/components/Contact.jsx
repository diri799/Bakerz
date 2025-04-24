import React, { useState } from 'react';
import bobImage from '../assets/bob.png';
import aliceImage from '../assets/alice.png';
import '../styles/Contact.css';

const customerCare = [
  {
    name: 'Alice Johnson',
    email: 'alice@versaflex.com',
    avatar: aliceImage,
    role: 'Customer Care Lead',
  },
  {
    name: 'Bob Martinez',
    email: 'bob@versaflex.com',
    avatar: bobImage,
    role: 'Customer Care Rep',
  }
];

const companyInfo = {
  name: 'Versaflex Technologies',
  address: '123 Solar Street, Green Valley, CA 90210',
  phone: '(555) 123-4567',
  email: 'info@versaflex.com',
  hours: 'Monday-Friday: 9am-5pm\nSaturday: 10am-2pm'
};

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

  const handleCompanyContact = () => {
    // Action when "Contact Us" button is clicked
    window.location.href = `mailto:${companyInfo.email}`;
    // Alternatively, you could scroll to the form:
    // document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="customer-care">
        <h2>Customer Care Team</h2>
        <div className="profiles">
          {customerCare.map((cc) => (
            <div key={cc.email} className="profile-card">
              <img 
                src={cc.avatar} 
                alt={cc.name} 
                className="avatar" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <h3>{cc.name}</h3>
              <p className="role">{cc.role}</p>
              <a href={`mailto:${cc.email}`} className="email">{cc.email}</a>
            </div>
          ))}
        </div>
      </section>

      {/* New Company Information Card */}
      <section className="company-info-section">
        <div className="company-card">
          <h2>{companyInfo.name}</h2>
          <div className="company-details">
            <p><strong>Address:</strong> {companyInfo.address}</p>
            <p><strong>Phone:</strong> {companyInfo.phone}</p>
            <p><strong>Email:</strong> {companyInfo.email}</p>
            <p><strong>Business Hours:</strong></p>
            <pre>{companyInfo.hours}</pre>
          </div>
          <button 
            onClick={handleCompanyContact}
            className="contact-us-btn"
          >
            Contact Us
          </button>
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
            <p className="status success">Thanks! We'll be in touch shortly.</p>
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
