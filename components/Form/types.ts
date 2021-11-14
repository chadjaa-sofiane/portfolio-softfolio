export type Values = {
  [key: string]: any;
};
export type Errors = {
  [key: string]: string[];
};

export type Validator = (field: string, values: Values, args?: any) => string;

export interface validation {
  validator: Validator;
  args?: any;
}

export interface IvalidationRulesProp {
  [key: string]: validation | validation[];
}

export interface ISubmitResult {
  success: boolean;
  errors?: Errors;
}

export type OnSubmit = (values: Values) => Promise<ISubmitResult>;

export interface IFormProps {
  defaultValues: Values;
  validationRules: IvalidationRulesProp;
  onSubmit?: OnSubmit;
}

export interface IFormState {
  values: Values;
  errors: Errors;
  submited: boolean;
  submitting: boolean;
}

export interface IFieldProps {
  name: string;
  type?: "text" | "email" | "textArea" | "select";
  label: string;
  options?: string[];
  rows?: number;
}

export interface IFormContext {
  values?: Values;
  errors?: Errors;
  setValue?: (field: string, value: any) => void;
  validate?: (field) => void;
}

export type FieldInputType =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
