import fs from 'fs';
import path from 'path';
import { BlogMeta, BlogPost, BlogState, QuarterStats } from '@/types/blog';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blogs');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getQuarter(date: Date = new Date()): string {
  const q = Math.ceil((date.getMonth() + 1) / 3);
  return `${date.getFullYear()}-Q${q}`;
}

function blogDir(id: string) {
  return path.join(CONTENT_DIR, id);
}

// ── Read ──────────────────────────────────────────────────────────────────────

export function getBlogMeta(id: string): BlogMeta | null {
  const metaPath = path.join(blogDir(id), 'meta.json');
  if (!fs.existsSync(metaPath)) return null;
  return JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
}

export function getAllBlogs(): BlogMeta[] {
  ensureDir(CONTENT_DIR);
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => fs.statSync(path.join(CONTENT_DIR, name)).isDirectory())
    .map((id) => getBlogMeta(id))
    .filter(Boolean) as BlogMeta[];
}

export function getPublishedBlogs(): BlogMeta[] {
  return getAllBlogs()
    .filter((b) => b.state === 'published')
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
}

export function getBlogPost(id: string): BlogPost | null {
  const meta = getBlogMeta(id);
  if (!meta) return null;
  const dir = blogDir(id);
  const read = (file: string) => {
    const p = path.join(dir, file);
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf-8') : '';
  };
  return {
    ...meta,
    idea: read('idea.md'),
    draft: read('draft.md'),
    published: read('published.md') || undefined,
  };
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const all = getAllBlogs();
  const meta = all.find((b) => b.slug === slug && b.state === 'published');
  if (!meta) return null;
  return getBlogPost(meta.id);
}

// ── Write ─────────────────────────────────────────────────────────────────────

export function saveMeta(meta: BlogMeta) {
  ensureDir(blogDir(meta.id));
  fs.writeFileSync(
    path.join(blogDir(meta.id), 'meta.json'),
    JSON.stringify(meta, null, 2),
    'utf-8'
  );
}

export function saveContent(id: string, file: 'idea.md' | 'draft.md' | 'published.md', content: string) {
  ensureDir(blogDir(id));
  fs.writeFileSync(path.join(blogDir(id), file), content, 'utf-8');
}

// ── Create ────────────────────────────────────────────────────────────────────

export function createBlog(idea: string, title: string): BlogMeta {
  const id = `blog_${Date.now()}`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const now = new Date().toISOString();
  const meta: BlogMeta = {
    id,
    title,
    slug,
    state: 'idea_submitted',
    quarter: getQuarter(),
    createdAt: now,
    updatedAt: now,
    ideaSubmittedAt: now,
  };
  ensureDir(blogDir(id));
  saveMeta(meta);
  saveContent(id, 'idea.md', idea);
  return meta;
}

// ── Transition ────────────────────────────────────────────────────────────────

export function transitionBlog(
  id: string,
  newState: BlogState,
  extras: Partial<BlogMeta> = {}
): BlogMeta | null {
  const meta = getBlogMeta(id);
  if (!meta) return null;
  const now = new Date().toISOString();
  const updated: BlogMeta = {
    ...meta,
    ...extras,
    state: newState,
    updatedAt: now,
    ...(newState === 'published' ? { publishedAt: now } : {}),
    ...(newState === 'pending_approval' ? { draftSubmittedAt: now } : {}),
    ...(newState === 'approved' ? { approvedAt: now } : {}),
  };
  saveMeta(updated);
  if (newState === 'published') {
    // copy draft → published
    const draft = fs.readFileSync(path.join(blogDir(id), 'draft.md'), 'utf-8');
    saveContent(id, 'published.md', draft);
  }
  return updated;
}

// ── Quarter Stats ─────────────────────────────────────────────────────────────

export function getQuarterStats(quarter?: string): QuarterStats {
  const q = quarter ?? getQuarter();
  const blogs = getAllBlogs().filter((b) => b.quarter === q);
  return {
    quarter: q,
    target: 12,
    published: blogs.filter((b) => b.state === 'published').length,
    inProgress: blogs.filter((b) => b.state !== 'published').length,
  };
}

export function getCurrentQuarter() {
  return getQuarter();
}
