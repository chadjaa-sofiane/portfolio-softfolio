import { Values } from "@components/Form/types";
import { createContext } from "react";

interface IContext {
  values?: Values;
}

export const ProgressBarFieldContext = createContext<IContext>({});
