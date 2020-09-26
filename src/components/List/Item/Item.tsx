import React from 'react';
import Button from '../../Button';
import styles from './Item.module.css';

import { ItemInterface } from '../../../pages/App';

export interface Base {
  data: ItemInterface;
  onPerform: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Item(props: Base) {
  const {
    data: { id, text, date, complete },
    onPerform,
    onDelete,
  } = props;

  const itemClassName = complete
    ? `${styles.item} ${styles.complete}`
    : styles.item;

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return (
    <li className={itemClassName}>
      <div className={styles.date}>
        {new Date(date).toLocaleDateString('en-US', options)}
      </div>
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
