import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, service, details } = data;

    // IMPORTANT: Replace with your actual Independent Media contact details
    const ADMIN_EMAIL = "info@independentmedias.in"; 

    // In a production environment, you would use a service like Resend, Nodemailer, or SendGrid here.
    // For now, we will simulate a successful send and log the data.
    console.log("New Lead Received:", { name, email, service, details });
    console.log(`Sending notification to: ${ADMIN_EMAIL}`);

    // If you were using Resend, it would look like this:
    /*
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ADMIN_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Service: ${service}</p><p>Details: ${details}</p>`
    });
    */

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
