// src/pages/Home.tsx - Clean and focused version
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Pages.css';

export default function Home() {
  const [stats, setStats] = useState({
    farmers: 1250,
    dealers: 320,
    officers: 85
  });

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        farmers: prev.farmers < 1500 ? prev.farmers + 5 : prev.farmers,
        dealers: prev.dealers < 400 ? prev.dealers + 2 : prev.dealers,
        officers: prev.officers < 100 ? prev.officers + 1 : prev.officers
      }));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Background overlay with gradient */}
      <div className="background-gradient"></div>
      
      {/* Floating decorative elements */}
      <div className="floating-icon floating-1"><i className="fas fa-leaf"></i></div>
      <div className="floating-icon floating-2"><i className="fas fa-wheat"></i></div>
      <div className="floating-icon floating-3"><i className="fas fa-tractor"></i></div>
      
      <header className="home-header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <i className="fas fa-tractor"></i>
              <span>Agri Price</span>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link active">Home</Link>
              <Link to="/login" className="nav-link">Log In</Link>
            </div>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">
                <i className="fas fa-sign-in-alt"></i> Log In
              </Link>
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle glow-effect">
                  <i className="fas fa-user-plus"></i> Join Now
                </button>
                <div className="dropdown-menu">
                  <Link to="/signup?type=officer" className="dropdown-item">
                    <i className="fas fa-user-tie"></i> Market Officer
                  </Link>
                  <Link to="/signup?type=dealer" className="dropdown-item">
                    <i className="fas fa-store"></i> Agro-Dealer
                  </Link>
                  <Link to="/signup?type=farmer" className="dropdown-item">
                    <i className="fas fa-seedling"></i> Farmer
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section with Impact */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span><i className="fas fa-star"></i> Trusted by 1,500+ Users</span>
            </div>
            <h1 className="hero-title">
              Transform Your <span className="highlight">Agricultural</span> Business
            </h1>
            <p className="hero-subtitle">
              Join Kenya's fastest-growing agricultural network connecting farmers, dealers, 
              and market officers for transparent, profitable, and sustainable trading.
            </p>
            
            {/* Live Stats Counter */}
            <div className="live-stats">
              <div className="stat-item">
                <div className="stat-value">{stats.farmers}+</div>
                <div className="stat-label">Farmers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.dealers}+</div>
                <div className="stat-label">Agro-Dealers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.officers}+</div>
                <div className="stat-label">Officers</div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary btn-large pulse-effect">
                <i className="fas fa-rocket"></i> Start Free Trial
              </Link>
            </div>
            
            <div className="trust-badges">
              <span><i className="fas fa-check-circle"></i> No credit card required</span>
              <span><i className="fas fa-check-circle"></i> 30-day free trial</span>
              <span><i className="fas fa-check-circle"></i> Cancel anytime</span>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="feature-highlight">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Real-Time Price Tracking</h3>
              <p>Monitor market prices across Kenya</p>
              
              <div className="price-updates">
                <div className="price-item">
                  <span className="crop-name">Maize</span>
                  <span className="price-change positive">+15%</span>
                  <span className="current-price">KSh 3,500/bag</span>
                </div>
                <div className="price-item">
                  <span className="crop-name">Wheat</span>
                  <span className="price-change positive">+8%</span>
                  <span className="current-price">KSh 4,200/bag</span>
                </div>
                <div className="price-item">
                  <span className="crop-name">Beans</span>
                  <span className="price-change negative">-3%</span>
                  <span className="current-price">KSh 2,800/bag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Role Selection with Cards */}
      <section className="role-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your <span className="highlight">Success Path</span></h2>
            <p className="section-subtitle">Tailored solutions for every agricultural stakeholder</p>
          </div>
          
          <div className="role-cards-container">
            <Link to="/signup?type=farmer" className="role-card farmer-card">
              <div className="card-badge">Most Popular</div>
              <div className="role-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Farmer</h3>
              <p className="role-price">Free Forever</p>
              <ul className="role-features">
                <li><i className="fas fa-check"></i> Direct market access</li>
                <li><i className="fas fa-check"></i> Real-time price alerts</li>
                <li><i className="fas fa-check"></i> Weather advisory</li>
                <li><i className="fas fa-check"></i> Secure listings</li>
              </ul>
              <div className="role-cta">
                <span className="join-link">Join {stats.farmers}+ Farmers <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
            
            <Link to="/signup?type=dealer" className="role-card dealer-card">
              <div className="role-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>Agro-Dealer</h3>
              <p className="role-price">Premium Features</p>
              <ul className="role-features">
                <li><i className="fas fa-check"></i> Supplier network</li>
                <li><i className="fas fa-check"></i> Inventory management</li>
                <li><i className="fas fa-check"></i> Market analytics</li>
                <li><i className="fas fa-check"></i> Bulk purchasing</li>
              </ul>
              <div className="role-cta">
                <span className="join-link">Join {stats.dealers}+ Dealers <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
            
            <Link to="/signup?type=officer" className="role-card officer-card">
              <div className="role-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Market Officer</h3>
              <p className="role-price">Enterprise Tools</p>
              <ul className="role-features">
                <li><i className="fas fa-check"></i> Market oversight</li>
                <li><i className="fas fa-check"></i> Compliance tools</li>
                <li><i className="fas fa-check"></i> Data reporting</li>
                <li><i className="fas fa-check"></i> Team management</li>
              </ul>
              <div className="role-cta">
                <span className="join-link">Join {stats.officers}+ Officers <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get Started in <span className="highlight">3 Easy Steps</span></h2>
            <p className="section-subtitle">Join thousands of agricultural professionals in minutes</p>
          </div>
          
          <div className="visual-steps">
            <div className="visual-step">
              <div className="step-visual">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <div className="step-visual-label">Quick Sign Up</div>
              </div>
              <div className="step-content">
                <h3>Sign Up Free</h3>
                <p>Choose your role (Farmer, Dealer, or Officer) and create your account in 2 minutes. No credit card required.</p>
                <div className="step-highlights">
                  <span>📝 Fill simple form</span>
                  <span>🎯 Choose your role</span>
                  <span>⚡ Instant activation</span>
                </div>
              </div>
            </div>
            
            <div className="visual-step">
              <div className="step-visual">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <div className="step-visual-label">Identity Verification</div>
              </div>
              <div className="step-content">
                <h3>Verify Profile</h3>
                <p>Upload your ID for verification. Get approved within 24 hours and unlock full platform access.</p>
                <div className="step-highlights">
                  <span>🪪 Submit ID scan</span>
                  <span>✅ Quick approval</span>
                  <span>🔒 Secure verification</span>
                </div>
              </div>
            </div>
            
            <d  <div className="step-visual-label">Get Started</div>
              </div>
              <div className="step-content">
                <h3>Start Connecting</h3>
                <p>Access the marketplace, connect with partners, and grow your agricultural business.</p>
                <div className="step-highlights">
                  <span>🌾 Browse marketplace</span>
                  <span>🤝 Connect partners</span>
                  <span>📈 Grow business</span>
                </div
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Start Connecting</h3>
                <p>Access the marketplace, connect with partners, and grow your agricultural business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Grow Your Agricultural Business?</h2>
            <p>Join thousands who've transformed their farming journey</p>
            
            <div className="cta-stats">
              <div className="cta-stat">
                <div className="stat-value">94%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="cta-stat">
                <div className="stat-value">40%</div>
                <div className="stat-label">Average Income Growth</div>
              </div>
              <div className="cta-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-xlarge pulse-effect">
                <i className="fas fa-gem"></i> Start Free Trial
                <span className="cta-sub">No credit card required</span>
              </Link>
            </div>
            
            <div className="cta-guarantee">
              <div className="guarantee-badge">
                <i className="fas fa-shield-check"></i>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="guarantee-badge">
                <i className="fas fa-lock"></i>
                <span>Your Data is 100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-logo">
                <i className="fas fa-tractor"></i>
                <div>
                  <span className="logo-text">Agri Price</span>
                  <p className="logo-tagline">Growing Together</p>
                </div>
              </div>
            </div>
            
            <div className="footer-grid">
              <div className="footer-column">
                <h4>Platform</h4>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
              
              <div className="footer-column">
                <h4>Roles</h4>
                <Link to="/signup?type=farmer">For Farmers</Link>
                <Link to="/signup?type=dealer">For Dealers</Link>
                <Link to="/signup?type=officer">For Officers</Link>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/terms">Terms</Link>
                <Link to="/privacy">Privacy</Link>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="copyright">
                <p>© 2024 Agri Price. Empowering Kenya's Agriculture.</p>
                <p>Nairobi, Kenya | support@agriprice.co.ke | +254 700 123 456</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}