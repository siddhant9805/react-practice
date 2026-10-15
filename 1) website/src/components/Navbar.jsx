import './Navbar.css';

export function Navbar({ setPage, page }) {
  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <div className="nav-brand" onClick={() => setPage('Home')}>
        Siddhant's App
      </div>

      {/* Search Bar in Between */}
      <div className="nav-search-container">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="nav-search-input"
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <span
          className={page === 'Home' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('Home')}
        >
          Home
        </span>
        <span
          className={page === 'About' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('About')}
        >
          About
        </span>
        <span
          className={page === 'Contact' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('Contact')}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}