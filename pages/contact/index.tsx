import styles from "@scss/index.module.scss";
import ContactUs from "@containers/contact/ContactUs";

function Contact(): JSX.Element {
  return (
    <div className={styles.contact__container}>
      <ContactUs />
    </div>
  );
}

export default Contact;
