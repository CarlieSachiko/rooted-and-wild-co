var express = require('express');
var router = express.Router();
// var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rooted & Wild' });
});

// router.post('/contact', function (req, res) {
//   var mailOpts, smtpTrans;
//   //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
//   smtpTrans = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     xoauth2: xoauth2.createXOAuth2Generator({
//       user: 'carliesachiko@gmail.com',
//       pass: "hapatime"
//     })
//   }
// });
//   //Mail options
//   mailOpts = {
//       from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
//       to: 'me@gmail.com',
//       subject: 'Website contact form',
//       text: req.body.message
//   };
//   smtpTrans.sendMail(mailOpts, function (error, response) {
//       //Email not sent
//       if (error) {
//           res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
//       }
//       //Yay!! Email sent
//       else {
//           res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
//       }
//   });
// });


module.exports = router;
