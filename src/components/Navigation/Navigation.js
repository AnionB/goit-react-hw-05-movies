import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navBar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          styles.menuItem + ' ' + (isActive ? styles.activeMenuItem : '')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        className={({ isActive }) =>
          styles.menuItem + ' ' + (isActive ? styles.activeMenuItem : '')
        }
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
