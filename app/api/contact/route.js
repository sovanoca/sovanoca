import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
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
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0a0a0a;">New Inquiry from Sovanoca Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 14px; color: #777;">This message was sent via the Sovanoca Construction website contact form.</p>
        </div>
      `,
    };

    // Email to client
    const clientMail = {
      from: `"Sovanoca Construction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting Sovanoca`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h3 style="color: #0a0a0a;">Hi ${name},</h3>
          <p style="font-size: 16px;">
            Thank you for reaching out to <strong>Sovanoca Construction</strong>. We’ve received your message and one of our team members will get back to you shortly.
          </p>
          
          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0e7490;">
            <p style="margin: 0; font-style: italic;">"${message}"</p>
          </div>

          <p style="margin-top: 20px;">
            For urgent inquiries, feel free to call us directly at 
            <p style="color: #0e7490; text-decoration: none;">
                +1 (551) 200-1350
            </p>.
          </p>

          <p style="margin-top: 30px;">Best regards,<br><strong>Sovanoca Team</strong></p>
          <p style="font-size: 12px; color: #999;">This is an automated response confirming receipt of your inquiry.</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(clientMail);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}
