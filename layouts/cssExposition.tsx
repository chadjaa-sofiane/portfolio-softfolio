import Link from "next/link";
import BackArrow from "@material-ui/icons/ArrowBack";
import styles from "@scss/index.module.scss";

const cssExpositionLayout = (page) => (
  <>
    <div className={styles["cssExposition__back_btn"]}>
      <Link href="/exposition/css">
        <BackArrow fontSize="large" />
      </Link>
    </div>
    {page}
  </>
);

export default cssExpositionLayout;
