/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import nodemailer from 'nodemailer';


export async function sendMail(email: string, otp: string, username: string) {
    /* SEND EMAIL FOR VERIFICATION */
    const transport = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "nityam950@gmail.com",
            pass: "jyqo lyyz btkx bqmx"
        },
        secure: true,
        requireTLS: true,
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transport.verify(function (error: any, success: unknown) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: `Hi ${username} Verify your identity`,
        html: ` <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: auto; max-width: 600px; padding: 20px; border: 1px solid #181818; border-radius: 20px;">
    <div style="text-align: center;">
      <div style="font-size: 24px; font-weight: 600; margin-bottom: 10px;">skip auth</div>
      <div style="font-size: 18px; margin-bottom: 10px;">Hi ${username}! use the OTP to verify your identity.</div>
              <p style="background-color: #181818; color: ghostwhite; font-weight: 500; font-size: 24px; padding: 8px 20px; border-radius: 20px; display: inline-block; margin-bottom: 20px;">${otp}</p>
    </div>
    <div style="font-size: 14px; border-top: 1px solid #181818; padding-top: 10px; text-align: center;">
      © 2024 skip dev, Silver Valley Bihar, India
    </div>
  </div>`
    };

    await new Promise((resolve, reject) => {
        // send mail
        transport.sendMail(mailOptions, (err: any, info: unknown) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    /* MAIL IS SENT RETURN THIS MESSAGE TO THE FRONTEND */
    return {
        verificationOtpSent: `Hi ${username} an otp is sent to your ${email}. Use that to verify your identity.`
    }

}