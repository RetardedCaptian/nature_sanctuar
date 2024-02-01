const nodemailer = require('nodemailer');
const router = require('express').Router()



router.post('/sendemail', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'naturesanctuarymail@gmail.com',
                pass: process.env.APPPWD,
            },
        });

        const mailOptions = {
            // from: 'shijinjose333@gmail.com',
            to: 'shijinjose1999@gmail.com',
            subject: req.body.querySubject,
            text: `Hello Im ${req.body.queryUsername},${req.body.queryMessage}\nplease contact me on ${req.body.queryContact}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                return res.json({ success: false, msg: 'unsuccessfull' })
            } else {
                return res.json({ success: true, msg: 'posted' })

            }
        });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, msg: 'unsuccessfull' })

    }
})

module.exports = router
