import ServicesInfoLayout from "./ServicesInfoLayout";
import { ProgressBarField, ProgressBar } from "@components/ProgressBarField";
import styles from "@scss/index.module.scss";

const Mobile: React.FC = () => {
  return (
    <ServicesInfoLayout title="Mobile">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
          <p>
            my career as a mobile developmenet start very early , as any react
            developement , I chosed to start build mobile applications with
            react-native , and I have a lot to dive in it.
          </p>
          <br />
          <p>
            we have empty bar this time, I realy can't call about mySelf a
            mobile developement yet.
          </p>
        </div>
        <div className={styles["servicInfo__progressBar"]}>
          <ProgressBarField defaultValue={{ reactNative: 0 }}>
            <ProgressBar name="reactNative" />
          </ProgressBarField>
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default Mobile;
