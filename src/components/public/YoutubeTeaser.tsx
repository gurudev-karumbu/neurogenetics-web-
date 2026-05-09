'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
    _ytApiLoading: boolean;
    _ytApiCallbacks: (() => void)[];
  }
}

interface Props {
  id: string;
  title: string;
  start: number;
  end: number;
}

function loadYouTubeApi(cb: () => void) {
  if (typeof window === 'undefined') return;
  if (window.YT?.Player) { cb(); return; }
  window._ytApiCallbacks = window._ytApiCallbacks ?? [];
  window._ytApiCallbacks.push(cb);
  if (window._ytApiLoading) return;
  window._ytApiLoading = true;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
  window.onYouTubeIframeAPIReady = () => {
    window._ytApiCallbacks.forEach((fn) => fn());
    window._ytApiCallbacks = [];
  };
}

type Phase = 'idle' | 'playing' | 'ended';

export default function YoutubeTeaser({ id, title, start, end }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    let destroyed = false;

    loadYouTubeApi(() => {
      if (destroyed || !divRef.current) return;
      playerRef.current = new window.YT.Player(divRef.current, {
        videoId: id,
        playerVars: {
          start,
          rel: 0,
          modestbranding: 1,
          fs: 0,
          controls: 0,       // hides seekbar + all controls
          disablekb: 1,      // disables keyboard shortcuts
          iv_load_policy: 3, // no annotations
          playsinline: 1,
        },
        events: {
          onStateChange: (e: { data: number }) => {
            const PLAYING = 1;
            const PAUSED = 2;
            const ENDED = 0;
            if (e.data === PLAYING) {
              setPhase('playing');
              timerRef.current = setInterval(() => {
                const t = playerRef.current?.getCurrentTime?.() ?? 0;
                if (t >= end) {
                  playerRef.current?.pauseVideo();
                  setPhase('ended');
                  clearInterval(timerRef.current!);
                }
              }, 400);
            } else if (e.data === PAUSED || e.data === ENDED) {
              if (timerRef.current) clearInterval(timerRef.current);
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (timerRef.current) clearInterval(timerRef.current);
      playerRef.current?.destroy?.();
    };
  }, [id, start, end]);

  function handlePlay() {
    playerRef.current?.seekTo(start, true);
    playerRef.current?.playVideo();
  }

  function handleReplay() {
    setPhase('idle');
    playerRef.current?.seekTo(start, true);
    playerRef.current?.playVideo();
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/9' }}>
      {/* YouTube player — controls hidden */}
      <div ref={divRef} className="w-full h-full" title={title} />

      {/* Idle overlay — custom play button */}
      {phase === 'idle' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 cursor-pointer group"
          onClick={handlePlay}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white text-xs font-medium opacity-80">Watch preview</p>
        </div>
      )}

      {/* Block right-click and pointer events on player while playing (prevents context menu seeking) */}
      {phase === 'playing' && (
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }} />
      )}

      {/* Ended overlay — CTA */}
      {phase === 'ended' && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-6 text-center text-white">
          <p className="text-xl font-bold">Interested in learning more?</p>
          <p className="text-sm text-gray-300 max-w-xs">
            Book a consultation with Prabhu to start your personalised wellness journey.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
          >
            Book a Consultation
          </Link>
          <button
            onClick={handleReplay}
            className="text-xs text-gray-400 hover:text-white underline transition-colors"
          >
            Replay preview
          </button>
        </div>
      )}
    </div>
  );
}
