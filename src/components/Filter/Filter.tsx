import React from 'react';
import Input from '../Input/Input';
import styles from './Filter.module.css';

export default function () {
  return (
    <div className={styles.header}>
      <Input type="date" />
      <Input type="search" />
    </div>
  );
}
