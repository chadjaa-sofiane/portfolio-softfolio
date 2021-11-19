import { Form, Field } from "@components/Form";
import { OnSubmit } from "@components/Form/types";
import { required, isEmail } from "@components/Form/validations";
import styles from "@scss/index.module.scss";
import Image from "next/image";
import React from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const submit: OnSubmit = async (values) => {
  await wait(2000);
  const name = values.name;
  if (name === "chadjaa sofianne") {
    return {
      success: true,
    };
  }
  return {
    success: false,
    errors: {
      name: ["your name is awfall , come back after change it"],
    },
  };
};

const ContactUs: React.FC = (props) => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUs__desc}>
        <h1>Contact Me </h1>
        <Image
          className={styles.contactUs__desc__img}
          src="/images/zepli.jpg"
          width="300"
          height="300"
          alt="image"
        />
        <p className={styles.contactUs__desc__text}>
          sofiane is king the world
        </p>
      </div>
      <Form
        defaultValues={initialState}
        validationRules={{
          name: { validator: required },
          email: [{ validator: required }, { validator: isEmail }],
          subject: { validator: required },
        }}
        onSubmit={submit}
      >
        <Field name="name" label="full name :" />
        <Field name="email" label="email :" />
        <Field name="subject" label="subject :" />
        <Field type="textArea" name="message" label="message :" rows={2} />
      </Form>
    </div>
  );
};

export default ContactUs;
