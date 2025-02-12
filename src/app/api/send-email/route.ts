
import { Email } from '@/components/EmailComposition';
import { NextResponse } from 'next/server';
import path from 'path';
const nodemailer = require("nodemailer")
const Mailgen = require("mailgen")


const mailGenerator = new Mailgen({
  theme: {
    path: path.resolve("public/assets/theme.html"),
    plaintextPath: path.resolve("public/assets/theme.txt"),
  },
  product: {
      name: "Sizo Develops",
      link: 'https://www.sizodevelops.com',
      logo: 'https://www.sizodevelops.com/Icons/Logo%20Black.svg'
  }
});

export async function POST(request: Request) {

    const body = await request.json();

    const email = Email(body.name);
    var emailBody = mailGenerator.generate(email.styledEmail);

    const message = {
        from: `ScanA Team <${process.env.EMAIL_FROM}>`,
        to: body.email,
        subject: "Using NodeMailer With Next Api",
        html: emailBody,
        headers: {
          "X-Entity-Ref-ID": "newmail",
        },
      };

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.PASS,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

    

      try {
  
          await transporter.sendMail(message);
          return NextResponse.json({message: "Email Sent Successfully"}, { status: 200 });
  
      } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    
}   