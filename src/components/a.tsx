// src/pages/Home.tsx - Updated with background image
import { Link } from 'react-router-dom';
import './Pages.css';


export default function Home() {
  return (
    <div className="home-page">
      {/* Add a div for the background image */}
      <div className="background-overlay"></div>
      
      <header className="home-header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <i className="fas fa-tractor"></i>
              <span>AgriNetwork</span>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link active">Home</Link>
            </div>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">Log In</Link>
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle">
                  Join Now
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

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Connecting Farmers, Dealers & Market Officers</h1>
            <p className="hero-subtitle">
              Join our agricultural ecosystem designed to help all stakeholders thrive through 
              transparent trading, market intelligence, and seamless connections.
            </p>
            
            <div className="user-type-selection">
              <h3 className="selection-title">Join as:</h3>
              <div className="user-type-cards">
                <Link to="/signup?type=officer" className="user-type-card officer">
                  <div className="user-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h4>Market Officer</h4>
                  <p>Manage market operations and ensure fair trading</p>
                  <span className="join-link">Join Now <i className="fas fa-arrow-right"></i></span>
                </Link>
                
                <Link to="/signup?type=dealer" className="user-type-card dealer">
                  <div className="user-icon">
                    <i className="fas fa-store"></i>
                  </div>
                  <h4>Agro-Dealer</h4>
                  <p>Connect with farmers and expand your business</p>
                  <span className="join-link">Join Now <i className="fas fa-arrow-right"></i></span>
                </Link>
                
                <Link to="/signup?type=farmer" className="user-type-card farmer">
                  <div className="user-icon">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <h4>Farmer</h4>
                  <p>Sell produce directly to verified dealers and markets</p>
                  <span className="join-link">Join Now <i className="fas fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            
            <div className="hero-actions">
              <Link to="/login" className="btn btn-secondary btn-large">
                <i className="fas fa-sign-in-alt"></i> Access Your Account
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
              <i className="fas fa-network-wired"></i>
              <p>Agricultural Ecosystem Network</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Benefits for Every Role</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon officer">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>For Market Officers</h3>
              <ul className="benefit-list">
                <li><i className="fas fa-check"></i> Digital market management</li>
                <li><i className="fas fa-check"></i> Transaction oversight</li>
                <li><i className="fas fa-check"></i> Real-time market data</li>
                <li><i className="fas fa-check"></i> Regulatory compliance tools</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon dealer">
                <i className="fas fa-store"></i>
              </div>
              <h3>For Agro-Dealers</h3>
              <ul className="benefit-list">
                <li><i className="fas fa-check"></i> Direct farmer connections</li>
                <li><i className="fas fa-check"></i> Quality produce sourcing</li>
                <li><i className="fas fa-check"></i> Price trend analysis</li>
                <li><i className="fas fa-check"></i> Supply chain optimization</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon farmer">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>For Farmers</h3>
              <ul className="benefit-list">
                <li><i className="fas fa-check"></i> Fair price discovery</li>
                <li><i className="fas fa-check"></i> Direct market access</li>
                <li><i className="fas fa-check"></i> Crop advisory services</li>
                <li><i className="fas fa-check"></i> Timely payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Role</h3>
              <p>Sign up as a Market Officer, Agro-Dealer, or Farmer based on your needs</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Complete Registration</h3>
              <p>Provide necessary details and verification documents</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Access Your Dashboard</h3>
              <p>Start connecting, trading, and managing agricultural activities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join Our Agricultural Network?</h2>
          <p>Choose your role and start benefiting from our platform today</p>
          <div className="cta-buttons">
            <Link to="/signup?type=officer" className="btn btn-primary btn-large">
              <i className="fas fa-user-tie"></i> Join as Officer
            </Link>
            <Link to="/signup?type=dealer" className="btn btn-primary btn-large">
              <i className="fas fa-store"></i> Join as Dealer
            </Link>
            <Link to="/signup?type=farmer" className="btn btn-primary btn-large">
              <i className="fas fa-seedling"></i> Join as Farmer
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="fas fa-tractor"></i>
              <span>AgriNetwork</span>
            </div>
            <p className="footer-tagline">Connecting agricultural markets for sustainable growth</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="user-type-links">
              <span>Join as:</span>
              <Link to="/signup?type=officer">Market Officer</Link>
              <Link to="/signup?type=dealer">Agro-Dealer</Link>
              <Link to="/signup?type=farmer">Farmer</Link>
            </div>
            <p className="copyright">© 2023 Agricultural Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
/* Pages.css - Add these styles to your existing file */

.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: #2e7d32;
  color: white;
}

.btn-primary:hover {
  background-color: #1b5e20;
}

.btn-secondary {
  background-color: #666;
  color: white;
}

.btn-secondary:hover {
  background-color: #555;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #2e7d32;
  color: #2e7d32;
}

.btn-outline:hover {
  background-color: #2e7d32;
  color: white;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

.home-header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #2e7d32;
}

.logo i {
  font-size: 28px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
}

.nav-link.active {
  color: #2e7d32;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2e7d32;
}

.auth-buttons {
  display: flex;
  gap: 15px;
  align-items: center;
}

.hero-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8f5e9 100%);
}

