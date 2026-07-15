import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const CDN = 'https://static.wixstatic.com/media/';

// Sources in strict source-HTML DOM order (largest srcset candidate where available).
const asset1 = `${CDN}b2eded_239a6073ff034627b7fda1427bbe08a2~mv2.png/v1/crop/x_435,y_0,w_2360,h_1223/fill/w_2360,h_1190,al_c,q_95,enc_avif,quality_auto/Asset%201.png`;
const asset2 = `${CDN}b2eded_795fa93d1ed342ac99ea5dc698571945~mv2.png/v1/fill/w_746,h_656,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png`;
const asset3 = `${CDN}b2eded_e275d23c62c6468b9fce1650e1a52661~mv2.png/v1/fill/w_2288,h_280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%203.png`;
const asset4 = `${CDN}b2eded_0c74db326ac34a05b585b8c36fce8c67~mv2.png/v1/fill/w_2448,h_1792,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%204.png`;
const asset7 = `${CDN}b2eded_c59f3b8d74b64a26b4b879c9086738ad~mv2.png/v1/crop/x_21,y_0,w_986,h_1432/fill/w_758,h_1102,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%207.png`;
const asset8 = `${CDN}b2eded_3b72cc2b727a49ccb8191720239eff71~mv2.png/v1/fill/w_1664,h_1102,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%208.png`;
const assetGif = `${CDN}b2eded_34411e03e6af4934b83a375b0c02437b~mv2.gif`;
const asset10 = `${CDN}b2eded_18e57ca4141549fc875ca3f5e72bc0da~mv2.png/v1/fill/w_1376,h_1208,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2010.png`;
const asset11 = `${CDN}b2eded_69e18d86a54a40838edbfa1ef1c35632~mv2.png/v1/fill/w_1050,h_1424,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2011.png`;
const asset13 = `${CDN}b2eded_d27b486f935c413dbd9ad5735570cc58~mv2.png/v1/fill/w_1368,h_1856,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2013.png`;
const asset12 = `${CDN}b2eded_10317af6a7f741ebbb4d9633b5d1dc97~mv2.png/v1/fill/w_1050,h_1032,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2012.png`;
const asset14 = `${CDN}b2eded_a6f682c0df0d4bc9aacb0fbe3801ed96~mv2.png/v1/fill/w_1042,h_1322,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2014.png`;
const asset15 = `${CDN}b2eded_eed99b4bb645479485cad7aaf3e926c2~mv2.png/v1/crop/x_269,y_162,w_3199,h_1366/fill/w_2448,h_1040,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2015.png`;

const imgClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

export default function OutOfScopeCase() {
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
      >
        <img src={logoSvg} alt="MileZero" className="h-3.5 md:h-4 w-auto max-w-full select-none" />
      </button>

      {/* Source-order content. No invented chapter labels. */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-[120px] md:pt-[160px] pb-20 md:pb-24">
        {/* Editorial hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-6">
              Academy Branding · 2023 · Microsoft
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Out of
              <br />
              Scope
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
              A creative academy where learning lives outside the brief.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              A leading brand story for Microsoft R&amp;D's experiential
              learning academy — built on creativity, craftsmanship, quality,
              simplicity and uniqueness.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />

        {/* 1. Asset 1 (hero image from source) */}
        <figure>
          <img src={asset1} alt="Asset 1" className={imgClass} loading="eager" />
        </figure>

        {/* 3. Asset 2 */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={asset2} alt="Asset 2" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 6. Asset 3 (wide thin) */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={asset3} alt="Asset 3" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 7. Asset 4 */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={asset4} alt="Asset 4" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 8 + 9. Asset 7 and Asset 8 — consecutive, may sit side-by-side on desktop */}
        <div className="pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <figure>
            <img src={asset7} alt="Asset 7" className={imgClass} loading="lazy" />
          </figure>
          <figure>
            <img src={asset8} alt="Asset 8" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 10. Animated gif */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={assetGif} alt="" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 11. Pull quote */}
        <div className="pt-12 md:pt-20">
          <p
            className="font-serif-italic text-[#050505]"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              maxWidth: '900px',
            }}
          >
            Who's affraid of a blank canvas?
          </p>
        </div>

        {/* 12. Design-language paragraph */}
        <div className="pt-6 md:pt-8">
          <p
            className="text-[#050505] max-w-[760px]"
            style={{
              fontSize: 'clamp(15px, 1.4vw, 19px)',
              lineHeight: 1.65,
              letterSpacing: '-0.005em',
            }}
          >
            We chose to create a design language reminiscent of contemporary
            art museums, an atmosphere that ranges from cleanliness and
            simplicity and a unique visual ensemble to each field, with each
            new concept semester being a new theme.
          </p>
        </div>

        {/* 13. Asset 10 */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={asset10} alt="Asset 10" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 14 + 15. Asset 11 and Asset 13 — consecutive in source */}
        <div className="pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <figure>
            <img src={asset11} alt="Asset 11" className={imgClass} loading="lazy" />
          </figure>
          <figure>
            <img src={asset13} alt="Asset 13" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 16 + 17. Asset 12 and Asset 14 — consecutive in source */}
        <div className="pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <figure>
            <img src={asset12} alt="Asset 12" className={imgClass} loading="lazy" />
          </figure>
          <figure>
            <img src={asset14} alt="Asset 14" className={imgClass} loading="lazy" />
          </figure>
        </div>

        {/* 18. Asset 15 (wide closer) */}
        <div className="pt-12 md:pt-20">
          <figure>
            <img src={asset15} alt="Asset 15" className={imgClass} loading="lazy" />
          </figure>
        </div>
      </div>
    </div>
  );
}
