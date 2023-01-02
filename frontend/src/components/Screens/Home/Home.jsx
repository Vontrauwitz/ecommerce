import React from 'react';
import Card from '../../Card/Card';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeScreen}>
      <h2 className={styles.homeScreenTitle}>Latest Products</h2>
      <div className={styles.homeScreenProducts} >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default Home;
