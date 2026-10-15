import './Footer.css';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Siddhant's App. All rights reserved.</p>
        <div className="footer-links">
          <span style={{ cursor: 'pointer' }}>Privacy</span>
          <span style={{ cursor: 'pointer' }}>Terms</span>
          <span style={{ cursor: 'pointer' }}>Support</span>
        </div>
      </div>
    </footer>
  );
}