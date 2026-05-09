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
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

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
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/9' }}>
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

      {/* Fullscreen button — visible while playing */}
      {phase === 'playing' && (
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-lg p-1.5 transition-colors z-10"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15v4.5M15 15h4.5M15 15l5.25 5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          )}
        </button>
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
