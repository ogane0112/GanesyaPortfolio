import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email,"210561109@ccmailg.meijo-u.ac.jp"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>以下のお問い合わせ内容をご確認しました</p>
          <p>{message}</p>
          <p>今後は以下のメールアドレスからご連絡させていただきます。</p>
          <p>kai513272@gmail.com</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
