
import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer")

export async function POST(request: Request) {
  
    const body = await request.json();
    
    const message = {
        from: `ScanA Team <${process.env.EMAIL_FROM}>`,
        to: body.email,
        subject: "Using NodeMailer With Next Api",
        html: `
        <p>
          Hello ${body.name},
        </p>

        <p>
          This is a test email sent using NodeMailer with Next Api 👍
        </p>
        `,
       
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

      console.log(JSON.stringify(body))
      
      try {
  
          await transporter.sendMail(message);
          return NextResponse.json({message: "Email Sent Successfully"}, { status: 200 });
  
      } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    
}   