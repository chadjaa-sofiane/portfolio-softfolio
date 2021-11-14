type Values = {
  [key: string]: number;
};

export interface IProgressBarFieldProps {
  defaultValue: Values;
}

export interface IProgressBarFieldState {
  values: Values;
}

export interface IProgressBarProps {
  name: string;
  color?: "primary" | "secondary" | "none";
}
