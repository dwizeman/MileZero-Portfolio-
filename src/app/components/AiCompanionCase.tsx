import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const imagesBeforeTutorials = [
  { src: '/ai-companion/1.png', alt: 'AI Companion — App Design, MOTJ title slide' },
  { src: '/ai-companion/2.png', alt: 'AI Companion — Concept' },
  { src: '/ai-companion/3.png', alt: 'AI Companion — Gates' },
  { src: '/ai-companion/4.png', alt: 'AI Companion — Point of Departure' },
  { src: '/ai-companion/5.png', alt: 'AI Companion — Gate of Knowledge' },
  { src: '/ai-companion/6.png', alt: 'AI Companion — Gate of Mutuality' },
  { src: '/ai-companion/7.png', alt: 'AI Companion — Gate of Faith' },
];

const imagesAfterTutorials = [
  { src: '/ai-companion/9.png', alt: 'AI Companion — UI collage' },
];

const tutorials = [
  { src: '/ai-companion/tutorial-map.mp4', label: 'Map' },
  { src: '/ai-companion/tutorial-ai-chat.mp4', label: 'AI Chat' },
  { src: '/ai-companion/tutorial-diary.mp4', label: 'Diary' },
  { src: '/ai-companion/tutorial-immersive.mp4', label: 'Immersive' },
  { src: '/ai-companion/tutorial-intro.mp4', label: 'Intro' },
];

const imgClass =
  'w-auto h-auto max-w-full max-h-[85vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

// Frame proportions measured pixel-for-pixel from the source Figma slide
// (slide 8 / Tutorials), phone 1's mockup at native 1920x1080 resolution:
// outer frame 252x524px, bezel 9px, notch 72x20px inset 18px from the top.
function PhoneMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="w-full max-w-[220px] sm:max-w-[240px] mx-auto">
      <div
        className="relative w-full bg-black shadow-[0_20px_50px_-15px_rgba(0,0,0,0.55)]"
        style={{
          aspectRatio: '252 / 524',
          borderRadius: '15.1%',
          padding: '3.6%',
          border: '1px solid rgba(215, 215, 210, 0.55)',
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden bg-black"
          style={{ borderRadius: '12.6%' }}
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            aria-label={label}
          />
        </div>
        {/* Camera notch — measured 72x20px, 18px below the outer top edge, centered */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{
            top: '3.44%',
            width: '28.6%',
            aspectRatio: '72 / 20',
          }}
        />
      </div>
    </div>
  );
}

export default function AiCompanionCase() {
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
              Product UX/UI · 2024 · Museum of Tolerance
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Your AI
              <br />
              Companion
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-3">
            <h2
              className="font-serif-italic text-[#050505]/85 mb-5"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 30px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Gates mark transitions.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              Moments where we pause, choose, and step into something new.
              When we shift our perspective, we reveal new understanding —
              in others, and in ourselves. An in-museum AI companion guiding
              visitors of the Museum of Tolerance Jerusalem through the
              Gates of Knowledge, Mutuality, and Faith — blending voice,
              light, and motion into a personal journey of reflection.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {/* Slides, in presentation order */}
        {imagesBeforeTutorials.map((image, i) => (
          <div key={image.src} className={i === 0 ? '' : 'pt-12 md:pt-20'}>
            <figure>
              <img
                src={image.src}
                alt={image.alt}
                className={imgClass}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          </div>
        ))}

        {/* Tutorials — live video mockups, matching the deck slide */}
        <div className="pt-12 md:pt-20">
          <div
            className="rounded-[14px] md:rounded-[18px] px-6 sm:px-10 md:px-14 pt-12 md:pt-16 pb-10 md:pb-12"
            style={{ background: 'linear-gradient(180deg, #000000 0%, #0D21AA 100%)' }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 md:gap-x-10 mb-10 md:mb-14">
              {tutorials.map(tutorial => (
                <PhoneMockup key={tutorial.src} src={tutorial.src} label={tutorial.label} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-10">
              <h3
                className="text-white"
                style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 500, letterSpacing: '-0.02em' }}
              >
                Tutorials
              </h3>
              <p className="text-white/70" style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '460px' }}>
                Each tutorial offers a refined, step-by-step introduction to the
                app's features, guiding users through their use in context as
                they navigate the museum.
              </p>
            </div>
          </div>
        </div>

        {imagesAfterTutorials.map(image => (
          <div key={image.src} className="pt-12 md:pt-20">
            <figure>
              <img src={image.src} alt={image.alt} className={imgClass} loading="lazy" />
            </figure>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-20 md:mt-32 flex justify-between items-baseline">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45">
            MileZero · Your AI Companion
          </span>
        </div>
      </div>
    </div>
  );
}
