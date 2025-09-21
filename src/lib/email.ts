import nodemailer from 'nodemailer';

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: 'bishop@truerankdigital.com',
    pass: 'mhxy xjoa jrlx uacr'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function sendEmail({ to, subject, html, from }: EmailData) {
  try {
    const mailOptions = {
      from: from || 'JP Auto Leasing LLC <bishop@truerankdigital.com>',
      to,
      subject,
      html
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export function generateEmailTemplate(content: string, title: string = 'JP Auto Leasing LLC') {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          color: #ffffff;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(0, 15, 30, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 255, 200, 0.2);
          border-radius: 16px;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, rgb(34 197 94) 0%, rgb(59 130 246) 100%);
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          color: white;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .header p {
          margin: 8px 0 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
        }
        .content {
          padding: 40px 30px;
        }
        .content h2 {
          color: rgb(34 197 94);
          font-size: 22px;
          margin-bottom: 20px;
        }
        .content p {
          margin: 16px 0;
          color: #e5e5e5;
        }
        .info-grid {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid rgba(100, 255, 200, 0.1);
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(100, 255, 200, 0.1);
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-weight: 600;
          color: rgb(59 130 246);
          min-width: 120px;
        }
        .info-value {
          color: #ffffff;
          flex: 1;
          text-align: right;
        }
        .footer {
          background: rgba(0, 0, 0, 0.5);
          padding: 30px;
          text-align: center;
          border-top: 1px solid rgba(100, 255, 200, 0.1);
        }
        .footer p {
          margin: 8px 0;
          color: #888;
          font-size: 14px;
        }
        .footer a {
          color: rgb(34 197 94);
          text-decoration: none;
        }
        .highlight {
          color: rgb(34 197 94);
          font-weight: 600;
        }
        .timestamp {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          text-align: center;
          font-size: 14px;
          color: rgb(147, 197, 253);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>JP AUTO LEASING</h1>
          <p>Premium Automotive Solutions</p>
        </div>
        <div class="content">
          ${content}
          <div class="timestamp">
            <strong>Received:</strong> ${new Date().toLocaleString('en-US', {
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'long'
            })}
          </div>
        </div>
        <div class="footer">
          <p><strong>JP Auto Leasing LLC</strong></p>
          <p>Phone: <a href="tel:+19084163008">(908) 416-3008</a></p>
          <p>Email: <a href="mailto:jpautoleasingllc@gmail.com">jpautoleasingllc@gmail.com</a></p>
          <p><em>10+ Years of Automotive Expertise</em></p>
        </div>
      </div>
    </body>
    </html>
  `;
}
