/* eslint-disable no-undef */
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (req.headers.authorization !== `Bearer ${process.env.API_NODE_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
  <div style="max-width: 550px; margin: auto; background: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e5e5e5;">
    <h2 style="margin-top: 0; font-size: 20px; color: #333; border-bottom: 2px solid #4a90e2; padding-bottom: 8px;">
      📩 New Contact Message
    </h2>

    <p style="margin: 10px 0; font-size: 15px;">
      <strong style="color:#444;">Name:</strong> ${name}
    </p>

    <p style="margin: 10px 0; font-size: 15px;">
      <strong style="color:#444;">Email:</strong> ${email}
    </p>

    <div style="margin-top: 5px; ">
      <strong style="color:#444; font-size: 15px;">Message:</strong>
      <p style="white-space: pre-line; margin: 8px 0 0; font-size: 15px; line-height: 1.5; color: #333; padding: 5px; width: 100%; background: #f7f7f7;">
        ${message}
      </p>
    </div>
  </div>
</div>

  `

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact — ${name}`,
      text: `
New message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: htmlTemplate,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
