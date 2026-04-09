import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { businessInfo, contactFormSubmissions } from '../data/mock';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    const submission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    
    contactFormSubmissions.push(submission);
    
    // Show success message
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours to discuss your cleaning needs.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Get Your Free Cleaning Quote</h1>
          <p className="hero-subtitle">
            Contact us today and let's discuss how we can help keep your space spotless
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="heading-2">Request a Quote</h2>
              <p className="body-medium form-intro">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="(907) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Cleaning">Residential Cleaning</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Airbnb Cleaning">Airbnb Cleaning</option>
                    <option value="Move-Out Cleaning">Move-Out Cleaning</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your cleaning needs, preferred schedule, and any special requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-large btn-full">
                  <Send size={20} />
                  Send Quote Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="product-card contact-info-card">
                <h3 className="heading-3">Contact Information</h3>
                <p className="body-medium">
                  Prefer to call or text? We're here to help!
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <Phone size={24} />
                    </div>
                    <div className="contact-detail-text">
                      <strong>Phone</strong>
                      <a href={`tel:${businessInfo.phone}`} className="link-text">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <Clock size={24} />
                    </div>
                    <div className="contact-detail-text">
                      <strong>Business Hours</strong>
                      <span>{businessInfo.hours}</span>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="contact-detail-text">
                      <strong>Service Area</strong>
                      <span>United States</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-card quick-response-card">
                <Mail size={32} strokeWidth={1.5} />
                <h3 className="heading-3">Quick Response</h3>
                <p className="body-medium">
                  We typically respond to all quote requests within 24 hours. For urgent cleaning needs, please call us directly.
                </p>
              </div>

              <div className="product-card rating-card">
                <div className="rating-badge-large">⭐ {businessInfo.rating}</div>
                <h3 className="heading-3">Trusted by 80+ Customers</h3>
                <p className="body-small">
                  Join our family of satisfied customers who trust us with their cleaning needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
