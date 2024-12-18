"use server";

import { sendMail } from "@/mail/mail";

export default async function home() {
  const emailId = "iskip.dev@gmail.com";
  sendMail(emailId);
  return <main>hello world!</main>;
}
