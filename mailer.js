const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'shuffled720@gmail.com', // host email address
            pass: 'avhozspumkpdxvpn', // host app password(use app password, if don't have , got to google accout> enable two step verification>  go to app password and generate password)


        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Vishal OP" <shuffled720@gmail.com>', // sender address
        to: "cse210001076@iiti.ac.in", // list of receivers email Id's
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b><h1>Hello world?</h1></b><p>vsbhdfsdbfhsdbfs</p>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    //logs for email sent successfully
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


module.exports = 'main';
