import ServicesInfoLayout from "./ServicesInfoLayout";
import { ProgressBarField, ProgressBar } from "@components/ProgressBarField";
import styles from "@scss/index.module.scss";

const BackEnd: React.FC = () => {
  return (
    <ServicesInfoLayout title="Back End">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
          <p>
            I started learning back-end with PHP, I had different imaginations
            about web in that time, but that is changed after meeting node js.
            PHP still a great programing language and has great frameworks, but
            I didn't knew that earlier, maybe I don't have the same knowledge in
            back-end as I know in front , but I learned what I need, and when
            will come to the real world project I it will start showing my
            skills, as before some random bars.
          </p>
        </div>
        <div className={styles["servicInfo__progressBar"]}>
          <ProgressBarField
            defaultValue={{ express: 100, mongodb: 50, redis: 40, nest: 20 }}
          >
            <ProgressBar name="mongodb" />
            <ProgressBar name="express" />
            <ProgressBar name="redis" />
            <ProgressBar name="nest" />
          </ProgressBarField>
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default BackEnd;