.hero-section .container {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #1b5e20;
}

.hero-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-actions .btn i {
  margin-right: 8px;
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
  border-radius: 10px;
  padding: 60px 40px;
  text-align: center;
  color: #1b5e20;
}

.image-placeholder i {
  font-size: 120px;
  margin-bottom: 20px;
}

.image-placeholder p {
  font-size: 18px;
  font-weight: 500;
}

.features-section {
  padding: 80px 0;
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #1b5e20;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-card {
  background-color: #f9f9f9;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 48px;
  color: #2e7d32;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #2e7d32, #1b5e20);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .btn-primary {
  background-color: white;
  color: #2e7d32;
}

.cta-section .btn-primary:hover {
  background-color: #f5f5f5;
}

.footer {
  background-color: #333;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  text-align: center;
}

.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.footer-tagline {
  font-size: 18px;
  color: #bbb;
  margin-bottom: 40px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.copyright {
  color: #888;
  font-size: 14px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .hero-section .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
  
  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }
  
  .auth-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .auth-buttons .btn {
    width: 100%;
    text-align: center;
  }
}
/* Add these styles to your existing Pages.css for the Signup page */

.auth-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.auth-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.auth-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-home {
  color: #2e7d32;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.back-home:hover {
  color: #1b5e20;
}

