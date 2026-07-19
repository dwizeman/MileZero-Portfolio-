import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const videoClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

export default function AccessClubCase() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#050505] overflow-x-hidden">
      {/* Floating chrome */}
      <button
        onClick={() => navigate('/')}
        aria-label="Back to portfolio"
        className="fixed top-5 left-5 md:top-7 md:left-7 z-50 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[#050505] transition-all duration-300 hover:-translate-x-0.5"
        style={{
          background: 'rgba(252, 249, 244, 0.92)',
          border: '1px solid rgba(5, 5, 5, 0.16)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(5, 5, 5, 0.45)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(5, 5, 5, 0.16)';
        }}
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>

      <button
        onClick={() => navigate('/')}
        aria-label="MileZero — home"
        className="fixed top-5 right-5 md:top-7 md:right-7 z-50 h-10 md:h-11 px-4 md:px-5 max-w-[140px] md:max-w-none rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-90"
        style={{
          background: 'rgba(252, 249, 244, 0.92)',
          border: '1px solid rgba(5, 5, 5, 0.16)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(5, 5, 5, 0.45)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(5, 5, 5, 0.16)';
        }}
      >
        <img src={logoSvg} alt="MileZero" className="h-3.5 md:h-4 w-auto max-w-full select-none" />
      </button>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-[120px] md:pt-[160px] pb-20 md:pb-24">
        {/* Editorial hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-6">
              Brand System · 2025 · Microsoft
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Access Club
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-3">
            {/* Placeholder copy — to be replaced */}
            <h2
              className="font-serif-italic text-[#050505]/85 mb-5"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 30px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Placeholder headline.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              Placeholder description copy — to be replaced.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {/* 1. Brand animation */}
        <figure>
          <video
            src="/access-club/access-club-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Access Club — brand animation"
            className={videoClass}
          />
        </figure>

        {/* 2. Countdown screen, in-venue */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img
              src="/access-club/2.jpg"
              alt="Access Club — countdown screen projected in venue"
              className={videoClass}
              loading="lazy"
            />
          </figure>
        </div>

        {/* 3. Standing display sign */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img
              src="/access-club/3.jpg"
              alt="Access Club — standing display sign"
              className={videoClass}
              loading="lazy"
            />
          </figure>
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-32 flex justify-between items-baseline">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45">
            MileZero · Access Club
          </span>
        </div>
      </div>
    </div>
  );
}
