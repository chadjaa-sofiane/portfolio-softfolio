import styles from "@scss/index.module.scss";
import { ChangeEventHandler, FC, useRef } from "react";

interface textFieldProps {
  label?: string;
  multiline?: boolean;
  rows?: number;
  name?: string;
  value: string | number | readonly string[];
  textHelper?: JSX.Element | string;
  error?: boolean;
  onChange?: ChangeEventHandler;
}

const textField: FC<textFieldProps> = ({
  label,
  multiline,
  rows = 1,
  name = null,
  value = "",
  textHelper = "",
  error = false,
  onChange = () => {},
}) => {
  const rowsNumber = useRef(rows);
  const props = { name, value, onChange };
  function flexibleLiens(e) {
    if (e.keyCode === 13) rowsNumber.current += 1;
    if (e.keyCode === 8) rowsNumber.current = e.target.value.split("\n").length;
    e.target.rows = rowsNumber.current;
  }
  const classes = `${error && styles["inputText--error"]} ${styles.inputText}`;
  return (
    <label>
      {label && <h3>{label}</h3>}
      {!multiline ? (
        <input type="text" className={classes} {...props} />
      ) : (
        <textarea
          onKeyDown={flexibleLiens}
          onBlur={flexibleLiens}
          className={classes}
          rows={rows}
          {...props}
        />
      )}
      {textHelper}
    </label>
  );
};

export default textField;
function ussRef(arg0: null) {
  throw new Error("Function not implemented.");
}
