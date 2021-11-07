import React, { Component, createContext, useContext, useRef } from "react";
import styles from "@scss/index.module.scss";

type Values = {
  [key: string]: any;
};
type Errors = {
  [key: string]: string[];
};

export type Validator = (field: string, values: Values, args?: any) => string;

interface validation {
  validator: Validator;
  args?: any;
}

interface IvalidationRulesProp {
  [key: string]: validation | validation[];
}

interface ISubmitResult {
  success: boolean;
  errors?: Errors;
}

export type OnSubmit = (values: Values) => Promise<ISubmitResult>;

const FormContext = createContext<IFormContext>({});

interface IProps {
  defaultValues: Values;
  validationRules: IvalidationRulesProp;
  onSubmit?: OnSubmit;
}

interface IState {
  values: Values;
  errors: Errors;
  submited: boolean;
  submitting: boolean;
}

interface IFieldProps {
  name: string;
  type?: "text" | "email" | "textArea" | "select";
  label: string;
  options?: string[];
  rows?: number;
}

interface IFormContext {
  values?: Values;
  errors?: Errors;
  setValue?: (field: string, value: any) => void;
  validate?: (field) => void;
}

export const required: Validator = (fieldName, values): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? `${fieldName} must be populated`
    : "";

export const isEmail: Validator = (filedName, values) =>
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(
    values[filedName]
  )
    ? ""
    : `${filedName} most be a valid email !`;

class Form extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      submited: false,
      submitting: false,
    };
  }
  componentDidMount() {
    this.setState({ values: this.props.defaultValues });
  }

  private setValue = (field: string, value: any) => {
    this.setState((p) => ({ values: { ...p.values, [field]: value } }));
  };

  private validate = (field: string): string[] => {
    let errors: string[] = [];

    const rules = this.props.validationRules[field];

    if (Array.isArray(rules)) {
      rules?.forEach((rule) => {
        const error = rule.validator(field, this.state.values, rule.args);
        if (error) errors.push(error);
      });
    } else {
      const error = rules?.validator(field, this.state.values, rules.args);
      if (error) errors.push(error);
    }
    const newErrors = { ...this.state.errors, [field]: errors };
    this.setState({ errors: newErrors });
    return errors;
  };

  private ValidateForm = (): boolean => {
    let haveErrors = false;
    const errors: Errors = {};
    Object.keys(this.props.defaultValues).forEach((fieldName) => {
      errors[fieldName] = this.validate(fieldName);
      if (errors[fieldName].length > 0) haveErrors = true;
    });
    this.setState({ errors });
    return !haveErrors;
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.props.onSubmit) return;
    if (this.ValidateForm()) {
      this.setState({ submitting: true });
      const result = await this.props.onSubmit(this.state.values);
      this.setState({
        errors: result.errors,
        submited: result.success,
        submitting: false,
      });
    }
  };

  render() {
    return (
      <FormContext.Provider
        value={{
          values: this.state.values,
          errors: this.state.errors,
          setValue: this.setValue,
          validate: this.validate,
        }}
      >
        <form className={styles.form} onSubmit={this.handleSubmit}>
          {this.props.children}
          <div className={styles.form__buttons__field}>
            <button
              className={`${styles.button}`}
              disabled={this.state.submited || this.state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}

type FieldInputType =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export const Field: React.FC<IFieldProps> = (props) => {
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

export default Form;
