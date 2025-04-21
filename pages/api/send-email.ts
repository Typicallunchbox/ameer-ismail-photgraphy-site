import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { emailData } = req.body;
    const { fullName, number, email, interest, date, location } = emailData;

    if (!fullName || !number || !email || !interest || !date || !location) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`, 
            to: 'info@ameerismailphotography.com',
            subject: `New Contact Form Submission from ${fullName}`,
            text: "TEST",
            html: `<p><strong>Name:</strong> ${fullName}</p>
                   <p><strong>Number:</strong> ${number}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Interest:</strong> ${interest}</p>
                   <p><strong>Date:</strong> ${date}</p>
                   <p><strong>Location:</strong> ${location}</p>
                   <p><a href="mailto:${email}">Send email</a></p>`,
            replyTo: number, 
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to send email', error });
    }
}
