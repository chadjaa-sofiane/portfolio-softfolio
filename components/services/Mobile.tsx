import Image from "next/image"
import ServicesInfoLayout from "./ServicesInfoLayout";
import styles from "@scss/index.module.scss";

const Mobile: React.FC = () => {
  return (
    <ServicesInfoLayout title="Mobile">
      <div className={styles["serviceInfo__container"]}>
        <div className={styles["serviceInfo__description"]}>
        <h2 className={styles["serviceInfo__title"]}>Mobile</h2>
          <p> like anyone who is a react developer, my main technologie for building mobile apps is react native. </p>
          <p> I have knowledge in it as I have in react, and I can build full app using it. </p>
        </div>
        <div className={styles["serviceInfo__imageField"]}>
          <Image src="/images/phone.jpg" alt="phone developement" fill/>
        </div>
      </div>
    </ServicesInfoLayout>
  );
};

export default Mobile;
