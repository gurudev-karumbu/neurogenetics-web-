// Zeptoemail (SMTP) wrapper

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

const SMTP_CONFIG = {
  host: process.env.ZEPTO_SMTP_HOST ?? 'smtp.zeptomail.in',
  port: parseInt(process.env.ZEPTO_SMTP_PORT ?? '587'),
  user: process.env.ZEPTO_SMTP_USER ?? '',
  pass: process.env.ZEPTO_SMTP_PASS ?? '',
  from: process.env.EMAIL_FROM ?? 'noreply@neurogenetics.my',
  fromName: process.env.EMAIL_FROM_NAME ?? 'Neurogenetics.my',
};

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: false,
      auth: { user: SMTP_CONFIG.user, pass: SMTP_CONFIG.pass },
    });
    const toArray = Array.isArray(options.to) ? options.to : [options.to];
    await transporter.sendMail({
      from: `"${SMTP_CONFIG.fromName}" <${SMTP_CONFIG.from}>`,
      to: toArray.join(', '),
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
    return true;
  } catch (err) {
    console.error('[email] Failed to send:', err);
    return false;
  }
}

// ── Notification templates ────────────────────────────────────────────────────

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'devanathan@karumbu.in';
const PRABHU_EMAIL = process.env.PRABHU_EMAIL ?? 'prabhu@neurogenetics.my';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://neurogenetics.my';

function baseHtml(body: string): string {
  return `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a2a6c;">
      <div style="border-bottom:3px solid #fdbb2d;padding-bottom:12px;margin-bottom:24px;">
        <span style="font-weight:700;font-size:18px;color:#1a2a6c;">Neurogenetics.my</span>
      </div>
      ${body}
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
        This is an automated notification from the Neurogenetics.my blog workflow.
      </div>
    </div>`;
}

export const notifications = {
  ideaSubmitted: (blogTitle: string, blogId: string) =>
    sendEmail({
      to: ADMIN_EMAIL,
      subject: `New Blog Idea: "${blogTitle}"`,
      html: baseHtml(`
        <p>Prabhu has submitted a new blog idea.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p>Please review and start drafting:</p>
        <a href="${BASE_URL}/admin/draft/${blogId}"
           style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">
          Open in Admin Workspace
        </a>`),
    }),

  draftReady: (blogTitle: string, blogId: string) =>
    sendEmail({
      to: PRABHU_EMAIL,
      subject: `Your blog draft is ready: "${blogTitle}"`,
      html: baseHtml(`
        <p>Your blog draft has been prepared and is ready for your review.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p>Please review and approve or request changes:</p>
        <a href="${BASE_URL}/portal/review/${blogId}"
           style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">
          Review Draft
        </a>`),
    }),

  revisionRequested: (blogTitle: string, blogId: string, note: string) =>
    sendEmail({
      to: ADMIN_EMAIL,
      subject: `Revision requested: "${blogTitle}"`,
      html: baseHtml(`
        <p>Prabhu has requested changes to the blog draft.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p><strong>Feedback:</strong> ${note}</p>
        <a href="${BASE_URL}/admin/draft/${blogId}"
           style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">
          Revise Draft
        </a>`),
    }),

  blogApproved: (blogTitle: string, blogId: string) =>
    sendEmail({
      to: [ADMIN_EMAIL, PRABHU_EMAIL],
      subject: `Blog approved — ready to publish: "${blogTitle}"`,
      html: baseHtml(`
        <p>The blog has been approved and is ready to publish.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p>Either of you can publish it now:</p>
        <a href="${BASE_URL}/portal/review/${blogId}"
           style="display:inline-block;background:#fdbb2d;color:#1a2a6c;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;">
          Publish Blog
        </a>`),
    }),

  blogPublished: (blogTitle: string, slug: string) =>
    sendEmail({
      to: [ADMIN_EMAIL, PRABHU_EMAIL],
      subject: `Blog is now live: "${blogTitle}"`,
      html: baseHtml(`
        <p>Your blog is now live on the website.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <a href="${BASE_URL}/blog/${slug}"
           style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">
          View Live Post
        </a>`),
    }),

  reminderSubmitIdea: (quarter: string, published: number, target: number) =>
    sendEmail({
      to: PRABHU_EMAIL,
      subject: `Blog reminder: ${published}/${target} published this quarter`,
      html: baseHtml(`
        <p>This is a friendly reminder to keep your blog on track for <strong>${quarter}</strong>.</p>
        <p><strong>${published} of ${target}</strong> blogs have been published so far.</p>
        <p>Please submit your next blog idea when you're ready:</p>
        <a href="${BASE_URL}/portal/submit"
           style="display:inline-block;background:#1a2a6c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">
          Submit Blog Idea
        </a>`),
    }),

  reminderPendingApproval: (blogTitle: string, blogId: string, daysPending: number) =>
    sendEmail({
      to: PRABHU_EMAIL,
      subject: `Action needed: Blog draft awaiting your approval`,
      html: baseHtml(`
        <p>A blog draft has been waiting for your approval for <strong>${daysPending} days</strong>.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p>Please review and approve so it can be published on schedule:</p>
        <a href="${BASE_URL}/portal/review/${blogId}"
           style="display:inline-block;background:#fdbb2d;color:#1a2a6c;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;">
          Review Now
        </a>`),
    }),

  reminderApprovedNotPublished: (blogTitle: string, blogId: string) =>
    sendEmail({
      to: [ADMIN_EMAIL, PRABHU_EMAIL],
      subject: `Reminder: Approved blog not yet published`,
      html: baseHtml(`
        <p>A blog has been approved but not yet published.</p>
        <p><strong>Title:</strong> ${blogTitle}</p>
        <p>Please publish it to stay on track:</p>
        <a href="${BASE_URL}/portal/review/${blogId}"
           style="display:inline-block;background:#fdbb2d;color:#1a2a6c;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;">
          Publish Now
        </a>`),
    }),
};
