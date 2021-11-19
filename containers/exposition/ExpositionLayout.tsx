import { useRouter } from "next/router";
import BackArrow from "@material-ui/icons/ArrowBack";
import styles from "@scss/index.module.scss";

interface IProps {
  title: string;
}

const ExpositionLayout: React.FC<IProps> = (props) => {
  const { push } = useRouter();
  return (
    <div>
      <div className={styles["exposition__header"]}>
        <button className={styles["exposition__header__backBtn"]} onClick={() => push("/exposition")}>
          <BackArrow onClick={() => push("/exposition")} fontSize="large" />
        </button>
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default ExpositionLayout;
