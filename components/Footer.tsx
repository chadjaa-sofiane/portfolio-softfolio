import styles from "@scss/index.module.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__socialMediaLinks"]}>
        <div className={styles["footer__iconField"]}>
          <FacebookIcon fontSize="large" />
          <p className={styles["footer__iconField__name"]}>Facebook</p>
        </div>
        <div className={styles["footer__iconField"]}>
          <WhatsAppIcon fontSize="large" />
          <p className={styles["footer__iconField__name"]}>WhatsApp</p>
        </div>
        <div className={styles["footer__iconField"]}>
          <TelegramIcon fontSize="large" />
          <p className={styles["footer__iconField__name"]}>Telegram</p>
        </div>
        <div className={styles["footer__iconField"]}>
          <InstagramIcon fontSize="large" />
          <p className={styles["footer__iconField__name"]}>Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
