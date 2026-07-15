import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const CDN = 'https://static.wixstatic.com/media/';

// Items rendered in strict source DOM order from
// /Deep Instinct/Deep Instinct.html (consecutive duplicates de-duped).
type Item =
  | { kind: 'img'; src: string; alt?: string }
  | { kind: 'video'; src: string; poster?: string; alt?: string }
  | { kind: 'text'; value: string }
  | { kind: 'pair'; a: { src: string; alt?: string }; b: { src: string; alt?: string } }
  | { kind: 'segments'; items: { name: string; src: string }[] };

const items: Item[] = [
  // Duck — first content piece after hero
  {
    kind: 'img',
    src: `${CDN}b2eded_3ff0c22ae7f74b5a9d7b53ffab19bb35~mv2.gif`,
    alt: 'Deep Instinct — duck',
  },

  {
    kind: 'img',
    src: `${CDN}b2eded_61f9c3e3f3414f1780a97a1644557dd3~mv2.png/v1/crop/x_271,y_0,w_2766,h_1842/fill/w_1956,h_1284,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-21.png`,
    alt: 'Deep Instinct',
  },

  { kind: 'text', value: 'BRAND GUIDE' },
  { kind: 'text', value: 'VISUAL ELEMENTS' },

  // Two consecutive small images — desktop pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_fac899945ce1437ea05cc5ae66627c16~mv2.png/v1/crop/x_1190,y_0,w_3670,h_4500/fill/w_734,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/mugs.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_60ef7a2fd8304fd2bae0c0aa109b3b7d~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TAPE.jpg`,
      alt: 'Deep Instinct',
    },
  },

  { kind: 'text', value: 'CAMPIGAN ADS' },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_f035c527ba834d7e9a63be04a4245fa7~mv2.jpg/v1/crop/x_338,y_144,w_2349,h_1688/fill/w_1098,h_790,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Billboard01%20copy.jpg`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_d97d121c4a054fa0a8918e646e9dc5f7~mv2.jpg/v1/crop/x_1222,y_0,w_3165,h_3000/fill/w_834,h_790,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b2eded_d97d121c4a054fa0a8918e646e9dc5f7~mv2.jpg`,
      alt: 'Deep Instinct',
    },
  },

  { kind: 'text', value: 'SOCIAL' },

  {
    kind: 'img',
    src: `${CDN}b2eded_6487ec6de40445e5aeb4125180232263~mv2.png/v1/fill/w_2042,h_992,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/b2eded_6487ec6de40445e5aeb4125180232263~mv2.png`,
    alt: 'Deep Instinct',
  },

  { kind: 'text', value: 'EMPLOYEE BRANDING' },
  { kind: 'text', value: 'SEGMENTS LOGOS' },

  {
    kind: 'img',
    src: `${CDN}b2eded_97763416877246e3b2f7e762931dc11a~mv2.gif`,
    alt: 'Deep Instinct',
  },

  { kind: 'text', value: 'COLOR PALETTE' },

  {
    kind: 'img',
    src: `${CDN}b2eded_b2acedc1011041a484d33bf75c89db06~mv2.png/v1/fill/w_882,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Colors.png`,
    alt: 'Deep Instinct',
  },

  { kind: 'text', value: 'OFFICE POSTERS' },

  // Single wide image
  {
    kind: 'img',
    src: `${CDN}b2eded_d991cc7c9f4742eea676ef04d53b13b7~mv2.png/v1/crop/x_63,y_0,w_2017,h_967/fill/w_1700,h_815,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-03.png`,
    alt: 'Deep Instinct',
  },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_e8d7a347231c4c8a9e0fc43c942fb8e4~mv2.png/v1/crop/x_56,y_56,w_924,h_850/fill/w_924,h_845,al_c,q_90,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-06.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_8468b4373c1a4a8490af8794526a51db~mv2.png/v1/crop/x_152,y_0,w_729,h_965/fill/w_729,h_962,al_c,q_90,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-04.png`,
      alt: 'Deep Instinct',
    },
  },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_dc305515c3454fd3968671cf504d65ce~mv2.png/v1/fill/w_630,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-05.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_8d0b88b18f0c45ba92750dab63696fd6~mv2.png/v1/fill/w_628,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-07.png`,
      alt: 'Deep Instinct',
    },
  },

  // Single (odd one out before next text block)
  {
    kind: 'img',
    src: `${CDN}b2eded_7d4e5b99ac7346b2bbd125cd443a7a2d~mv2.png/v1/fill/w_630,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Public_Speaking.png`,
    alt: 'Deep Instinct',
  },

  { kind: 'text', value: 'GAMING ROOM' },

  // Wide single
  {
    kind: 'img',
    src: `${CDN}b2eded_67b370aa69ab4b96894d9fef7c9049f8~mv2.png/v1/fill/w_1960,h_786,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-22.png`,
    alt: 'Deep Instinct',
  },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_52e65400de56434daf5869154385298e~mv2.png/v1/fill/w_966,h_700,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-23.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_bf5ac4fe30c045a8965647986cd039f1~mv2.png/v1/fill/w_966,h_700,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-24.png`,
      alt: 'Deep Instinct',
    },
  },

  { kind: 'text', value: 'PEEP HOLE' },

  {
    kind: 'video',
    src: '/deep-instinct/file-3.mp4',
    poster: `${CDN}b2eded_638d7e0cbf9b4aeea87dd7d7ca99d6ea~mv2.png/v1/crop/x_0,y_287,w_1408,h_1590/fill/w_644,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-45.png`,
    alt: 'Deep Instinct — Peep Hole',
  },

  { kind: 'text', value: 'COMMERCIAL ART' },
  { kind: 'text', value: 'CHILDREN BOOK' },

  // Single
  {
    kind: 'img',
    src: `${CDN}b2eded_005ca2805f86483f84b8509426029982~mv2.png/v1/fill/w_836,h_766,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-08.png`,
    alt: 'Deep Instinct',
  },

  // Two consecutive — pair (book cover + back)
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_68f466987df44c40a2f2f604bc2d4d3a~mv2.png/v1/fill/w_908,h_740,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/cover.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_0d9f6ca71240489aaecd21b637d0b60e~mv2.png/v1/crop/x_3,y_56,w_1667,h_1226/fill/w_1014,h_740,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/back.png`,
      alt: 'Deep Instinct',
    },
  },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_46ed8060b0ca417f8c04cd4e9277514e~mv2.png/v1/fill/w_632,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-17.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_acc62f8b3f77477e85fd7b53bb0e52e7~mv2.png/v1/fill/w_632,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-18.png`,
      alt: 'Deep Instinct',
    },
  },

  {
    kind: 'img',
    src: `${CDN}b2eded_c2217bcca787455f8d12181d6033132e~mv2.png/v1/fill/w_634,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/P3.png`,
    alt: 'Deep Instinct',
  },

  // Six segment thumbnails appearing consecutively, then six labels in same order
  {
    kind: 'segments',
    items: [
      {
        name: 'Smartina',
        src: `${CDN}b2eded_513f830002644f1c8b42e27979f3da70~mv2.png/v1/fill/w_190,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-15.png`,
      },
      {
        name: 'Arty',
        src: `${CDN}b2eded_8a54b7f7a86a4bb49cb55316e9285c0d~mv2.png/v1/fill/w_202,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Arty_01.png`,
      },
      {
        name: 'Predicto',
        src: `${CDN}b2eded_ad01a77f9bad4f2782b1923c56533612~mv2.png/v1/fill/w_212,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Predicto_01.png`,
      },
      {
        name: 'Defensa',
        src: `${CDN}b2eded_b5c0ce1f96914fd98f62e6856c7e73c4~mv2.png/v1/fill/w_202,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Or%2BDefensa.png`,
      },
      {
        name: 'Ducky',
        src: `${CDN}b2eded_fe7ea86a64f64de180376143aa82143d~mv2.png/v1/fill/w_148,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WD_WEBPAGE_DeepInstinct-25.png`,
      },
      {
        name: 'CyberEvil',
        src: `${CDN}b2eded_3ab40da8efdb485b88037cb00b46989b~mv2.png/v1/fill/w_204,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CyberEvil_01.png`,
      },
    ],
  },

  { kind: 'text', value: 'THANK YOU!' },

  // Two consecutive — pair
  {
    kind: 'pair',
    a: {
      src: `${CDN}b2eded_e71b1e9bfb1c4b0aaf85859100210575~mv2.png/v1/crop/x_0,y_190,w_1434,h_1503/fill/w_722,h_754,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Laptop_Stickers%20copy.png`,
      alt: 'Deep Instinct',
    },
    b: {
      src: `${CDN}b2eded_d9eec5d109d044bb8cb127eff2f94ead~mv2.png/v1/crop/x_30,y_0,w_1068,h_672/fill/w_1068,h_672,al_c,q_90,enc_avif,quality_auto/Postcard.png`,
      alt: 'Deep Instinct',
    },
  },

  {
    kind: 'img',
    src: `${CDN}b2eded_c2ed8348a7794b8b827a34988e7fcaf1~mv2.png/v1/crop/x_474,y_0,w_3656,h_3461/fill/w_786,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/10-46.png`,
    alt: 'Deep Instinct',
  },
];

const imgClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

// Heuristic: a "label" is a SHORT all-caps or short heading-style string.
function isLabel(value: string): boolean {
  if (value.length > 40) return false;
  const trimmed = value.trim();
  if (trimmed === 'THANK YOU!') return true;
  if (trimmed.endsWith(':')) return false;
  // All caps test (allow spaces, punctuation)
  return /^[A-Z0-9 &!]+$/.test(trimmed);
}

export default function DeepInstinctCase() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#050505] overflow-x-hidden">
      {/* Floating chrome — back arrow (top-left) */}
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
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Floating chrome — MileZero pill (top-right) */}
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
      >
        <img
          src={logoSvg}
          alt="MileZero"
          className="h-3.5 md:h-4 w-auto max-w-full select-none"
        />
      </button>

      <main className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-[120px] md:pt-[160px] pb-24 md:pb-32">
        {/* Editorial hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-6">
              Employee Branding · 2022 · Deep Instinct
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Deep
              <br />
              Instinct
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
              Employer branding for a cyber company — bold, ominous, alive.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              Built on archetypes and strategic stories around creativity,
              authenticity and mental fortitude. The duck — a developer
              mascot with a third eye — anchors a world of humorous, bold
              characters living in chaotic, apocalyptic scenes.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {items.map((item, i) => {
          if (item.kind === 'img') {
            // Duck — page opener: editorial mark, modest but present
            if (i === 0) {
              return (
                <section key={i} className="first:pt-0">
                  <figure className="flex justify-center">
                    <img
                      src={item.src}
                      alt={item.alt ?? ''}
                      loading="eager"
                      className="block w-auto h-auto max-w-[220px] sm:max-w-[260px] md:max-w-[320px] max-h-[360px] mx-auto"
                    />
                  </figure>
                </section>
              );
            }
            return (
              <section key={i} className="pt-12 md:pt-20 first:pt-0">
                <figure>
                  <img
                    src={item.src}
                    alt={item.alt ?? ''}
                    loading="lazy"
                    className={imgClass}
                  />
                </figure>
              </section>
            );
          }

          if (item.kind === 'video') {
            return (
              <section key={i} className="pt-12 md:pt-20 first:pt-0">
                <figure className="flex justify-center">
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                    className="w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block"
                  />
                </figure>
              </section>
            );
          }

          if (item.kind === 'pair') {
            return (
              <section key={i} className="pt-12 md:pt-20 first:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <figure>
                    <img
                      src={item.a.src}
                      alt={item.a.alt ?? ''}
                      loading="lazy"
                      className={imgClass}
                    />
                  </figure>
                  <figure>
                    <img
                      src={item.b.src}
                      alt={item.b.alt ?? ''}
                      loading="lazy"
                      className={imgClass}
                    />
                  </figure>
                </div>
              </section>
            );
          }

          if (item.kind === 'segments') {
            return (
              <section key={i} className="pt-12 md:pt-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
                  {item.items.map((s) => (
                    <figure key={s.name} className="flex flex-col items-center">
                      <img
                        src={s.src}
                        alt={s.name}
                        loading="lazy"
                        className={`${imgClass} bg-[#FCF9F4]`}
                      />
                      <figcaption
                        className="mt-4 text-center text-[#050505]"
                        style={{
                          fontSize: 'clamp(13px, 1vw, 15px)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {s.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            );
          }

          // text
          const v = item.value;
          if (isLabel(v)) {
            return (
              <section
                key={i}
                className="pt-12 md:pt-20 flex items-center gap-5"
              >
                <span
                  className="text-[#050505] whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(15px, 1.4vw, 19px)',
                    letterSpacing: '0.18em',
                    fontWeight: 500,
                  }}
                >
                  {v}
                </span>
                <span className="h-px flex-1 bg-[#050505]/14" />
              </section>
            );
          }

          // Meta key (ends with ":") rendered together with following value
          // would require pairing; we render each as its own line here in source
          // order, which preserves DOM order without inventing structure.
          if (v.endsWith(':')) {
            return (
              <section key={i} className="pt-12 md:pt-20 first:pt-0">
                <div
                  className="text-[#050505]/55 uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.28em',
                  }}
                >
                  {v.replace(/:\s*$/, '')}
                </div>
              </section>
            );
          }

          // Short non-label text following a "key:" — render as inline meta value
          if (v.length < 40) {
            return (
              <section key={i} className="pt-3">
                <div
                  className="text-[#050505]"
                  style={{
                    fontSize: 'clamp(15px, 1.3vw, 17px)',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {v}
                </div>
              </section>
            );
          }

          // Long-form paragraph
          return (
            <section key={i} className="pt-12 md:pt-20">
              <p
                className="text-[#050505]"
                style={{
                  fontSize: 'clamp(15px, 1.3vw, 19px)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.005em',
                  maxWidth: '720px',
                }}
              >
                {v}
              </p>
            </section>
          );
        })}
      </main>
    </div>
  );
}
