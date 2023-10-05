import { useMemo } from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { Card } from "@components/Card";
import styles from "@scss/index.module.scss";

interface IProps {
  name: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
}

const BlogCard: React.FC<IProps> = (props) => {
  const { push } = useRouter();

  const excerpt = useMemo(
    () =>
      props.excerpt.length > 100
        ? `${props.excerpt.slice(0, 60)} ...`
        : props.excerpt,
    [props.excerpt]
  );

  return (
    <Card className={styles["blog__card"]}>
      <div className={styles["blog__card__imageField"]}>
        {props.imageSrc && (
          <Image
            src={props.imageSrc}
            alt="something"
            layout="fill"
          />
        )}
      </div>
      <div className={styles["blog__card__content"]}>
        <h3 className={styles["blog__card__title"]}>{props.title}</h3>
        <p className={styles["blog__card__excerpt"]}> {excerpt} </p>
        <div className={styles["blog__card__btnField"]}>
          <button
            className={styles["button"]}
            onClick={() => push(`/blogs/${props.name}`)}
          >
            see more
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
