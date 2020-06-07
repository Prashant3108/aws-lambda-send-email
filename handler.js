var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'agarwal.prashant31@gmail.com',
    pass: 'pwd'
  }
});



exports.triggerEmail = (event, context, callback) => {

  const mailOptions = {
    from: 'agarwal.prashant31@gmail.com',
    to: JSON.stringify(event.email),
    subject: 'New Book',
    text: 'New Book has been Added in the System.'
  };

  const done = (err, res) => callback(null, {
    statusCode: '200',
    body: JSON.stringify(res),

  });
  transporter.sendMail(mailOptions, done(null, event));
};
