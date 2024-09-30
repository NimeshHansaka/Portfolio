import { useState } from 'react';
import { getImageurl } from '../../utils';
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
     
      <div className={styles.menu}> 
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={
            isMenuActive
            ?getImageurl("nav/closeicon.png")
            :getImageurl("nav/menuicon.png")} alt="" />
        </button>
        <ul className={`${styles.menuItems} ${isMenuActive ? styles.active : ''}`}>
          <li><a href="/about">About</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
