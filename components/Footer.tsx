import styles from "@scss/index.module.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__iconField}>
          <FacebookIcon fontSize="large" style={{ color: "#4267B2" }} />
        </div>
        <div className={styles.footer__iconField}>
          <WhatsAppIcon fontSize="large" style={{ color: "#25D366" }} />
        </div>
        <div className={styles.footer__iconField}>
          <TelegramIcon fontSize="large" style={{ color: "#0088CC" }} />
        </div>
        <div className={styles.footer__iconField}>
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
