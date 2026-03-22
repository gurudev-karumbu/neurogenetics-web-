export type BlogState =
  | 'idea_submitted'
  | 'drafting'
  | 'pending_approval'
  | 'revision_requested'
  | 'approved'
  | 'published';

export interface BlogMeta {
  id: string;
  title: string;
  slug: string;
  state: BlogState;
  quarter: string;       // e.g. "2026-Q2"
  createdAt: string;     // ISO
  updatedAt: string;
  publishedAt?: string;
  ideaSubmittedAt?: string;
  draftSubmittedAt?: string;
  approvedAt?: string;
  reminderSentAt?: string;
  revisionNote?: string; // Prabhu's feedback on revision request
  excerpt?: string;
  tags?: string[];
  coverImage?: string;
}

export interface BlogPost extends BlogMeta {
  idea: string;          // Prabhu's raw brief
  draft: string;         // Evolved markdown content
  published?: string;    // Final published markdown
}

export interface QuarterStats {
  quarter: string;
  target: number;        // 12
  published: number;
  inProgress: number;
  lastReminderSent?: string;
}
