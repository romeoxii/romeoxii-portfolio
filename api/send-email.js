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
    <div style="font-family: Arial, sans-serif; padding: 12px;">
      <h2>📩 New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p style="margin-top: 10px;"><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
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
