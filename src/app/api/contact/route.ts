import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateEmailTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      vehicleType,
      budget,
      timeframe,
      message
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p>You've received a new inquiry through the JP Auto Leasing website contact form.</p>
      
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Name:</span>
          <span class="info-value">${name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value"><a href="mailto:${email}" style="color: rgb(34 197 94);">${email}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value"><a href="tel:${phone}" style="color: rgb(34 197 94);">${phone}</a></span>
        </div>
        ${vehicleType ? `
        <div class="info-row">
          <span class="info-label">Vehicle Type:</span>
          <span class="info-value">${vehicleType}</span>
        </div>
        ` : ''}
        ${budget ? `
        <div class="info-row">
          <span class="info-label">Budget:</span>
          <span class="info-value">${budget}</span>
        </div>
        ` : ''}
        ${timeframe ? `
        <div class="info-row">
          <span class="info-label">Timeframe:</span>
          <span class="info-value">${timeframe}</span>
        </div>
        ` : ''}
      </div>

      ${message ? `
      <h3 style="color: rgb(59 130 246); margin-top: 30px;">Message:</h3>
      <div class="info-grid">
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      ` : ''}

      <p style="margin-top: 30px; padding: 20px; background: rgba(34, 197, 94, 0.1); border-left: 4px solid rgb(34 197 94); border-radius: 8px;">
        <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service standards.
      </p>
    `;

    const htmlEmail = generateEmailTemplate(emailContent, 'New Contact Form Submission - JP Auto Leasing');

    // Send email to Jose
    const result = await sendEmail({
      to: 'jpautoleasingllc@gmail.com',
      subject: `New Contact Inquiry from ${name} - JP Auto Leasing`,
      html: htmlEmail
    });

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      });
    } else {
      throw new Error(result.error || 'Failed to send email');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
