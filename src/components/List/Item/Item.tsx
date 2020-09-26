import React from 'react';
import Button from '../../Button';
import styles from './Item.module.css';

import { ItemInterface } from '../../../pages/App';

export interface Base {
  data: ItemInterface;
  onPerform: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ({
  data: { text, id, complete },
  onPerform,
  onDelete,
}: Base) {
  const itemClassName = complete
    ? `${styles.item} ${styles.complete}`
    : styles.item;
  return (
    <li className={itemClassName}>
      <div className={styles.text}>{text}</div>
      <Button
        text="res"
        onClick={() => {
          onPerform(id);
        }}
      />
      <Button
        text="del"
        onClick={() => {
          onDelete(id);
        }}
      />
    </li>
  );
}
