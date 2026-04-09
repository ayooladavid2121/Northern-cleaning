import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { testimonials, businessInfo } from '../data/mock';

export const Reviews = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Customer Reviews</h1>
          <div className="rating-display-large">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={32} 
                  fill={i < Math.floor(businessInfo.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <div className="rating-info">
              <span className="rating-number-large">{businessInfo.rating}</span>
              <span className="rating-text">Based on {businessInfo.reviewCount}+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="testimonials-full-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="product-card testimonial-card-full">
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
                <p className="testimonial-text-full">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-author-info">
                    <strong className="author-name">{testimonial.name}</strong>
                    <span className="testimonial-service-tag">{testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">80+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.6</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="heading-2 text-center">What Our Customers Love</h2>
          <div className="highlights-grid">
            <div className="product-card highlight-card">
              <h3 className="heading-3">Professionalism</h3>
              <p className="body-medium">
                Customers consistently praise our team's professionalism, punctuality, and respectful approach to their spaces.
              </p>
            </div>
            <div className="product-card highlight-card">
              <h3 className="heading-3">Attention to Detail</h3>
              <p className="body-medium">
                We don't miss a spot. Our thorough cleaning process ensures every corner receives proper attention.
              </p>
            </div>
            <div className="product-card highlight-card">
              <h3 className="heading-3">Reliability</h3>
              <p className="body-medium">
                Airbnb hosts and property managers trust us for consistent, on-time service that never disappoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Join Our Happy Customers</h2>
            <p className="body-large">
              Experience the professional cleaning service that earns 5-star reviews
            </p>
            <Link to="/contact" className="btn-primary btn-large">
              Get Your Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
