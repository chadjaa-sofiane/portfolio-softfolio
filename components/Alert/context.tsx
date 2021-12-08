import { createContext, useState } from "react";
import Alert from ".";

type TAlert = "success" | "error";

type TSetMessage = (message: string, type?: TAlert) => void;

interface IAlertMessage {
  type: TAlert;
  message: string;
  open: boolean;
}

interface IContext {
  closeAlert?: () => void;
  setMessage?: TSetMessage;
  alertMessage?: IAlertMessage;
}

export const Context = createContext<IContext>({});

const ContextProvider = props => {
  const [alertMessage, setAlertMessage] = useState<IAlertMessage>({
    type: "success",
    message: "",
    open: false,
  });
  const closeAlert = () => {
    setAlertMessage((p) => ({ ...p, open: false }));
  };
  const setMessage: TSetMessage = (message, type = "success") => {
    setAlertMessage({ open: true, message, type });
  };

  return (
    <Context.Provider
      value={{
        closeAlert,
        alertMessage,
        setMessage,
      }}
    >
      <Alert />
      {props.children}
    </Context.Provider>
  );
};



export default ContextProvider;
