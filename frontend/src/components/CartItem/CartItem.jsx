import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.css'

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='product name' />
      </div>
      <Link to={`/product/${111}`} className={styles.cartItemName}>
        <p>Product 1</p>
      </Link>
      <p className={styles.cartItemPrice}>$499.99</p>

      <select className={styles.cartItemSelect}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>

      <button className={styles.cartItemDeleteBtn}>
        <i className='fas fa-trash'></i>
      </button>
    </div >
  );
}

export default CartItem;
