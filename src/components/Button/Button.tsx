import React, { SyntheticEvent } from "react";
import styles from "./Button.module.css";

export default function ({
  text,
  onClick,
}: {
  text: string;
  onClick: (e: SyntheticEvent) => void;
}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
