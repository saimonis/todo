import React from 'react';
import Button from '../../Button';
import styles from './Item.module.css';

export default function () {
  return (
    <li className={styles.item}>
      <div className={styles.text}>todo_item</div>
      <Button text="res" />
      <Button text="del" />
    </li>
  );
}
