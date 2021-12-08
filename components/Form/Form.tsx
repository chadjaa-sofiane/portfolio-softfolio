import React, { Component } from "react";
import styles from "@scss/index.module.scss";
import { Errors, IFormProps, IFormState } from "./types";
import { FormContext } from "./context";

class Form extends Component<IFormProps, IFormState> {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
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

  private clear = () => {
    this.setState({
      values: {},
      errors: {},
      submitting: false,
    });
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.props.onSubmit) return;
    if (this.ValidateForm()) {
      this.setState({ submitting: true });
      const result = await this.props.onSubmit(this.state.values, () =>
        this.clear()
      );
      this.setState({
        errors: result.errors || {},
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
        <form className={styles["form"]} onSubmit={this.handleSubmit}>
          {this.props.children}
          <div className={styles["form__buttons__field"]}>
            <button
              className={`${styles["button"]}`}
              disabled={this.state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}

export default Form;
