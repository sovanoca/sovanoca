import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, address, pincode, message } = await req.json();

  // Validate required fields
  if (!name || !email || !phone || !address || !pincode || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const adminMail = {
      from: `"Sovanoca Website" <${email}>`,
      to: "infosovanoca@gmail.com", // update to your construction company email
      subject: `New Inquiry Form Submission`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0e7490 0%, #155e75 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Inquiry from Sovanoca Website</h2>
          </div>
          <div style="background: #f9fafb; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; width: 30%;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Address:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Pincode:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${pincode}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #e5e7eb; vertical-align: top;">Message:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${message}</td>
              </tr>
            </table>
            
            <div style="background: #eff6ff; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 20px;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">Location Information:</h4>
              <p style="margin: 5px 0;"><strong>Address:</strong> ${address}</p>
              <p style="margin: 5px 0;"><strong>Pincode:</strong> ${pincode}</p>
            </div>
            
            <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">
              This message was sent via the Sovanoca Construction website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Email to client
    const clientMail = {
      from: `"Sovanoca Construction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting Sovanoca Construction`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0e7490 0%, #155e75 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">Thank You for Contacting Us!</h2>
          </div>
          <div style="background: #f9fafb; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <h3 style="color: #111827;">Hi ${name},</h3>
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to <strong style="color: #0e7490;">Sovanoca Construction</strong>. 
              We've received your inquiry and one of our project managers will review your requirements shortly.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; margin: 20px 0;">
              <h4 style="color: #0e7490; margin-top: 0;">Your Inquiry Summary:</h4>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Address:</strong> ${address}</p>
              <p><strong>Pincode:</strong> ${pincode}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            
            <p style="margin: 20px 0;">
              Based on your location (<strong>${pincode}</strong>), our team will assess project feasibility and get back to you with preliminary details.
            </p>
            
            <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="color: #0369a1; margin-top: 0;">What happens next?</h4>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Our project coordinator will contact you within 24 hours</li>
                <li>We'll schedule a site visit (if required)</li>
                <li>You'll receive a detailed project proposal</li>
              </ul>
            </div>
            
            <p style="margin-top: 20px;">
              For urgent inquiries, feel free to call us directly at 
              <a href="tel:+13365003171" style="color: #0e7490; text-decoration: none; font-weight: bold; margin-left: 5px;">
                (336) 500-3171
              </a>.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">
            
            <p style="margin: 0;">Best regards,<br>
            <strong>The Sovanoca Construction Team</strong></p>
            <p style="font-size: 12px; color: #6b7280; margin-top: 20px;">
              This is an automated response confirming receipt of your inquiry.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(clientMail);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}