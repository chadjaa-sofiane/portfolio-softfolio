import { CSSTransition } from "react-transition-group";
import styles from "@scss/index.module.scss";

interface IPropsTransitionCard {
  service: string;
}

const TransitionCard: React.FC<IPropsTransitionCard> = (props) => {
  return (
    <CSSTransition
      timeout={500}
      key={props.service}
      classNames={{
        enter: styles["services__transition--enter"],
        enterActive: styles["services__transition--enter-active"],
        exit: styles["services__transition--exit"],
        exitActive: styles["services__transition--exit-active"],
      }}
    >
      {props.children}
    </CSSTransition>
  );
};

export default TransitionCard;
