import React from 'react';
import CartItem from '../../CartItem/CartItem';
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.cartScreen}>
      <div className={styles.cartScreenLeft}>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

      </div>
      <div className={styles.cartScreenRight}>
        <div className={styles.cartScreenInfo}>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
