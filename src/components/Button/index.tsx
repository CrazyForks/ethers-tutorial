import React, { type ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props): ReactNode {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
