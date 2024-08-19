import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><NavLink to="/" className={styles.navLink} activeClassName={styles.active}>Home</NavLink></li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <a href="#" className={styles.navLink}>Our Services</a>
            <ul className={styles.dropdownMenu}>
              <li><NavLink to="/health" className={styles.navLink} activeClassName={styles.active}>Health</NavLink></li>
              <li><NavLink to="/education" className={styles.navLink} activeClassName={styles.active}>Education</NavLink></li>
              <li><NavLink to="/spiritual" className={styles.navLink} activeClassName={styles.active}>Spiritual</NavLink></li>
              <li><NavLink to="/environment" className={styles.navLink} activeClassName={styles.active}>Environment</NavLink></li>
              <li><NavLink to="/service" className={styles.navLink} activeClassName={styles.active}>Service</NavLink></li>
              <li><NavLink to="/savewater" className={styles.navLink} activeClassName={styles.active}>Save Water</NavLink></li>
              <li><NavLink to="/selfcare" className={styles.navLink} activeClassName={styles.active}>Self Care</NavLink></li>
              <li><NavLink to="/animalcare" className={styles.navLink} activeClassName={styles.active}>Animal Care</NavLink></li>
              <li><NavLink to="/organisation" className={styles.navLink} activeClassName={styles.active}>Organisation</NavLink></li>
            </ul>
          </li>
          <li className={styles.navItem}><NavLink to="/contact" className={styles.navLink} activeClassName={styles.active}>Contact Us</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
