import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navBar: {
    backgroundColor: '#343a40',
    padding: '1rem',
  },
  navBrand: {
    color: '#fff',
    fontSize: '1.25rem',
    textDecoration: 'none',
  },
  navLink: {
    color: '#fff',
    margin: '0 0.5rem',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: '#007bff',
  },
  navItem: {
    listStyle: 'none',
    display: 'inline',
  },
  navButton: {
    color: '#fff',
    border: '1px solid #fff',
    padding: '0.25rem 0.5rem',
    margin: '0 0.5rem',
  },
};

function BusinessNavigation() {
  return (
    <nav style={styles.navBar} className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        {/*<Link to="/" style={styles.navBrand}>
          <img src="assets/img/logo-w.png" alt="Logo" />
        </Link>*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarPrimary">
          <ul className="navbar-nav">
            <li style={styles.navItem}>
              <Link to="/business/home" style={styles.navLink}>DASHBOARD</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/information" style={styles.navLink}>INFORMATION</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/claim" style={styles.navLink}>CLAIM</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/bookings" style={styles.navLink}>BOOKINGS</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/messaging" style={styles.navLink}>MESSAGING</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/subscription" style={styles.navLink}>SUBSCRIPTION</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/business/reviews" style={styles.navLink}>REVIEWS</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <Link to="/" style={styles.navBrand}>
            <a className="nav-link" href="login.html" style={styles.navLink}>Back</a>
            </Link>
            {/*<li className="nav-item">
              <a className="nav-link" href="login.html" style={styles.navLink}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html" style={styles.navLink}>Register</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light btn-sm m-1 px-3" href="submit.html" style={styles.navButton}>
                <i className="fa fa-plus small mr-2" />
                Add Property
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BusinessNavigation;
