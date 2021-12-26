import Image from "next/image";
import HomeBackground from "@public/svgs/home.svg";
import styles from "@scss/index.module.scss";

const Introduction = () => {
  return (
    <div className={styles["description"]}>
      <div className={styles["description__text"]}>
        <h1>
          My name is
          <span className={styles["primary"]}> chadjaa sofiane </span>
        </h1>
        <h2>
          I&apos; am a <span className={styles["secondary"]}> full-stack </span>
          developer.
        </h2>
        <p className={styles["description__text"]}>
          Welcome in my portfolio, here where I can display all my services and
          experience.
        </p>
        <div className={styles["buttonGroupe"]}>
          <button className={styles["button"]}>
            <a href="#services">My services</a>
          </button>
          <button className={styles["button"]}>my libraries</button>
          <button className={styles["button"]}>my skils</button>
        </div>
      </div>
      <div className={styles["illustrator__container"]}>
        {/* <Image src="/images/home.png" layout="fill" /> */}
        <HomeBackground className={styles["home__svgs"]} />
      </div>
    </div>
  );
};

export default Introduction;
