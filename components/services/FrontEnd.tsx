import ServicesInfoLayout from "./ServicesInfoLayout";
import { ProgressBarField, ProgressBar } from "@components/ProgressBarField";
import styles from "@scss/index.module.scss";

const FrontEnd: React.FC = () => {
  return (
    <ServicesInfoLayout title="fron end">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
          <p>
            I start learning front end development 3 years ago, just before some
            months I could call myself a real front end developer, it is not as
            easy as I taught the first time I went through this world,but I
            could reach my gool in the last, next to this there are some random
            bars that they don't mean anything, but I find them cool around the
            portfolio in the internet
          </p>
        </div>
        <div className={styles["servicInfo__progressBar"]}>
          <ProgressBarField defaultValue={{ html: 50, css: 40, js: 80 }}>
            <ProgressBar name="html" color="primary" />
            <ProgressBar name="css" color="primary" />
            <ProgressBar name="js" color="none" />
          </ProgressBarField>
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default FrontEnd;
