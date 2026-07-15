import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const CDN = 'https://static.wixstatic.com/media/';

type Item =
  | { type: 'img'; src: string; alt: string; size: 'logo' | 'small' | 'medium' | 'wide' }
  | { type: 'meta'; parts: { text: string; italic: boolean }[] }
  | { type: 'p'; text: string }
  | { type: 'lead'; text: string }
  | { type: 'h'; text: string };

// Source: /public/bonds.html — strict DOM order, largest srcset candidate per <img>.
const items: Item[] = [
  { type: 'img', size: 'logo',  src: `${CDN}b2eded_d34e765916ce48e09fd1c0d2dbd94977~mv2.png/v1/fill/w_1148,h_468,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO.png`, alt: 'LOGO' },
  {
    type: 'meta',
    parts: [
      { text: 'Project:', italic: true },
      { text: ' Strategy & Branding   |   ', italic: false },
      { text: 'Client:', italic: true },
      { text: ' Microsoft (Bonds)', italic: false },
    ],
  },
  { type: 'p', text:
      'Microsoft Research and Development Israel has established various professional technological communities and asked us to create a branding strategy and strong visual language that would produce differentiation between every community and attract its relevant audience.' },
  { type: 'lead', text:
      'In recent years, technological communities in high-tech companies have become a key asset in strengthening their brand, bringing together both professional communities, and recruiting talents.' },

  { type: 'h', text: 'FrontEnd' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_ecf1d12bba044434a8e25780a47fbeb5~mv2.png/v1/fill/w_2700,h_1435,al_c,q_95,enc_avif,quality_auto/Bonds_Web-02.png`, alt: 'Bonds — FrontEnd' },
  { type: 'p', text:
      "We understand that every technological community is a whole world, and each community has characteristics which are very different to the others, so we decided to create a brand that doesn't have a single design language." },
  { type: 'p', text: 'What is common to all communities is that everyone is different…' },
  { type: 'p', text: 'Technology.' },

  { type: 'h', text: 'Kubernetes' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_75ad3f8b411f4cf1b0a0a6b2a25e7c02~mv2.png/v1/fill/w_2712,h_1436,al_c,q_95,enc_avif,quality_auto/Bonds_Web-03.png`, alt: 'Bonds — Kubernetes' },
  { type: 'p', text:
      "Only this time, we chose to take the technology out of the branding — because it already exists there. No one has to tell anyone it's technological." },

  { type: 'h', text: 'DataScience' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_c4afe1b1000f47d48109c88e65d061f9~mv2.png/v1/fill/w_2720,h_1440,al_c,q_95,enc_avif,quality_auto/Bonds_Web-04.png`, alt: 'Bonds — DataScience' },
  { type: 'p', text:
      'It was more important for us to communicate to the people behind the community, to their thoughts, to their passions, their private jokes, and to create a world that is invisible.' },

  { type: 'img', size: 'medium', src: `${CDN}b2eded_1806ddc4ae4c492fb7cf93da7b37602b~mv2.png/v1/fill/w_1172,h_1360,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%208.png`, alt: 'Asset 8' },
  { type: 'img', size: 'medium', src: `${CDN}b2eded_2cfbbdf70ffd4e08bfded9ecb719dae2~mv2.png/v1/fill/w_1266,h_882,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%206.png`, alt: 'Asset 6' },
  { type: 'img', size: 'medium', src: `${CDN}b2eded_856ed4b0ed15487bb0a5cad0d22cbca9~mv2.png/v1/fill/w_1266,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%207.png`, alt: 'Asset 7' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_8f44714b2e5f4a7992aadf317cff797a~mv2.png/v1/crop/x_0,y_10,w_3216,h_2341/fill/w_2500,h_1800,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%209.png`, alt: 'Asset 9' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_c81e916733e247beba494651e62635b9~mv2.png/v1/fill/w_2486,h_1080,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2016.png`, alt: 'Asset 16' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_33dc909e36124632bb833f6e42ec61e1~mv2.png/v1/fill/w_2488,h_1120,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2010.png`, alt: 'Asset 10' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_9438589ecb924da39e883a60e724b709~mv2.png/v1/fill/w_2486,h_1098,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2011.png`, alt: 'Asset 11' },
  { type: 'img', size: 'medium', src: `${CDN}b2eded_1b790ec8c11d49549f350af360c3ceea~mv2.png/v1/fill/w_1748,h_1740,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2012.png`, alt: 'Asset 12' },
  { type: 'img', size: 'wide', src: `${CDN}b2eded_23c4e2236bc240abbc7a07522cdfc719~mv2.png/v1/crop/x_146,y_0,w_3855,h_1031/fill/w_1740,h_466,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2014.png`, alt: 'Asset 14' },
];

const imgClass =
  'w-auto h-auto max-w-full max-h-[68vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

// Spacing rhythm: relationship between previous and current item determines gap.
function gapClass(prev: Item | undefined, curr: Item): string {
  if (!prev) return '';
  // Heading → its wide image: tight grouping
  if (prev.type === 'h' && curr.type === 'img') return 'mt-5 md:mt-7';
  // Wide image → next section heading: full breath
  if (prev.type === 'img' && curr.type === 'h') return 'mt-16 md:mt-24';
  // Consecutive paragraphs (continuation): tight
  if (prev.type === 'p' && curr.type === 'p') return 'mt-3 md:mt-4';
  // Meta → first body paragraph: smaller breath
  if (prev.type === 'meta' && (curr.type === 'p' || curr.type === 'lead')) return 'mt-7 md:mt-10';
  // Lead/p → following content: medium breath
  if ((prev.type === 'p' || prev.type === 'lead') && curr.type === 'img') return 'mt-10 md:mt-14';
  // Image → paragraph: medium breath
  if (prev.type === 'img' && (curr.type === 'p' || curr.type === 'lead')) return 'mt-10 md:mt-14';
  // Logo → meta: medium breath
  if (prev.type === 'img' && curr.type === 'meta') return 'mt-8 md:mt-12';
  // Image → image (no pair): comfortable
  if (prev.type === 'img' && curr.type === 'img') return 'mt-10 md:mt-14';
  // Default
  return 'mt-10 md:mt-14';
}

// Pair-merging: two consecutive small/medium images render as a 2-up grid on desktop.
function canPair(a: Item, b: Item): boolean {
  return (
    a.type === 'img' &&
    b.type === 'img' &&
    (a.size === 'small' || a.size === 'medium') &&
    (b.size === 'small' || b.size === 'medium')
  );
}

type ImgSize = 'logo' | 'small' | 'medium' | 'wide';

function imgWrapperMaxW(size: ImgSize): string {
  switch (size) {
    case 'logo':
      return 'max-w-[440px]';
    case 'small':
      return 'max-w-[380px]';
    case 'medium':
      return 'max-w-[820px]';
    case 'wide':
    default:
      return 'max-w-full';
  }
}

export default function BondsCase() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blocks: { node: React.ReactNode; gapPrev: Item | undefined; gapCurr: Item }[] = [];
  let i = 0;
  while (i < items.length) {
    const it = items[i];
    const prev = i > 0 ? items[i - 1] : undefined;
    const next = items[i + 1];

    if (it.type === 'img' && next && canPair(it, next)) {
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
            <img src={it.src} alt={it.alt} className={imgClass} loading="lazy" />
            {next.type === 'img' && (
              <img src={next.src} alt={next.alt} className={imgClass} loading="lazy" />
            )}
          </div>
        ),
      });
      i += 2;
      continue;
    }

    if (it.type === 'img') {
      const wrapMaxW = imgWrapperMaxW(it.size);
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node:
          it.size === 'logo' ? (
            <div className={`${wrapMaxW} mx-auto`}>
              <img
                src={it.src}
                alt={it.alt}
                className="w-full h-auto block"
                loading="eager"
                style={{ filter: 'invert(1)' }}
              />
            </div>
          ) : (
            <div className={`${wrapMaxW} mx-auto`}>
              <img src={it.src} alt={it.alt} className={imgClass} loading="lazy" />
            </div>
          ),
      });
    } else if (it.type === 'meta') {
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node: (
          <p
            className="text-center text-[#050505]"
            style={{
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              lineHeight: 1.7,
              letterSpacing: '-0.005em',
            }}
          >
            {it.parts.map((p, idx) =>
              p.italic ? (
                <span key={idx} className="font-serif-italic">{p.text}</span>
              ) : (
                <span key={idx}>{p.text}</span>
              )
            )}
          </p>
        ),
      });
    } else if (it.type === 'lead') {
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node: (
          <p
            className="mx-auto text-center text-[#050505] max-w-[760px]"
            style={{
              fontSize: 'clamp(17px, 1.55vw, 21px)',
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
              fontWeight: 500,
            }}
          >
            {it.text}
          </p>
        ),
      });
    } else if (it.type === 'p') {
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node: (
          <p
            className="mx-auto text-center text-[#050505] max-w-[680px]"
            style={{
              fontSize: 'clamp(15px, 1.15vw, 17px)',
              lineHeight: 1.65,
              letterSpacing: '-0.005em',
            }}
          >
            {it.text}
          </p>
        ),
      });
    } else if (it.type === 'h') {
      blocks.push({
        gapPrev: prev,
        gapCurr: it,
        node: (
          <h2
            className="text-center font-serif-italic text-[#050505]"
            style={{
              fontSize: 'clamp(22px, 3.2vw, 38px)',
              lineHeight: 1.2,
              letterSpacing: '0.32em',
              fontWeight: 300,
              textTransform: 'none',
            }}
          >
            {it.text}
          </h2>
        ),
      });
    }

    i += 1;
  }

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#050505] overflow-x-hidden">
      {/* Floating chrome — back arrow */}
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

      {/* Floating chrome — MileZero pill */}
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
        <img src={logoSvg} alt="MileZero" className="h-3.5 md:h-4 w-auto max-w-full select-none" />
      </button>

      <main className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 pt-[104px] md:pt-[140px] pb-20 md:pb-28">
        {blocks.map((b, idx) => (
          <div key={idx} className={gapClass(b.gapPrev, b.gapCurr)}>
            {b.node}
          </div>
        ))}
      </main>
    </div>
  );
}
