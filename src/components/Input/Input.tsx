import React from 'react';
import styles from './Input.module.css';

interface Input {
  type?: string;
  className?: string;
  onChange: (e: any) => void;
  correct?: boolean;
  value?: string;
}

export default function Input({
  type = 'text',
  className = '',
  onChange,
  correct = true,
  value = '',
}: Input) {
  const newClassName = correct ? className : `${className} ${styles.incorrect}`;
  return (
    <>
      <input
        type={type}
        className={newClassName}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
