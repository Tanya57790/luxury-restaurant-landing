'use server';

import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, userMessage } = await request.json();

    const mailOptions = {
      from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL_USER}>`,
      to: `${process.env.CONTACT_EMAIL}`,
      replyTo: `${firstName} <${email}>`,
      subject: `New application from ${firstName} ${lastName}`,
      text: `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nMessage: ${userMessage}`,
      html: `<h3>New application</h3>
             <p><strong>First name:</strong> ${firstName}</p>
             <p><strong>Last name:</strong> ${lastName}</p>
             <p><strong>Phone number:</strong> ${phoneNumber}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${userMessage}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Успешно отправлено' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Ошибка отправки' }, { status: 500 });
  }
}
