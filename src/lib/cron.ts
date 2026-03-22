// Fortnightly reminder scheduler
// Runs daily, checks pace, fires reminders when behind

import { getAllBlogs, getQuarterStats } from './blog';
import { notifications } from './email';

export function setupCronJobs() {
  // Only run in server context
  if (typeof window !== 'undefined') return;

  import('node-cron').then(({ default: cron }) => {
    // Run every day at 9:00 AM Malaysia time (UTC+8 = 01:00 UTC)
    cron.schedule('0 1 * * *', async () => {
      console.log('[cron] Running daily blog reminder check...');
      await runReminderCheck();
    });

    console.log('[cron] Blog reminder scheduler started');
  });
}

export async function runReminderCheck() {
  const stats = getQuarterStats();
  const allBlogs = getAllBlogs().filter((b) => b.quarter === stats.quarter);
  const now = new Date();

  // ── Fortnightly pace check ────────────────────────────────────────────────
  // Quarter = 13 weeks. Fortnight 1 = weeks 1-2, Fortnight 2 = weeks 3-4, etc.
  // Expected pace: 2 blogs published per fortnight (= 12 over 6 fortnights)
  const quarterStart = getQuarterStart(stats.quarter);
  const weeksSinceStart = Math.floor(
    (now.getTime() - quarterStart.getTime()) / (7 * 24 * 60 * 60 * 1000)
  );
  const fortnightNumber = Math.floor(weeksSinceStart / 2) + 1;
  const expectedByNow = Math.min(fortnightNumber * 2, 12);

  if (stats.published < expectedByNow) {
    // Behind pace — check if we already reminded recently (within 3 days)
    const shouldRemind = !stats.lastReminderSent ||
      daysBetween(new Date(stats.lastReminderSent), now) >= 3;

    if (shouldRemind) {
      console.log(`[cron] Behind pace: ${stats.published}/${expectedByNow} expected. Sending reminder.`);
      await notifications.reminderSubmitIdea(stats.quarter, stats.published, stats.target);
    }
  }

  // ── Stale draft check — pending approval > 3 days ────────────────────────
  for (const blog of allBlogs) {
    if (blog.state === 'pending_approval' && blog.draftSubmittedAt) {
      const days = daysBetween(new Date(blog.draftSubmittedAt), now);
      if (days >= 3) {
        console.log(`[cron] Blog "${blog.title}" pending approval for ${days} days. Reminding.`);
        await notifications.reminderPendingApproval(blog.title, blog.id, days);
      }
    }

    // ── Approved but not published > 2 days ────────────────────────────────
    if (blog.state === 'approved' && blog.approvedAt) {
      const days = daysBetween(new Date(blog.approvedAt), now);
      if (days >= 2) {
        console.log(`[cron] Blog "${blog.title}" approved but not published for ${days} days. Reminding.`);
        await notifications.reminderApprovedNotPublished(blog.title, blog.id);
      }
    }
  }
}

function getQuarterStart(quarter: string): Date {
  const [year, q] = quarter.split('-Q');
  const month = (parseInt(q) - 1) * 3; // Q1=0, Q2=3, Q3=6, Q4=9
  return new Date(parseInt(year), month, 1);
}

function daysBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / (24 * 60 * 60 * 1000));
}
