import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name: string
  email: string
  message: string
}

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'CONTACT_RECIPIENT'
] as const

const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key])

if (missingEnvVars.length) {
  console.warn(
    `[contact API] Missing environment variables: ${missingEnvVars.join(
      ', '
    )}. Contact form emails will fail until these are configured.`
  )
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'الرجاء تعبئة جميع الحقول المطلوبة.' },
        { status: 400 }
      )
    }

    if (missingEnvVars.length) {
      return NextResponse.json(
        {
          error:
            'خدمة البريد غير مهيأة حالياً. الرجاء التواصل بطريقة بديلة أو المحاولة لاحقاً.'
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: `${body.name} <${body.email}>`,
      subject: `رسالة جديدة من ${body.name}`,
      text: [
        `الاسم: ${body.name}`,
        `البريد الإلكتروني: ${body.email}`,
        '-----------------------------',
        body.message
      ].join('\n'),
      html: `
        <h2>لديك رسالة جديدة من الموقع</h2>
        <p><strong>الاسم:</strong> ${body.name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${body.email}</p>
        <hr />
        <p style="white-space: pre-wrap;">${body.message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'تم إرسال رسالتك بنجاح! سنعاود التواصل معك قريباً.'
    })
  } catch (error) {
    console.error('[contact API] Failed to send message:', error)
    return NextResponse.json(
      {
        error:
          'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة لاحقاً أو استخدام وسيلة تواصل أخرى.'
      },
      { status: 500 }
    )
  }
}

