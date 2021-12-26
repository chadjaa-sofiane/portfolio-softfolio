import Image from "next/image";
import ServicesInfoLayout from "./ServicesInfoLayout";
import styles from "@scss/index.module.scss";

const BackEnd: React.FC = () => {
  return (
    <ServicesInfoLayout title="Back End">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
        <h2 className={styles["serviceInfo__title"]}>Back End</h2>
          <p>
            in order to be a full-stack developer, I had to learn backend
            technologies, and I choose node-js as my main language.
          </p>
          <p>I can build Rest and graphQL API .</p>
          <p>
            as will as I can use template engines like pug, ejs and handlebar to
            maintain server-side-rendering.
          </p>
        </div>
        <div className={styles["serviceInfo__imageField"]}>
          <Image
            src="/images/backend.jpg"
            alt="back end developement"
            layout="fill"
          />
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default BackEnd;
