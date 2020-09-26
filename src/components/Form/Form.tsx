import React from 'react';
import Button from '../Button';
import Input from '../Input/Input';
import styles from './Form.module.css';

export default function () {
  return (
    <form>
      <div className={styles.container}>
        <Input className={styles['input-text']} />
        <Input type="date" />
        <Button text="Добавить" />
      </div>
    </form>
  );
}
