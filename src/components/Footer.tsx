// src/components/Footer.tsx
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1b5e20',
      color: 'white',
      padding: '2rem',
      marginTop: 'auto',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
            Login
          </Link>
          <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '1rem',
          fontSize: '0.9rem',
          opacity: 0.9,
        }}>
          <p style={{ margin: 0 }}>
            © {currentYear} Agri Market Management System. All rights reserved.
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', opacity: 0.8 }}>
            Streamlining agricultural market transactions
          </p>
        </div>
      </div>
    </footer>
  );
}
