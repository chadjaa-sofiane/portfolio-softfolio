import { useContext, useEffect } from "react";
import { Context } from "./context";
import styles from "@scss/index.module.scss";

const Alert = () => {
  const { closeAlert, alertMessage } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      closeAlert();
    }, 4000);
  }, [alertMessage.message]);

  return (
    <div
      className={`${styles[`alert`]} ${styles[alertMessage.type]} ${
        alertMessage.open ? styles["alert--open"] : ""
      }`}
    >
      {alertMessage.message}
    </div>
  );
};

export const useAlert = () => {
  const { setMessage } = useContext(Context);
  return setMessage;
};

export default Alert;
