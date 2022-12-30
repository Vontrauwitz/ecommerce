import React from 'react';
import styles from './Product.module.css'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className={styles.productScreen}>
      <img src='' alt='' />
      <div className={styles.productInfo}>
        <p className={styles.infoName}> Product 1</p>
        <p className={styles.infoDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nisi nulla cupiditate velit quis quod dolor sint ea. Repudiandae totam harum ipsam aliquid eligendi molestias rem aliquam ratione veniam deserunt?
        </p>
        <p>$199.99</p>
        <Link to={`/product/${1111}`} className={styles.infoButton}>View</Link>
      </div>

    </div>
  );
}

export default Product;
