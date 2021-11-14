import React, { useContext, useMemo } from "react";
import { ProgressBarFieldContext } from "./context";
import { IProgressBarProps } from "./types";
import styles from "@scss/index.module.scss";

const ProgressBar: React.FC<IProgressBarProps> = (props) => {
  const context = useContext(ProgressBarFieldContext);

  const percentage = useMemo(() => {
    let value = context.values[props.name];
    if (value > 100) value = 100;
    if (value < 0) value = 0;
    return value;
  }, [context.values]);

  const color = useMemo(() => {
    if (props.color) return props.color;
    if (percentage === 0) return "none";
    if (percentage < 50) return "secondary";
    if (percentage >= 50) return "primary";
  }, [percentage, props.color]);

  return (
    <div
      className={`${styles[`progressBar--${color}`]} ${
        styles["progressBar__container"]
      }`}
    >
      <div className={styles["progressBar__title"]}>{props.name}</div>
      <div className={styles["progressBar__background"]}>
        <span
          style={{ width: `${percentage}%` }}
          className={styles["progressBar__progress"]}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
