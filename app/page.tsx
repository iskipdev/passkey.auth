"use server";

import { sendMail } from "@/mail/mail";

export default async function home() {
  const email = "iskip.dev@gmail.com";
  const otp = "1234";
  const username = "name";
  sendMail(email, otp, username);
  return <main>hello world!</main>;
}
