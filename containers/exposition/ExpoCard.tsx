import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "@components/Card";
import styles from "@scss/index.module.scss";

interface IProps {
  imageSrc: string;
  title: string;
  desc?: string;
  link?: string;
}

const expoCard: React.FC<IProps> = (props) => {
  const { push } = useRouter();
  return (
    <Card
      onClick={() => push(props.link || "")}
      className={styles["exposition__card"]}
    >
      <div className={styles["exposition__image"]}>
        <Image src={props.imageSrc} layout="fill" alt="css" />
      </div>
      <h2 className={styles["exposition__card__title"]}>{props.title}</h2>
      <p> {props.desc || ""} </p>
    </Card>
  );
};

export default expoCard;
