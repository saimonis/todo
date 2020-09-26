import React from 'react';
import styles from './Button.module.css';

export default function ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
