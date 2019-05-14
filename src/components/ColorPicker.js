import React from 'react';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const redButton = () => {
    console.log('red');
  };
  const yellowButton = () => {
    console.log('yellow');
  };
  const blueButton = () => {
    console.log('blue');
  };

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={redButton}>RED</button>
      <button className={styles.yellow} onClick={yellowButton}>YELLOW</button>
      <button className={styles.blue} onClick={blueButton}>BLUE</button>
    </section>
  );
}
