import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ click }) => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navbarLogo}>
        <h2>MERN Shopping Cart</h2>
      </div>

      {/* Links */}
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/cart" className={styles.cartLink}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className={styles.cartLogoBadge}>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* Ham Menu */}
      <div className={styles.hamburguerMenu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default NavBar
