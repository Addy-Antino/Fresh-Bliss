const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
      user: 'freshblissofficials@gmail.com',
      pass: 'etqsftaqhmcxxurl',
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
