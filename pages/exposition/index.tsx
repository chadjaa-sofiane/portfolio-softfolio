import ExpoCard from "@containers/exposition/ExpoCard";
import styles from "@scss/index.module.scss";

const Exposition = () => {
  return (
    <div className={styles["exposition__container"]}>
      <ExpoCard
        imageSrc="/images/exposition/css.png"
        title="Css Exposition"
        desc="here when I show my skills at pure css "
        link="/exposition/css"
      />
    </div>
  );
};

export default Exposition;
