var nodemailer = require('nodemailer');

module.exports = {
  sendMail
};

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_SERVICE_USER, // Your email id
    pass: process.env.EMAIL_SERVICE_PASS // Your password
  }
});

function sendMail(req, res, next) {
  var mailOptions = {
    from: req.body.name, // sender address
    email: req.body.email,
    to: "carliesachiko@gmail.com",
    subject: req.body.subject, // Subject line
    text: "From: " + req.body.name + "\nEmail: " + req.body.email + "\nSubject: " + req.body.subject + "\n\nMessage: " + req.body.text //, // plaintext body
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(info);
    }
  });
}
