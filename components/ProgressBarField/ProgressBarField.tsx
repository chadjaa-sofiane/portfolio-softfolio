import { useEffect, useState } from "react";
import { ProgressBarFieldContext } from "./context";
import { IProgressBarFieldProps, IProgressBarFieldState } from "./types";

const ProgressBarField: React.FC<IProgressBarFieldProps> = (props) => {
  const [state, setState] = useState<IProgressBarFieldState>({ values: {} });

  useEffect(() => {
    setState({ values: props.defaultValue });
  }, [props]);

  return (
    <ProgressBarFieldContext.Provider value={{ values: state.values }}>
      {props.children}
    </ProgressBarFieldContext.Provider>
  );
};

export default ProgressBarField;
