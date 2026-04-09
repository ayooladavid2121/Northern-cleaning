import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Clock, Shield, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/mock';

export const About = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">About Northern Cleaning & Services</h1>
          <p className="hero-subtitle">
            Professional cleaning with a personal touch
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="heading-2">Your Trusted Cleaning Partner</h2>
              <p className="body-large">
                At Northern Cleaning & Services, we believe that a clean space is more than just appearances—it's about creating healthy, comfortable environments where people can thrive.
              </p>
              <p className="body-medium">
                Founded on principles of professionalism, reliability, and attention to detail, we've built our reputation one satisfied customer at a time. Our team of experienced cleaning professionals takes pride in delivering exceptional results, whether we're caring for your home, maintaining your office, or preparing your Airbnb for guests.
              </p>
              <p className="body-medium">
                With over 80 satisfied customers and a 4.6-star rating, we've proven that quality and consistency matter. We understand that inviting someone into your space requires trust, and we don't take that responsibility lightly.
              </p>
            </div>

            <div className="about-image-wrapper">
              <img 
                src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg" 
                alt="Northern Cleaning professional team"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="heading-2 text-center">What Sets Us Apart</h2>
          <div className="ai-grid">
            <div className="product-card feature-card">
              <div className="feature-icon">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="heading-3">Experience & Excellence</h3>
              <p className="body-medium">
                Our team brings years of professional cleaning experience and a commitment to excellence in every job we undertake.
              </p>
            </div>

            <div className="product-card feature-card">
              <div className="feature-icon">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3 className="heading-3">Attention to Detail</h3>
              <p className="body-medium">
                We don't cut corners. Every surface, every room receives the thorough care and attention it deserves.
              </p>
            </div>

            <div className="product-card feature-card">
              <div className="feature-icon">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="heading-3">Flexible & Reliable</h3>
              <p className="body-medium">
                We work around your schedule and accommodate last-minute needs. When you need us, we're there.
              </p>
            </div>

            <div className="product-card feature-card">
              <div className="feature-icon">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="heading-3">Trustworthy Service</h3>
              <p className="body-medium">
                We treat your space with respect and care. Professional, friendly, and always accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <h2 className="heading-2">Our Commitment to You</h2>
            <p className="body-large">
              Whether you're a busy homeowner, a property manager juggling multiple Airbnb listings, or a business owner who needs reliable commercial cleaning, we're here to help.
            </p>
            <p className="body-medium">
              We understand the importance of flexibility—that's why we offer last-minute booking support and work around your schedule. Our team is trained to handle everything from routine residential cleaning to detailed move-out services that help you get your full security deposit back.
            </p>
            <p className="body-medium">
              For our Airbnb clients, we pride ourselves on fast turnover times without sacrificing quality. Your guests will walk into a spotless, guest-ready space every single time. For our commercial clients, we maintain professional standards that reflect well on your business.
            </p>
            <p className="body-medium">
              At Northern Cleaning & Services, we're not just cleaning spaces—we're building lasting relationships based on trust, quality, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Experience the Northern Cleaning Difference</h2>
            <p className="body-large">
              Join our family of satisfied customers and discover what professional cleaning should be
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary btn-large">
                Get Your Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary btn-large">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
