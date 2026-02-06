// src/pages/Signup.tsx - Updated for multiple roles
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Pages.css';

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'officer' | 'dealer' | 'farmer'>('officer');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    market: '',
    businessName: '',
    farmSize: '',
    crops: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [loading, setLoading] = useState(false);

  // Get user type from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    
    if (type === 'dealer' || type === 'farmer') {
      setUserType(type);
    } else {
      setUserType('officer');
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Password strength calculation
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 2) setPasswordStrength('weak');
    else if (strength <= 4) setPasswordStrength('good');
    else setPasswordStrength('strong');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registration data:', {
        userType,
        ...formData
      });
      
      // Redirect to login or dashboard
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = () => {
    // File upload logic
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.jpg,.jpeg,.png,.pdf';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
        // Handle file upload here
      }
    };
    input.click();
  };

  const markets = [
    'Central Market District A',
    'Northern Agricultural Hub',
    'Southern Trade Center',
    'Eastern Farmers Market',
    'Western Distribution Center',
    'Coastal Agricultural Exchange',
    'Midland Produce Market'
  ];

  const crops = [
    'Wheat',
    'Rice',
    'Corn',
    'Soybeans',
    'Cotton',
    'Vegetables',
    'Fruits',
    'Coffee',
    'Tea',
    'Spices'
  ];

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
              <div className="user-type-indicator">
                <span className={`type-badge ${userType}`}>
                  <i className={`fas ${
                    userType === 'officer' ? 'fa-user-tie' :
                    userType === 'dealer' ? 'fa-store' : 'fa-seedling'
                  }`}></i>
                  {userType === 'officer' ? 'Market Officer' :
                   userType === 'dealer' ? 'Agro-Dealer' : 'Farmer'}
                </span>
              </div>
              <h1>Create your account</h1>
              <p className="auth-subtitle">
                {userType === 'officer' 
                  ? 'Join as a certified market officer to help farmers and dealers thrive.'
                  : userType === 'dealer'
                  ? 'Join as an agro-dealer to connect with farmers and expand your business.'
                  : 'Join as a farmer to sell your produce directly to verified markets.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Common Fields for all users */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Johnathan Smith"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="phone">Phone Number *</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-phone"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, State, Country"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>

              {/* Role-specific Fields */}
              {userType === 'officer' && (
                <>
                  <div className="form-group">
                    <label htmlFor="market">Assigned Market *</label>
                    <div className="select-wrapper">
                      <select
                        id="market"
                        name="market"
                        value={formData.market}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      >
                        <option value="">Select your assigned market</option>
                        {markets.map((market, index) => (
                          <option key={index} value={market}>{market}</option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="section-label">Government ID Verification *</label>
                    <div className="id-upload-section">
                      <div className="id-upload-box">
                        <div className="upload-icon">
                          <i className="fas fa-id-card"></i>
                        </div>
                        <p className="upload-title">Upload Official ID</p>
                        <span className="file-types">JPG, PNG or PDF</span>
                        <button 
                          type="button" 
                          className="btn-upload"
                          onClick={handleFileUpload}
                          disabled={loading}
                        >
                          <i className="fas fa-upload"></i> Choose File
                        </button>
                        <p className="upload-note">Clear photo of government-issued ID required for officer verification</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {userType === 'dealer' && (
                <>
                  <div className="form-group">
                    <label htmlFor="businessName">Business Name *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Your business or shop name"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="market">Primary Market Area *</label>
                    <div className="select-wrapper">
                      <select
                        id="market"
                        name="market"
                        value={formData.market}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      >
                        <option value="">Select your primary market</option>
                        {markets.map((market, index) => (
                          <option key={index} value={market}>{market}</option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="section-label">Business License (Optional)</label>
                    <div className="id-upload-section">
                      <div className="id-upload-box">
                        <div className="upload-icon">
                          <i className="fas fa-file-contract"></i>
                        </div>
                        <p className="upload-title">Upload Business License</p>
                        <span className="file-types">JPG, PNG or PDF</span>
                        <button 
                          type="button" 
                          className="btn-upload"
                          onClick={handleFileUpload}
                          disabled={loading}
                        >
                          <i className="fas fa-upload"></i> Choose File
                        </button>
                        <p className="upload-note">Upload business license for verified dealer status (optional)</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {userType === 'farmer' && (
                <>
                  <div className="form-group">
                    <label htmlFor="farmSize">Farm Size (Acres) *</label>
                    <input
                      type="text"
                      id="farmSize"
                      name="farmSize"
                      placeholder="e.g., 10 acres"
                      value={formData.farmSize}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="crops">Primary Crops *</label>
                    <div className="select-wrapper">
                      <select
                        id="crops"
                        name="crops"
                        value={formData.crops}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                      >
                        <option value="">Select your main crops</option>
                        {crops.map((crop, index) => (
                          <option key={index} value={crop}>{crop}</option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="section-label">Farmer ID (Optional)</label>
                    <div className="id-upload-section">
                      <div className="id-upload-box">
                        <div className="upload-icon">
                          <i className="fas fa-id-card"></i>
                        </div>
                        <p className="upload-title">Upload Farmer ID</p>
                        <span className="file-types">JPG, PNG or PDF</span>
                        <button 
                          type="button" 
                          className="btn-upload"
                          onClick={handleFileUpload}
                          disabled={loading}
                        >
                          <i className="fas fa-upload"></i> Choose File
                        </button>
                        <p className="upload-note">Upload any farmer identification for verification (optional)</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Common Password Fields */}
              <div className="form-group">
                <label htmlFor="password">Create Password *</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-lock"></i>
                </div>
                
                <div className="password-strength">
                  <div className="strength-indicator">
                    <div className={`strength-bar ${passwordStrength}`}></div>
                  </div>
                  <div className="strength-text-wrapper">
                    <span className="strength-text">Strength: </span>
                    <span className={`strength-value ${passwordStrength}`}>
                      {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="password-requirements">
                  <p><i className="fas fa-check"></i> At least 8 characters</p>
                  <p><i className="fas fa-check"></i> Include uppercase & lowercase letters</p>
                  <p><i className="fas fa-check"></i> Include at least one number</p>
                  <p><i className="fas fa-check"></i> Include a symbol (e.g., ! @ # $ %)</p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <div className="form-group terms-agreement">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required 
                  disabled={loading}
                />
                <label htmlFor="terms">
                  By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and 
                  <Link to="/privacy"> Privacy Policy</Link>
                </label>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-auth ${userType}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Creating Account...
                  </>
                ) : (
                  `Create ${userType === 'officer' ? 'Officer' : 
                            userType === 'dealer' ? 'Dealer' : 'Farmer'} Account`
                )}
              </button>

              <div className="auth-footer">
                <p>
                  Already have an account? <Link to="/login">Log In</Link>
                </p>
                <div className="switch-role">
                  <p>Not a {userType === 'officer' ? 'Market Officer' : 
                              userType === 'dealer' ? 'Agro-Dealer' : 'Farmer'}?</p>
                  <div className="role-links">
                    <Link to="/signup?type=officer">Join as Officer</Link>
                    <Link to="/signup?type=dealer">Join as Dealer</Link>
                    <Link to="/signup?type=farmer">Join as Farmer</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}