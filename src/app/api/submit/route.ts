'use server';

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { firstName, lastName, email, phoneNumber, userMessage } = await request.json();

    const templatePath = path.join(process.cwd(), 'public/emails/unisender-template.html');
    let html = await fs.readFile(templatePath, 'utf-8');

    html = html
      .replace(/{{firstName}}/g, firstName || '')
      .replace(/{{lastName}}/g, lastName || '')
      .replace(/{{phoneNumber}}/g, phoneNumber || '')
      .replace(/{{email}}/g, email || '')
      .replace(/{{userMessage}}/g, userMessage || '');

    await resend.emails.send({
      from: `"${process.env.SENDER_NAME}" <${process.env.SMTP_USER}>`,
      to: `${process.env.CONTACT_EMAIL}`,
      replyTo: `${firstName} <${email}>`,
      subject: `New application from ${firstName} ${lastName}`,
      text: `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nMessage: ${userMessage}`,
      html: html,
    });

    return NextResponse.json({ message: 'Успешно отправлено' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Ошибка отправки' }, { status: 500 });
  }
}
