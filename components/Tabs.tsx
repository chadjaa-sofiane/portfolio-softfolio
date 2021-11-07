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
        <div className={styles.Tabs} onChange={this.handleChange}>
          {this.props.children}
        </div>
      </TabsContext.Provider>
    );
  }
}

// export const Tabs = ({ children, value = 0, onChange = () => {} }) => {
//   const [name, setName] = useState("");
//   if (children) {
//     if (Array.isArray(children)) {
//       children = children.filter((e) => e.type.name === "Tab");
//       children = children.map((e, index) => ({
//         ...e,
//         props: {
//           ...e["props"],
//           name,
//           id: `${name}-id-${index}`,
//           active: e.props.value === value,
//         },
//       }));
//     } else {
//       if (children.type.name !== "Tab") return children;
//       children.props = { ...children["props"], name };
//     }
//   }
//   useEffect(() => {
//     setName(_uniqueName());
//   }, []);
//   return (
//     <div className={styles.Tabs} onChange={onChange}>
//       {children}
//     </div>
//   );
// };

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
      <label htmlFor={id.current} className={styles.Tabs__Tab}>
        {props.children}
      </label>
    </>
  );
};

export default Tabs;
