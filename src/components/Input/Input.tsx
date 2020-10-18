import React, { SyntheticEvent } from "react";
import styles from "./Input.module.css";

interface Input {
  type?: string;
  className?: string;
  onChange: (e: SyntheticEvent) => void;
  correct?: boolean;
  value?: string;
}

function Input(props: Input) {
  const {
    type = "text",
    className = "",
    onChange,
    correct = true,
    value = "",
  } = props;
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

export default React.memo(Input);
