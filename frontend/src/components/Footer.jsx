import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">{businessInfo.name}</h3>
            <p className="footer-text">
              Professional cleaning services you can trust. Serving residential, commercial, and Airbnb clients with excellence.
            </p>
            <div className="footer-rating">
              <span className="rating-badge">⭐ {businessInfo.rating} Rating</span>
              <span className="review-count">{businessInfo.reviewCount}+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/reviews" className="footer-link">Reviews</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              {businessInfo.services.map((service, index) => (
                <li key={index} className="footer-list-item">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <a href={`tel:${businessInfo.phone}`} className="contact-link">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <span>{businessInfo.hours}</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
