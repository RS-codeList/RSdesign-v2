const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const gmailDestination = functions.config().gmail.destination;
const mailTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendMail = functions.https.onCall((data:any, context:any) => {
  const email = {
    from: gmailEmail,
    to: gmailDestination,
    subject: "お問い合わせ",
    text:
      "お名前:" +
      data.form.name.contents +
      "\n" +
      "Email:" +
      data.form.email.contents +
      "\n" +
      "お問い合わせ内容:" +
      data.form.message.contents,
  };
  mailTransport.sendMail(email, (err:any, info:any) => {
    if (err) {
      return console.log(err);
    }
    return console.log("success");
  });
});
