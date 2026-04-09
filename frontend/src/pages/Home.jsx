import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, Users, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { services, whyChooseUs, testimonials, businessInfo } from '../data/mock';

const iconMap = {
  Users,
  Star,
  CheckCircle,
  Calendar
};

export const Home = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional Cleaning Services You Can Trust
          </h1>
          <p className="hero-subtitle">
            Reliable Residential, Commercial & Airbnb Cleaning with 4.6-Star Rated Service
          </p>
          <p className="hero-description">
            Northern Cleaning & Services brings professional cleaning excellence to homes and businesses across the United States. With over 80 satisfied customers and a 4.6-star rating, we're your trusted partner for spotless spaces.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary btn-large">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
            <a href={`tel:${businessInfo.phone}`} className="btn-secondary btn-large">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Our Cleaning Services</h2>
            <p className="section-subtitle">
              Professional cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="ai-grid">
            {services.map((service) => (
              <div key={service.id} className="product-card service-card">
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <h3 className="product-card-title">{service.title}</h3>
                  <p className="product-card-description">{service.description}</p>
                  <Link to="/services" className="link-text service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Why Choose Northern Cleaning?</h2>
            <p className="section-subtitle">
              Experience the difference of professional, reliable cleaning
            </p>
          </div>

          <div className="ai-grid">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.id} className="product-card feature-card">
                  <div className="feature-icon">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="heading-3">{item.title}</h3>
                  <p className="body-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section testimonials-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">What Our Customers Say</h2>
            <div className="rating-display">
              <Star size={24} fill="currentColor" />
              <span className="rating-number">{businessInfo.rating}</span>
              <span className="rating-text">from {businessInfo.reviewCount}+ reviews</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="product-card testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/reviews" className="btn-secondary">
              Read All Reviews
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Ready for a Spotless Space?</h2>
            <p className="body-large">
              Get your free cleaning quote today and experience the Northern Cleaning difference
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary btn-large">
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <a href={`tel:${businessInfo.phone}`} className="phone-number-display">
                <Phone size={20} />
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
