import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className={styles.cardScreen}>
      <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='products' />
      <div className={styles.cardInfo}>
        <p className={styles.cardInfoName}> Product 1</p>
        <p className={styles.cardInfoDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nisi nulla cupiditate velit quis quod dolor sint ea. Repudiandae totam harum ipsam aliquid eligendi molestias rem aliquam ratione veniam deserunt?
        </p>
        <p className={styles.CardInfoPrice}>$199.99</p>
        <Link to={`/product/${1111}`} className={styles.cardInfoButton}>View</Link>
      </div>

    </div>

  );
}

export default Card;
