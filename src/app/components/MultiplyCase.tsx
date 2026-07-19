import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const images = [
  { src: '/multiply/4.png',  alt: 'Multiply — product dashboard UI' },
  { src: '/multiply/5.png',  alt: 'Multiply — mobile app in hand' },
  { src: '/multiply/6.png',  alt: 'Multiply — desktop dashboard UI' },
  { src: '/multiply/7.png',  alt: 'Multiply — outdoor billboard campaign' },
  { src: '/multiply/8.png',  alt: 'Multiply — billboard, green' },
  { src: '/multiply/9.png',  alt: 'Multiply — billboard, purple' },
  { src: '/multiply/10.png', alt: 'Multiply — billboard, orange' },
  { src: '/multiply/11.png', alt: 'Multiply — branded tote bag' },
  { src: '/multiply/12.png', alt: 'Multiply — branded notebook' },
  { src: '/multiply/13.png', alt: 'Multiply — branded t-shirt' },
];

const imgClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

export default function MultiplyCase() {
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
              Brand System · 2024 · Scala Group
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Multiply
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
              Access global funds with insight and confidence.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              A brand and product system for Scala Group's global investment
              platform — from a confident visual identity to the dashboard
              experience that puts institutional-grade fund access in
              everyone's hands.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {/* 1. Product dashboard UI — icon-morph video */}
        <figure>
          <video
            src="/multiply/4.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={images[0].alt}
            className={imgClass}
          />
        </figure>

        {/* 2. Mobile app in hand */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[1].src} alt={images[1].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 3. Desktop dashboard UI */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[2].src} alt={images[2].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 4. Outdoor billboard campaign */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[3].src} alt={images[3].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 5. Billboard, green */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[4].src} alt={images[4].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 6. Billboard, purple */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[5].src} alt={images[5].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 7. Billboard, orange */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[6].src} alt={images[6].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 8. Branded tote bag */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[7].src} alt={images[7].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 9. Branded notebook */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[8].src} alt={images[8].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 10. Branded t-shirt */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={images[9].src} alt={images[9].alt} className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-32 flex justify-between items-baseline">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45">
            MileZero · Multiply
          </span>
        </div>
      </div>
    </div>
  );
}
