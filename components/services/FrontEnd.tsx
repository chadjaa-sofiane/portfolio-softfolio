import Image from "next/image";
import ServicesInfoLayout from "./ServicesInfoLayout";
import styles from "@scss/index.module.scss";

const FrontEnd: React.FC = () => {
  return (
    <ServicesInfoLayout title="fron end">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
          <h2 className={styles["serviceInfo__title"]}>Front End</h2>
          <p>
            I&apos;m a front developer, I can handle and build large and
            responsive web applications using html, css and js.
          </p>
          <p>my main library and framework I use are react js and Nextjs.</p>
        </div>
        <div className={styles["serviceInfo__imageField"]}>
          <Image
            src="/images/web.jpg"
            alt="fron end developement"
            layout="fill"
          />
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default FrontEnd;
