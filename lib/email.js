import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.codercrafter.in', // or better: use your domain e.g. mail.codercrafter.in
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000
});

export async function sendEmail({ to, subject, text, source }) {
    console.log({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  })
  try {
    // Customize email based on source if needed
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      // html: `<p>${text}</p>` // if you want HTML emails
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} for ${source} enquiry`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}