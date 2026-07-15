import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const images = [
  { src: '/microsoft-collection/1.png', alt: "Microsoft's Collection visual 1" },
  { src: '/microsoft-collection/2.png', alt: "Microsoft's Collection visual 2" },
  { src: '/microsoft-collection/3.png', alt: "Microsoft's Collection visual 3" },
  { src: '/microsoft-collection/4.png', alt: "Microsoft's Collection visual 4" },
  { src: '/microsoft-collection/5.png', alt: "Microsoft's Collection visual 5" },
  { src: '/microsoft-collection/6.png', alt: "Microsoft's Collection visual 6" },
  { src: '/microsoft-collection/7.png', alt: "Microsoft's Collection visual 7" },
  { src: '/microsoft-collection/8.png', alt: "Microsoft's Collection visual 8" },
];

const imageClass =
  'w-full h-auto rounded-[18px] border border-[#050505]/10 object-cover block';

export default function MicrosoftCollection() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#050505] overflow-x-hidden">
      {/* Floating back arrow */}
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

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-[120px] md:pt-[160px] pb-24 md:pb-32">
        {/* Hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-6">
              Special Collection · 2026
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Microsoft's
              <br />
              Collection
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
              A visual archive of collectible digital culture.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              A series of conceptual swag, from the famous ugly sweater
              campaign to Microsoft's 50th anniversary, building brand
              experiences for every audience and elevating brand positioning.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {/* 1. Opening pair — image + accent text (no dominant hero) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-14 md:mb-20">
          <figure className="md:col-span-7">
            <img src={images[0].src} alt={images[0].alt} className={imageClass} loading="eager" />
          </figure>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-4">
              Concept · 01
            </div>
            <p
              className="font-serif-italic text-[#050505]/85"
              style={{
                fontSize: 'clamp(20px, 2vw, 26px)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
              }}
            >
              Retro style concepts that people want to belong to.
            </p>
          </aside>
        </div>

        {/* 2. Asymmetric diptych */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
          <figure className="md:col-span-6">
            <img src={images[1].src} alt={images[1].alt} className={imageClass} loading="lazy" />
          </figure>
          <figure className="md:col-span-5 md:col-start-8 md:translate-y-12">
            <img src={images[2].src} alt={images[2].alt} className={imageClass} loading="lazy" />
          </figure>
        </div>

        {/* 3. Caption break */}
        <div className="flex items-center gap-5 mb-14 md:mb-20 mt-8 md:mt-16">
          <span className="h-px flex-1 bg-[#050505]/14" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#050505]/55 whitespace-nowrap">
            Collection System &nbsp;/&nbsp; Packaging &nbsp;/&nbsp; Digital Objects
          </span>
          <span className="h-px flex-1 bg-[#050505]/14" />
        </div>

        {/* 4. Featured image — inset (not full-bleed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-14 md:mb-20">
          <figure className="md:col-span-9 md:col-start-3">
            <img src={images[3].src} alt={images[3].alt} className={imageClass} loading="lazy" />
          </figure>
        </div>

        {/* 5. Three-image editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-14 md:mb-20">
          <figure className="md:col-span-4">
            <img src={images[4].src} alt={images[4].alt} className={imageClass} loading="lazy" />
          </figure>
          <figure className="md:col-span-4 md:translate-y-12">
            <img src={images[5].src} alt={images[5].alt} className={imageClass} loading="lazy" />
          </figure>
          <figure className="md:col-span-4">
            <img src={images[6].src} alt={images[6].alt} className={imageClass} loading="lazy" />
          </figure>
        </div>

        {/* 6. Closing pair — image + closing line */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mt-8 md:mt-16">
          <aside className="md:col-span-4 md:order-1">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-4">
              MSFT50
            </div>
            <p
              className="font-serif-italic text-[#050505]/85"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                lineHeight: 1.25,
                letterSpacing: '-0.015em',
              }}
            >
              A concept store of limited edition swag you don't want to miss.
            </p>
          </aside>
          <figure className="md:col-span-7 md:col-start-6 md:order-2">
            <img src={images[7].src} alt={images[7].alt} className={imageClass} loading="lazy" />
          </figure>
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-32 flex justify-between items-baseline">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45">
            MileZero · Microsoft's Collection
          </span>
        </div>
      </div>
    </div>
  );
}
