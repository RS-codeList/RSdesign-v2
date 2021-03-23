const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const gmailDestination = functions.config().gmail.destination;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// 管理者用のメールテンプレート
const adminContents = (data:any) => {
    return `以下内容でホームページよりお問い合わせを受けました。
    \nお名前：\n${data.form.name.contents}
    \nメールアドレス：\n${data.form.email.contents}
    \nお問い合わせ内容：\n${data.form.message.contents}
    `;
};

exports.sendMail = functions.https.onCall((data:any, context:any) => {
  const email = {
    from: gmailEmail,
    to: gmailDestination,
    subject: "ホームページよりお問い合わせ",
    text: adminContents(data),
  };
  mailTransport.sendMail(email, (err:any, info:any) => {
    if (err) {
      return console.log(err);
    }
    return console.log("success");
  });
    return email;
});
