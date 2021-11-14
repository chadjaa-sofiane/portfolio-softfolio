import { createContext } from "react";
import { Errors, Values } from "./types";

interface IFormContext {
  values?: Values;
  errors?: Errors;
  setValue?: (field: string, value: any) => void;
  validate?: (field) => void;
}

export const FormContext = createContext<IFormContext>({});
