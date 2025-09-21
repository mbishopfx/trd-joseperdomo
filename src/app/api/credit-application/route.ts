import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateEmailTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      // Personal Information
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      ssn,
      
      // Address Information
      address,
      city,
      state,
      zipCode,
      residenceType,
      monthsAtAddress,
      
      // Employment Information
      employerName,
      jobTitle,
      employmentType,
      monthsEmployed,
      grossMonthlyIncome,
      
      // Financial Information
      monthlyHousing,
      otherMonthlyPayments,
      
      // Vehicle Information
      vehicleInterest,
      tradeInVehicle,
      downPayment,
      
      // References
      reference1Name,
      reference1Phone,
      reference2Name,
      reference2Phone
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !dateOfBirth || !ssn) {
      return NextResponse.json(
        { error: 'Missing required personal information' },
        { status: 400 }
      );
    }

    // Generate comprehensive email content
    const emailContent = `
      <h2>New Credit Application Submission</h2>
      <p><strong>Priority:</strong> <span class="highlight">HIGH</span> - New credit application requires immediate review</p>
      
      <h3 style="color: rgb(34 197 94); margin-top: 30px;">Personal Information</h3>
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Full Name:</span>
          <span class="info-value">${firstName} ${lastName}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value"><a href="mailto:${email}" style="color: rgb(34 197 94);">${email}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value"><a href="tel:${phone}" style="color: rgb(34 197 94);">${phone}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Date of Birth:</span>
          <span class="info-value">${dateOfBirth}</span>
        </div>
        <div class="info-row">
          <span class="info-label">SSN:</span>
          <span class="info-value">***-**-${ssn.slice(-4)}</span>
        </div>
      </div>

      <h3 style="color: rgb(59 130 246); margin-top: 30px;">Address Information</h3>
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Address:</span>
          <span class="info-value">${address}</span>
        </div>
        <div class="info-row">
          <span class="info-label">City, State ZIP:</span>
          <span class="info-value">${city}, ${state} ${zipCode}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Residence Type:</span>
          <span class="info-value">${residenceType}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Months at Address:</span>
          <span class="info-value">${monthsAtAddress} months</span>
        </div>
      </div>

      <h3 style="color: rgb(34 197 94); margin-top: 30px;">Employment Information</h3>
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Employer:</span>
          <span class="info-value">${employerName}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Job Title:</span>
          <span class="info-value">${jobTitle}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Employment Type:</span>
          <span class="info-value">${employmentType}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Months Employed:</span>
          <span class="info-value">${monthsEmployed} months</span>
        </div>
        <div class="info-row">
          <span class="info-label">Monthly Income:</span>
          <span class="info-value">$${Number(grossMonthlyIncome).toLocaleString()}</span>
        </div>
      </div>

      <h3 style="color: rgb(59 130 246); margin-top: 30px;">Financial Information</h3>
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Monthly Housing:</span>
          <span class="info-value">$${Number(monthlyHousing).toLocaleString()}</span>
        </div>
        ${otherMonthlyPayments ? `
        <div class="info-row">
          <span class="info-label">Other Payments:</span>
          <span class="info-value">$${Number(otherMonthlyPayments).toLocaleString()}</span>
        </div>
        ` : ''}
        <div class="info-row">
          <span class="info-label">Net Available:</span>
          <span class="info-value highlight">$${(Number(grossMonthlyIncome) - Number(monthlyHousing) - Number(otherMonthlyPayments || 0)).toLocaleString()}</span>
        </div>
      </div>

      ${vehicleInterest ? `
      <h3 style="color: rgb(34 197 94); margin-top: 30px;">Vehicle Interest</h3>
      <div class="info-grid">
        <p style="margin: 0; white-space: pre-wrap;">${vehicleInterest}</p>
      </div>
      ` : ''}

      ${(tradeInVehicle || downPayment) ? `
      <h3 style="color: rgb(59 130 246); margin-top: 30px;">Additional Information</h3>
      <div class="info-grid">
        ${tradeInVehicle ? `
        <div class="info-row">
          <span class="info-label">Trade-in Vehicle:</span>
          <span class="info-value">${tradeInVehicle}</span>
        </div>
        ` : ''}
        ${downPayment ? `
        <div class="info-row">
          <span class="info-label">Down Payment:</span>
          <span class="info-value">${downPayment}</span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      ${(reference1Name || reference2Name) ? `
      <h3 style="color: rgb(34 197 94); margin-top: 30px;">References</h3>
      <div class="info-grid">
        ${reference1Name ? `
        <div class="info-row">
          <span class="info-label">Reference 1:</span>
          <span class="info-value">${reference1Name} - <a href="tel:${reference1Phone}" style="color: rgb(34 197 94);">${reference1Phone}</a></span>
        </div>
        ` : ''}
        ${reference2Name ? `
        <div class="info-row">
          <span class="info-label">Reference 2:</span>
          <span class="info-value">${reference2Name} - <a href="tel:${reference2Phone}" style="color: rgb(34 197 94);">${reference2Phone}</a></span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <div style="margin-top: 40px; padding: 25px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px;">
        <h3 style="color: rgb(34 197 94); margin: 0 0 15px 0;">⚡ Action Required</h3>
        <p style="margin: 0; font-size: 16px;">
          <strong>1.</strong> Review application within 24 hours<br>
          <strong>2.</strong> Run initial credit check<br>
          <strong>3.</strong> Contact applicant with pre-approval status<br>
          <strong>4.</strong> Schedule consultation if approved
        </p>
      </div>
    `;

    const htmlEmail = generateEmailTemplate(emailContent, 'New Credit Application - JP Auto Leasing');

    // Send email to Jose
    const result = await sendEmail({
      to: 'jpautoleasingllc@gmail.com',
      subject: `🚨 URGENT: New Credit Application from ${firstName} ${lastName} - JP Auto Leasing`,
      html: htmlEmail
    });

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Credit application submitted successfully' 
      });
    } else {
      throw new Error(result.error || 'Failed to send email');
    }

  } catch (error) {
    console.error('Credit application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit credit application' },
      { status: 500 }
    );
  }
}
