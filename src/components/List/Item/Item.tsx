import React from "react";
import Button from "../../Button/Button";
import styles from "./Item.module.css";

import { IItem } from "../../../pages/App.types";

export interface IBase {
  data: IItem;
  onPerform: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Item(props: IBase) {
  const {
    data: { id, text, date, complete },
    onPerform,
    onDelete,
  } = props;

  const itemClassName = complete
    ? `${styles.item} ${styles.complete}`
    : styles.item;

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return (
    <li className={itemClassName}>
      <div className={styles.date}>
        {new Date(Number(date)).toLocaleDateString("en-US", options)}
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
