"use server"
import nodemailer from "nodemailer"

export async function sendMail(email: string) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "nityam950@gmail.com",
            pass: "uycb qsxv cnqu aaic",
        },
    });

    const mailOptions = {
        from: "nityam950@gmail.com",
        to: email,
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
    });


}