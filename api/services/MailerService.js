const nodemailer = require('nodemailer');
var ejs = require("ejs");
// var fs = require("fs"); 

module.exports = {

    /**
    * @param {*} req
    * @param {*} res
    * @description mailfunction in MailerService
    * @author `DARSHAN ZignutsTechnolab`
    */
    async mailfunction(req, res) {
        try {
            var transporter = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "a5cee4b85d8781",
                    pass: "64d75fc684958b"
                }
            });
            ejs.renderFile("./views/index.ejs", { name: 'mail' }, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var mainOptions = {
                        from: '"Tester" testmail@zoho.com',
                        to: req.body.email,
                        subject: 'Hello, world',
                        html: data
                    };
                    // console.log("html data ======================>", mainOptions.html);
                    transporter.sendMail(mainOptions, function (err, info) {
                        if (err) {
                            console.log(err);
                        }
                        //  else {
                        //     console.log('Message sent: ' + info.response);
                        // }
                    });
                }
                
                });
        } catch (err) {
            return res.status(400).json({
                msg : 'Something went wrong!'
            });
        }
    }
    
}