import { useContext } from "react";
import { FormContext } from "./context";
import { FieldInputType, IFieldProps } from "./types";
import styles from "@scss/index.module.scss";

const Field: React.FC<IFieldProps> = (props) => {
  const { name, type = "text", options = [], rows = 1 } = props;

  const context = useContext(FormContext);

  const error = context?.errors[name]?.length > 0;

  const handleChange = (e: React.ChangeEvent<FieldInputType>) => {
    if (context.setValue) {
      context.setValue(name, e.currentTarget.value);
    }
  };
  const handleBlur = () => {
    if (context.validate) {
      context.validate(name);
    }
  };

  return (
    <div className={styles.form__field}>
      <label className={styles.form__label} htmlFor={name}>
        {props.label}
      </label>
      {(type === "text" || type === "email") && (
        <input
          className={`${styles.form__input} ${
            error ? styles["form__input--error"] : ""
          }`}
          type={type}
          id={name}
          value={context.values[name] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {type === "textArea" && (
        <textarea
          className={`${styles.form__input} ${
            error ? styles["form__input--error"] : ""
          }`}
          id={name}
          value={context.values[name] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={rows}
        ></textarea>
      )}
      {type === "select" && (
        <select
          id={name}
          value={context.values[name] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {error && (
        <div
          data-testid="input-errors"
          className={styles.form__errors__container}
        >
          {context?.errors[name]?.map((error, index) => (
            <span key={index} className={styles.form__error}>
              {error}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Field;
