import nodemailer from "nodemailer";
import { google } from "googleapis";
import { confirmEmailTemplate } from "@/emails/confirmEmailTemplate";

const { OAuth2 } = google.auth;
const AUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL,
} = process.env;

const oauth2client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  AUTH_PLAYGROUND
);
//send email
export const sendEmail = (to, url, text, subject) => {
  oauth2client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  const access_token = oauth2client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: access_token,
    },
  });

  const mailOption = {
    from: SENDER_EMAIL,
    to,
    subject,
    html: confirmEmailTemplate(to, url),
  };

  smtpTransport.sendMail(mailOption, (error, info) => {
    if (error) {
      return error;
    }
    return info;
  });
};
