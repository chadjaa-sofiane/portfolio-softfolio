import  Image  from "next/image"
import styles from "@scss/index.module.scss"

const Introduction = () => {
  return (
    <div className={styles.body__description}>
      <div className={styles.aboutMe}>
        <h1>
          My name is
          <span className={styles.myName}> chadjaa sofiane </span>
        </h1>
        <h2>
          I'am a <span className={styles.myJob}> full-stack </span>
          developer
        </h2>
        <p className={styles.descriptionText}>
          Welcome in my portfolio, here where I can display all my services and
          experience.
        </p>
        <div className={styles.buttonGroupe}>
          <button className={styles.button}>
            <a href="#services">My services</a>
          </button>
          <button className={styles.button}>
            the libraries I've worked with
          </button>
          <button className={styles.button}>my skils</button>
        </div>
      </div>
      <div className={styles.pecture__wrapper}>
        <div className={styles.pecture__container}>
          <Image src="/images/zepli.jpg" layout="fill" />
          sof
        </div>
      </div>
    </div>
  );
};

export default Introduction;