import {
  Component,
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
} from "react";
import styles from "@scss/index.module.scss";

let ID = 0;
const increaseId = () => (ID += 1);

export type ActiveValue = string | number;

interface ITabsProps {
  name: string;
  value?: ActiveValue;
  onChange?: (activeValue: ActiveValue) => void;
}

interface ITabProps {
  active?: boolean;
  value: ActiveValue;
}

interface ITabsContext {
  name: string;
  value?: ActiveValue;
  onChange?: (activeValue: ActiveValue) => void;
}

const TabsContext = createContext<ITabsContext>({ name: "" });

class Tabs extends Component<ITabsProps> {
  constructor(props: ITabsProps) {
    super(props);
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const activeValue = e.target.value;
    this.props.onChange(activeValue);
  };
  render() {
    return (
      <TabsContext.Provider
        value={{
          name: this.props.name,
          value: this.props.value || "",
          onChange: this.props.onChange,
        }}
      >
        <div className={styles["tabs"]} onChange={this.handleChange}>
          {this.props.children}
        </div>
      </TabsContext.Provider>
    );
  }
}


export const Tab: FC<ITabProps> = (props) => {
  const id = useRef<string>("");

  const context = useContext(TabsContext);
  const active = props.active || context.value === props.value || false;

  useEffect(() => {
    if (active && context.onChange) {
      context.onChange(props.value);
    }
    id.current = `${context.name}-${increaseId()}`;
  }, []);

  return (
    <>
      <input
        name={context.name}
        defaultChecked={active}
        type="radio"
        value={props.value}
        id={id.current}
        hidden={true}
      />
      <label htmlFor={id.current} className={styles["tabs__tab"]}>
        {props.children}
      </label>
    </>
  );
};

export default Tabs;
