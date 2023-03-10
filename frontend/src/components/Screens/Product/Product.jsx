import React from 'react';
import styles from './Product.module.css'

const Product = () => {
  return (
    <div className={styles.productScreen}>
      <div className={styles.productScreenLeft}>
        <div className={styles.leftImage}>
          <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='products' />
        </div>
        <div className={styles.leftInfo}>
          <p className={styles.leftName}>Product 1</p>
          <p>Price: $499.99</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit optio, eius dolorem placeat ad repellendus?  </p>
        </div>
      </div>
      <div className={styles.productScreenRight}>
        <div className={styles.rightInfo}>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Quantity: <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type='button'>add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
