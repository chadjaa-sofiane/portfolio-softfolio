import { useRef, useState } from "react";
import TextField from "@components/TextField";
import styles from "@scss/index.module.scss";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact(): JSX.Element {
  const [message, setMessage] = useState(initialState);
  const [errors, setErrors]: any = useState(initialState);
  const loading = useRef(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setMessage((p) => ({ ...p, [name]: value }));
  }
  async function sendMessage(e) {
    e.preventDefault();
    setErrors(initialState);
    loading.current = true;
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    console.log(data);

    if (data.errors) {
      setErrors((p) => ({ ...p, ...data.errors }));
    }
    loading.current = false;
  }
  return (
    <div className={styles.contact__container}>
      <h1 className={styles.contact__title}> contact us </h1>
      <form className={styles.contact__form__field}>
        <TextField
          name="name"
          value={message.name}
          onChange={handleChange}
          label="name"
          textHelper={
            errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>
          }
          error={Boolean(errors.name)}
        />
        <TextField
          name="email"
          value={message.email}
          onChange={handleChange}
          label="email"
          textHelper={
            errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>
          }
          error={Boolean(errors.email)}
        />

        <TextField
          value={message.subject}
          name="subject"
          onChange={handleChange}
          label="subject"
          textHelper={
            errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )
          }
          error={Boolean(errors.subject)}
        />
        <TextField
          value={message.message}
          name="message"
          onChange={handleChange}
          label="message"
          textHelper={
            errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )
          }
          error={Boolean(errors.message)}
          multiline
        />
        <div className={styles.contact__btn__field}>
          <button
            disabled={loading.current}
            className={styles.button}
            onClick={sendMessage}
          >
            <a href="#services">send</a>
          </button>
        </div>
      </form>
    </div>
  );
}

const ErrorMessage = ({ children }) => {
  return <p className={styles.contact__error__message}>{children}</p>;
};

export default Contact;
