import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// for some reason this fixes the issue of pulling email information
// from environment variables ??? Who knows
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.G_PASSWORD,
  },
});

export const createMailOptions = (email: string) => {
  return {
    from: `${process.env.GMAIL}`,
    to: `${email}`,
    subject: 'FINAL test of your email',
    html: `<p> here is the email </p>`,
  };
};
