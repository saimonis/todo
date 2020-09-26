import React from 'react';
import styles from './Button.module.css';

export default function ({ text = '' }) {
  return <button className={styles.btn}>{text}</button>;
}
