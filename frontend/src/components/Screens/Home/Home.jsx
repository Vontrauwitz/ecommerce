import React from 'react';
import styles from './Home.module.css'
import Product from './../Product/Product';

const Home = () => {
  return (
    <div className={styles.homeScreen}>
      <h2 className={styles.homeScreenTitle}>Latest Products</h2>
      <div className={styles.homeScreenProducts} >
        <Product />
      </div>
    </div>
  );
}

export default Home;
