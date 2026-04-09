import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Key, PackageOpen, Check, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Home,
  Building2,
  Key,
  PackageOpen
};

export const Services = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Our Cleaning Services</h1>
          <p className="hero-subtitle">
            Professional cleaning solutions for every need
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className={`service-detail ${index % 2 === 1 ? 'service-detail-reverse' : ''}`}
              >
                <div className="service-detail-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="detail-image"
                  />
                </div>
                <div className="service-detail-content">
                  <div className="service-icon-large">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="heading-2">{service.title}</h2>
                  <p className="body-large">{service.description}</p>
                  <ul className="feature-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-list-item">
                        <Check size={20} strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    Request This Service
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Book Section */}
      <section className="section why-book-section">
        <div className="container">
          <div className="why-book-content">
            <h2 className="heading-2">Why Book With Us?</h2>
            <div className="why-book-grid">
              <div className="why-book-item">
                <h3 className="heading-3">Professional Results</h3>
                <p className="body-medium">
                  Our experienced team delivers consistent, high-quality cleaning that exceeds expectations every time.
                </p>
              </div>
              <div className="why-book-item">
                <h3 className="heading-3">Flexible Scheduling</h3>
                <p className="body-medium">
                  We work around your schedule with options for regular service, one-time deep cleans, and last-minute bookings.
                </p>
              </div>
              <div className="why-book-item">
                <h3 className="heading-3">Transparent Pricing</h3>
                <p className="body-medium">
                  No hidden fees or surprises. Get a free quote and know exactly what you'll pay before we start.
                </p>
              </div>
              <div className="why-book-item">
                <h3 className="heading-3">Satisfaction Guaranteed</h3>
                <p className="body-medium">
                  Not happy? We'll make it right. Your satisfaction is our priority and we stand behind our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Ready to Get Started?</h2>
            <p className="body-large">
              Request your free cleaning quote today and experience professional service
            </p>
            <Link to="/contact" className="btn-primary btn-large">
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
