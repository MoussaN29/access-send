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

function Navigation() {
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
              <Link to="/family/home" style={styles.navLink}>HOME</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/about" style={styles.navLink}>ABOUT</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/blog" style={styles.navLink}>BLOG</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/booking" style={styles.navLink}>BOOKING</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/profile" style={styles.navLink}>PROFILE</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/map" style={styles.navLink}>MAP</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/message" style={styles.navLink}>MESSAGE</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/review" style={styles.navLink}>REVIEW</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/serviceinfo" style={styles.navLink}>SERVICE INFO</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/family/subscription" style={styles.navLink}>SUBSCRIPTION</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {/*<li className="nav-item">
              <a className="nav-link" href="login.html" style={styles.navLink}>Login</a>
            </li>*/}
            <Link to="/" style={styles.navBrand}>
                <li className="nav-item">
                    <a className="nav-link" href="login.html" style={styles.navLink}>Back</a>
                </li>
            </Link>
            {/*<li className="nav-item">
              <a className="nav-link" href="register.html" style={styles.navLink}>Register</a>
            </li>*/}
            {/*<li className="nav-item">
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

export default Navigation;
