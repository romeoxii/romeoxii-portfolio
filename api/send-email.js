/* eslint-disable no-undef */
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (req.headers.authorization !== `Bearer ${process.env.API_NODE_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { from, name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // or your SMTP host
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `Message from: ${from}\n\n${message}`,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
