import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const hasStartedRef = useRef(false);

  const startCalmTune = () => {
    if (hasStartedRef.current && audioCtxRef.current?.state === 'running') return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Clear existing nodes if any
      oscillatorsRef.current.forEach(({ osc }) => {
        try { osc.stop(); } catch(e) {}
      });
      oscillatorsRef.current = [];

      // Indian Tanpura & Gentle Flute Harmonics (Sa - Pa - Sa - Rishabh C3/G3/C4/D4)
      const baseFreq = 130.81; // C3 root
      const harmonics = [
        { freq: baseFreq * 1.5, type: 'sine', gainVal: 0.05 },   // Pa (G3)
        { freq: baseFreq * 2.0, type: 'triangle', gainVal: 0.04 }, // Sa (C4)
        { freq: baseFreq * 2.25, type: 'sine', gainVal: 0.03 },  // Ga (E4) calm note
        { freq: baseFreq, type: 'sine', gainVal: 0.06 }          // Sa Low (C3)
      ];

      harmonics.forEach(({ freq, type, gainVal }, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Slow calm ambient envelope fade-in
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(gainVal, ctx.currentTime + 2 + idx * 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscillatorsRef.current.push({ osc, gain });
      });

      hasStartedRef.current = true;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Autoplay waiting for user gesture:", e);
    }
  };

  const stopCalmTune = () => {
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopCalmTune();
    } else {
      startCalmTune();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch(e) {}
      }
    };
  }, []);

  return (
    /* Floating Subtle Ambient Sound Indicator at Bottom-Left */
    <div
      onClick={toggleAudio}
      title={isPlaying ? "Mute Calm Ashram Background Music" : "Play Calm Ashram Background Music"}
      style={{
        position: 'fixed',
        left: '1.25rem',
        bottom: '1.25rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.45rem 0.85rem',
        borderRadius: 'var(--radius-full)',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        color: isPlaying ? 'var(--accent-gold)' : 'var(--text-muted)',
        fontSize: '0.78rem',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        transition: 'var(--transition)'
      }}
    >
      {isPlaying ? (
        <>
          <Volume2 size={16} style={{ animation: 'pulseGlow 2s infinite' }} />
          <span>🎵 Calm Music Playing</span>
        </>
      ) : (
        <>
          <VolumeX size={16} />
          <span>Calm Music Muted</span>
        </>
      )}
    </div>
  );
}
