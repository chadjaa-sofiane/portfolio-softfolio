import ReactDOMServer from "react-dom/server";
import nodemailer from "nodemailer";

// I think I don't have to change "from" every time , so I will make it static

interface sendEmailI {
  body: JSX.Element;
  subject: string;
  text: string;
  from: string;
  to: string;
}

const sendEmail = async ({ body, ...restEmailAttr }: sendEmailI) => {
  const html = ReactDOMServer.renderToString(body);
  console.log(html);
  
  /* let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER || testAccount.user,
      pass: process.env.PASS || testAccount.pass,
    },
  });

  //  I wrapped the sendMail inside a trycatch , change it if you think is there a better method to display the errors
  try {
    await transporter.sendMail({
      ...restEmailAttr,
      html,
    });
  } catch (e) {
    console.error(e);
  } */
};

export default sendEmail;
