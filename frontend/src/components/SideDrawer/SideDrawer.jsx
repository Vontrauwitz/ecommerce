import React from 'react';
import styles from './SideDrawer.module.css'

const SideDrawer = ({ show }) => {
  const sideDrawerClass = ["sideDrawer"]

  return show && <div className={styles.sideDrawer}></div>
}

export default SideDrawer;
