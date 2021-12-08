import AlertContext from "@components/Alert/context";

const ContextProvider = (props) => {
  return <AlertContext>{props.children}</AlertContext>;
};

export default ContextProvider;
