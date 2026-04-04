import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'devanathan@karumbu.in';
const PRABHU_EMAIL = process.env.PRABHU_EMAIL ?? 'prabhu@neurogenetics.my';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const serviceLabel = service || 'Not specified';

    // Notify Prabhu and admin
    await sendEmail({
      to: [PRABHU_EMAIL, ADMIN_EMAIL],
      subject: `New Consultation Enquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a2a6c;">
          <div style="border-bottom:3px solid #fdbb2d;padding-bottom:12px;margin-bottom:24px;">
            <span style="font-weight:700;font-size:18px;color:#1a2a6c;">Neurogenetics.my</span>
            <span style="font-size:13px;color:#6b7280;margin-left:8px;">New Enquiry</span>
          </div>
          <p style="font-size:15px;margin-bottom:20px;">A new consultation enquiry has been submitted through the website.</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr style="background:#f9fafb;">
              <td style="padding:10px 14px;font-weight:600;color:#374151;width:140px;">Name</td>
              <td style="padding:10px 14px;color:#1a2a6c;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Email</td>
              <td style="padding:10px 14px;"><a href="mailto:${email}" style="color:#2dd4bf;">${email}</a></td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Phone</td>
              <td style="padding:10px 14px;color:#1a2a6c;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:600;color:#374151;">Service</td>
              <td style="padding:10px 14px;color:#1a2a6c;">${serviceLabel}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:10px 14px;font-weight:600;color:#374151;vertical-align:top;">Message</td>
              <td style="padding:10px 14px;color:#1a2a6c;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <a href="mailto:${email}?subject=Re: Your enquiry to Neurogenetics.my"
               style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;">
              Reply to ${name}
            </a>
          </div>
          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
            Submitted via neurogenetics.my/contact
          </div>
        </div>
      `,
    });

    // Auto-reply to enquirer
    await sendEmail({
      to: email,
      subject: 'Thank you for your enquiry — Neurogenetics.my',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a2a6c;">
          <div style="border-bottom:3px solid #fdbb2d;padding-bottom:12px;margin-bottom:24px;">
            <span style="font-weight:700;font-size:18px;color:#1a2a6c;">Neurogenetics.my</span>
          </div>
          <p style="font-size:15px;">Dear ${name},</p>
          <p style="font-size:14px;color:#374151;line-height:1.6;">
            Thank you for reaching out to Neurogenetics.my. We have received your enquiry and
            Prabhu will be in touch with you personally within 1-2 business days.
          </p>
          <p style="font-size:14px;color:#374151;line-height:1.6;">
            In the meantime, feel free to explore our services and learn more about the
            Neuro-Genetics 4D Model at <a href="https://neurogenetics.my" style="color:#2dd4bf;">neurogenetics.my</a>.
          </p>
          <p style="font-size:14px;color:#374151;margin-top:20px;">
            Warm regards,<br />
            <strong>Prabhu Sithamparam</strong><br />
            <span style="color:#6b7280;">Co-founder, Neurogenetics.my</span>
          </p>
          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
            This is an automated acknowledgement. Please do not reply to this email.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
