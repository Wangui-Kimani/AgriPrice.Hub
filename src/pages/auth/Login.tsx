// src/pages/Login.tsx – Updated Login page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Login form submitted:', formData);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      // Handle login logic here
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="back-home">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <div className="logo">
            <i className="fas fa-tractor"></i>
            <span>AgriNetwork</span>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-content">
            <div className="auth-card-header">
              <h1>Welcome back</h1>
              <p className="auth-subtitle">
                Access your certified market officer account to manage your agricultural network.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-auth"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Logging in...
                  </>
                ) : (
                  'Log In'
                )}
              </button>

              <div className="auth-divider">
                <span>New to AgriNetwork?</span>
              </div>

              <Link to="/signup" className="btn btn-outline btn-auth">
                <i className="fas fa-user-plus"></i> Create Account
              </Link>

              <div className="auth-footer">
                <p>
                  Need help? <Link to="/support">Contact Support</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}