.auth-card {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.auth-card-content {
  width: 100%;
  max-width: 520px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.auth-card-header {
  padding: 32px 32px 24px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.auth-card-header h1 {
  font-size: 28px;
  color: #1b5e20;
  margin-bottom: 12px;
  font-weight: 700;
}

.auth-subtitle {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0;
}

.auth-form {
  padding: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: white;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #2e7d32;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
}

.select-wrapper {
  position: relative;
}

.select-wrapper select {
  appearance: none;
  padding-right: 48px;
  cursor: pointer;
}

.select-wrapper i {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
}

.section-label {
  font-size: 16px !important;
  font-weight: 600 !important;
  margin-bottom: 16px !important;
  color: #1b5e20 !important;
}

.id-upload-section {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
}

.id-upload-section:hover {
  border-color: #2e7d32;
}

.id-upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-icon {
  font-size: 48px;
  color: #2e7d32;
  margin-bottom: 16px;
  background-color: #e8f5e9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 16px;
}

.file-types {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  display: block;
}

.btn-upload {
  background-color: #2e7d32;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
}

.btn-upload:hover {
  background-color: #1b5e20;
}

.upload-note {
  font-size: 12px;
  color: #666;
  margin-top: 16px;
  font-style: italic;
}

.password-input-wrapper {
  position: relative;
}

.password-input-wrapper i {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.password-strength {
  margin-top: 12px;
}

.strength-indicator {
  height: 6px;
  background-color: #eee;
  border-radius: 3px;
  margin-bottom: 8px;
  overflow: hidden;
}

.strength-bar {
  height: 100%;
  width: 0;
  transition: width 0.3s ease, background-color 0.3s ease;
}

.strength-bar.weak {
  width: 30%;
  background-color: #f44336;
}

.strength-bar.good {
  width: 70%;
  background-color: #ff9800;
}

.strength-bar.strong {
  width: 100%;
  background-color: #4caf50;
}

.strength-text-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.strength-text {
  color: #666;
}

.strength-value {
  font-weight: 600;
}

.strength-value.weak {
  color: #f44336;
}

.strength-value.good {
  color: #ff9800;
}

.strength-value.strong {
  color: #4caf50;
}

.password-requirements {
  margin-top: 16px;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 6px;
  border-left: 4px solid #2e7d32;
}

.password-requirements p {
  font-size: 13px;
  color: #555;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.password-requirements i {
  color: #4caf50;
  font-size: 12px;
}

.terms-agreement {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 32px;
}

.terms-agreement input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  flex-shrink: 0;
}

.terms-agreement label {
  margin-bottom: 0;
  font-weight: normal;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

.terms-agreement a {
  color: #2e7d32;
  text-decoration: none;
  font-weight: 500;
}

.terms-agreement a:hover {
  text-decoration: underline;
}

.btn-auth {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  margin-top: 0;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.auth-footer p {
  color: #666;
  font-size: 14px;
}

.auth-footer a {
  color: #2e7d32;
  text-decoration: none;
  font-weight: 500;
}

.auth-footer a:hover {
  text-decoration: underline;
}

/* Responsive styles for Signup page */
@media (max-width: 768px) {
  .auth-card-content {
    max-width: 100%;
    margin: 0 16px;
  }
  
  .auth-card-header {
    padding: 24px 24px 20px;
  }
  
  .auth-form {
    padding: 24px;
  }
  
  .auth-card-header h1 {
    font-size: 24px;
  }
  
  .auth-subtitle {
    font-size: 14px;
  }
  
  .id-upload-section {
    padding: 20px 16px;
  }
  
  .btn-upload {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .auth-header {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  
  .auth-header .logo {
    order: 1;
  }
  
  .back-home {
    order: 2;
    align-self: flex-start;
  }
  
  .auth-card-header h1 {
    font-size: 22px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}
/* Add these styles to your existing Pages.css for the Login page */

.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 8px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin: 0;
  cursor: pointer;
}

.remember-me label {
  margin-bottom: 0;
  font-weight: normal;
  font-size: 14px;
  color: #555;
  cursor: pointer;
}

.remember-me input[type="checkbox"]:checked {
  accent-color: #2e7d32;
}

.auth-divider {
  text-align: center;
  margin: 32px 0;
  position: relative;
}

.auth-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e0e0e0;
}

.auth-divider span {
  background-color: white;
  padding: 0 16px;
  color: #666;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

.btn-auth .fa-spinner {
  margin-right: 8px;
}

.btn-outline.btn-auth {
  border-width: 2px;
  border-color: #2e7d32;
  color: #2e7d32;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-outline.btn-auth:hover {
  background-color: #2e7d32;
  color: white;
}

/* Remove forgot password styles if you want to completely remove them */
/* .forgot-password {
  text-decoration: none;
  color: #2e7d32;
  font-size: 14px;
  font-weight: 500;
}

.forgot-password:hover {
  text-decoration: underline;
} */
 /* Add these styles to your existing Pages.css */

/* Dropdown for Join Now button */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-toggle::after {
  content: '▼';
  font-size: 10px;
  margin-left: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 220px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item i {
  width: 20px;
  text-align: center;
}

/* User Type Selection */
.user-type-selection {
  margin: 40px 0;
}

.selection-title {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.user-type-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

.user-type-card {
  background: white;
  border-radius: 12px;
  padding: 30px 24px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.user-type-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.user-type-card.officer:hover {
  border-color: #2e7d32;
}

.user-type-card.dealer:hover {
  border-color: #1976d2;
}

.user-type-card.farmer:hover {
  border-color: #ff9800;
}

.user-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 30px;
}

.user-type-card.officer .user-icon {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.user-type-card.dealer .user-icon {
  background-color: #e3f2fd;
  color: #1976d2;
}

.user-type-card.farmer .user-icon {
  background-color: #fff3e0;
  color: #ff9800;
}

.user-type-card h4 {
  font-size: 20px;
  color: #333;
  margin-bottom: 12px;
}

.user-type-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.join-link {
  color: #2e7d32;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
}

.user-type-card.dealer .join-link {
  color: #1976d2;
}

.user-type-card.farmer .join-link {
  color: #ff9800;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.benefit-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  border-top: 4px solid;
}

.benefit-card:nth-child(1) {
  border-color: #2e7d32;
}

.benefit-card:nth-child(2) {
  border-color: #1976d2;
}

.benefit-card:nth-child(3) {
  border-color: #ff9800;
}

.benefit-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.benefit-icon.officer {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.benefit-icon.dealer {
  background-color: #e3f2fd;
  color: #1976d2;
}

.benefit-icon.farmer {
  background-color: #fff3e0;
  color: #ff9800;
}

.benefit-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}

.benefit-list {
  list-style: none;
  padding: 0;
}

.benefit-list li {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #555;
  font-size: 15px;
}

.benefit-list i {
  color: #4caf50;
  font-size: 14px;
  margin-top: 2px;
}

/* How It Works Section */
.how-it-works {
  padding: 80px 0;
  background-color: #f5f5f5;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  flex: 1;
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.step-number {
  width: 50px;
  height: 50px;
  background: #2e7d32;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

.step p {
  color: #666;
  line-height: 1.6;
}

/* Updated CTA Section */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.cta-buttons .btn {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Footer Updates */
.user-type-links {
  margin: 20px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.user-type-links span {
  color: #bbb;
  font-size: 14px;
}

.user-type-links a {
  color: #ddd;
  text-decoration: none;
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
}

.user-type-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .steps-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .hero-section .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
  
  .nav-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .user-type-cards {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }
  
  .auth-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .auth-buttons .btn,
  .dropdown {
    width: 100%;
    text-align: center;
  }
  
  .dropdown-menu {
    left: 0;
    right: auto;
    width: 100%;
  }
  
  .user-type-links {
    flex-direction: column;
    gap: 10px;
  }
}
/* Add these to your existing Pages.css for multi-role signup */

.user-type-indicator {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.type-badge {
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.type-badge.officer {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.type-badge.dealer {
  background-color: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.type-badge.farmer {
  background-color: #fff3e0;
  color: #ff9800;
  border: 1px solid #ffe0b2;
}

.type-badge i {
  font-size: 16px;
}

/* Role-specific button colors */
.btn-auth.officer {
  background-color: #2e7d32;
}

.btn-auth.officer:hover {
  background-color: #1b5e20;
}

.btn-auth.dealer {
  background-color: #1976d2;
}

.btn-auth.dealer:hover {
  background-color: #1565c0;
}

.btn-auth.farmer {
  background-color: #ff9800;
}

.btn-auth.farmer:hover {
  background-color: #f57c00;
}

/* Switch role section */
.switch-role {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.switch-role p {
  text-align: center;
  color: #666;
  margin-bottom: 12px;
  font-size: 14px;
}

.role-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.role-links a {
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.role-links a:nth-child(1) {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.role-links a:nth-child(2) {
  background-color: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.role-links a:nth-child(3) {
  background-color: #fff3e0;
  color: #ff9800;
  border: 1px solid #ffe0b2;
}

.role-links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Form field icons */
.input-wrapper i {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
}

/* Optional field styling */
.upload-note {
  font-size: 12px;
  color: #666;
  margin-top: 12px;
  font-style: italic;
  text-align: center;
}

/* Responsive adjustments for role-specific forms */
@media (max-width: 768px) {
  .type-badge {
    font-size: 12px;
    padding: 6px 16px;
  }
  
  .role-links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .role-links a {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
  
  .auth-form {
    padding: 20px;
  }
}