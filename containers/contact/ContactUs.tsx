import Image from "next/image";
import { Form, Field } from "@components/Form";
import { OnSubmit } from "@components/Form/types";
import { required, isEmail } from "@components/Form/validations";
import styles from "@scss/index.module.scss";
import React from "react";
import { useAlert } from "@components/Alert";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// const wait = async (ms: number): Promise<void> => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

const ContactUs: React.FC = (props) => {
  const Alert = useAlert();
  const submit: OnSubmit = async (values, clear) => {
    try {
      const result = await fetch("http://localhost:3000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!result.ok) {
        throw new Error("something wrong !!");
      }
      clear();
      Alert("message send successfully");
      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  };
  return (
    <div className={styles["contactUs"]}>
      <div className={styles["contactUs__desc"]}>
        <h2 className={styles["contactUs__title"]}> Contact me </h2>
        <div className={styles["contactUs__desc__imageField"]}>
          <Image src="/images/inbox.png" height="200" width="200" />
        </div>
        <div className={styles["contactUs__desc__info"]}>
          <p className={styles["contactUs__desc__text"]}>
            want to start building your world. contact me.
            <br /> let's build it together.
          </p>
          <p className={styles["contactUs__desc__email"]}>
            email :
            <a href="mailto:softfolio@chadjaasoftfolio.com" target="_blank">
              softfolio@chadjaasoftfolio.com
            </a>
          </p>
        </div>
      </div>
      <div className={styles["contactUs__form__wrapper"]}>
        <Form
          defaultValues={initialState}
          validationRules={{
            name: { validator: required },
            email: [{ validator: required }, { validator: isEmail }],
            subject: { validator: required },
            message: { validator: required },
          }}
          onSubmit={submit}
        >
          <Field name="name" label="Full Name :" />
          <Field name="email" label="Email :" />
          <Field name="subject" label="Subject :" />
          <Field type="textArea" name="message" label="Message :" rows={2} />
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
