import nodemailer from "nodemailer";

interface ISendEmailI {
  body: string;
  subject: string;
  text: string;
  html: string;
  to: string;
}

const sendEmail = async ({ body, ...restEmailAttr }: ISendEmailI) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || testAccount.user,
      pass: process.env.EMAIL_PASS || testAccount.pass,
    },
  });

  const mailData = {
    ...restEmailAttr,
    from: "sotffolio softfolio@chadjaasoftfolio.com",
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};

export default sendEmail;
