import ServicesInfoLayout from "./ServicesInfoLayout";
import { ProgressBarField, ProgressBar } from "@components/ProgressBarField";
import { Card } from "@components/Card";
import styles from "@scss/index.module.scss";

const FrontEnd: React.FC = () => {
  return (
    <ServicesInfoLayout title="fron end">
      <Card className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
          <p>
            a set of random skills bars that I find theme cool in a lot of
            porftfolios around the internet, they don't mean anything . I can't
            even know how they calculate something like that
          </p>
        </div>
        <div className={styles["servicInfo__progressBar"]}>
          <ProgressBarField defaultValue={{ html: 50, css: 40, js: 80 }}>
            <ProgressBar name="html" />
            <ProgressBar name="css" />
            <ProgressBar name="js" color="none" />
          </ProgressBarField>
        </div>
      </Card>
    </ServicesInfoLayout>
  );
};

export default FrontEnd;
