import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 &middot; Nick Eliason</p>
      <p>GitHub : <a href="https://github.com/neliason" target="_Blank">neliason</a></p>
    </div>
  );
}

export default Footer;
