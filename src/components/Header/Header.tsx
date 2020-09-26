import React from 'react';
import Input from '../Input/Input';
import styles from './Header.module.css';

export default function () {
  return (
    <div className={styles.header}>
      <Input type="search" />
      <Input type="date" />
    </div>
  );
}
