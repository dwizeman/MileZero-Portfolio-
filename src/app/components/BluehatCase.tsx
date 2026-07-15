import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const CDN = 'https://static.wixstatic.com/media/';

// ----- WEST: Blue Hat West.html — DOM order (top to bottom) -----
const west = {
  wordmark: `${CDN}b2eded_ec586d7d8c2c45a2928721fd224bd6ae~mv2.png/v1/fill/w_1284,h_418,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%201.png`,
  emblem: `${CDN}b2eded_38060f03a89c41f9b53b4184608195f2~mv2.png/v1/fill/w_358,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%206.png`,
  symbolA: `${CDN}b2eded_7a078c1e38c1461da31f4b321213dfe4~mv2.png/v1/fill/w_666,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%203.png`,
  symbolB: `${CDN}b2eded_003aaf709d1242d0821e9505aa76d35d~mv2.png/v1/fill/w_666,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%205.png`,
  posterA: `${CDN}b2eded_9ed3194a77ef4496a923a0220ab52cde~mv2.png/v1/fill/w_698,h_992,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%204.png`,
  posterB: `${CDN}b2eded_182229faeb3d44f2bc7d3a81e773c400~mv2.png/v1/crop/x_792,y_87,w_1120,h_1680/fill/w_758,h_1112,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2023.png`,
  scene: `${CDN}b2eded_c5b552e6ce744dcbbe59a287939b1537~mv2.png/v1/fill/w_1368,h_1112,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2021.png`,
  videoPoster: `${CDN}b2eded_661349dfc8f44451853f47dc3d3d2dd0f000.jpg/v1/fill/w_960,h_521,al_c,q_85,enc_avif,quality_auto/b2eded_661349dfc8f44451853f47dc3d3d2dd0f000.jpg`,
  videoMp4: `https://video.wixstatic.com/video/b2eded_661349dfc8f44451853f47dc3d3d2dd0/720p/mp4/file.mp4`,
  hero: `${CDN}b2eded_5d89236af2b74705b25d1dbd81c24001~mv2.png/v1/fill/w_1360,h_898,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2016.png`,
  asset19: `${CDN}b2eded_8ba68b20477745c9a49a57a591cb55d6~mv2.png/v1/fill/w_754,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2019.png`,
  asset11: `${CDN}b2eded_9d222077f0634178a7ff31ca6f08cc94~mv2.png/v1/crop/x_0,y_68,w_3147,h_1180/fill/w_754,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2011.png`,
  square: `${CDN}b2eded_bfb55bf58ed549608fb45bf27934e450~mv2.png/v1/fill/w_1200,h_1136,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2014.png`,
  banner: `${CDN}b2eded_ce235b6c85864fb092cf5364826d2e39~mv2.png/v1/fill/w_1911,h_920,al_c,q_90,enc_avif,quality_auto/Asset%202.png`,
};

// ----- EAST: Blue Hat East.html — DOM order (top to bottom) -----
const east = {
  emblem: `${CDN}b2eded_c89ede78fae04253b9fa78335a6ca076~mv2.png/v1/fill/w_838,h_796,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%201.png`,
  wordmark: `${CDN}b2eded_6d19cfd765f04497a12829ae7989f21d~mv2.png/v1/fill/w_1080,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%202.png`,
  iconA: `${CDN}b2eded_be79bd09b7e445f3b7aee45e470a42bc~mv2.png/v1/fill/w_766,h_616,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%205.png`,
  iconB: `${CDN}b2eded_1298aa1154dd40c79863281ff2e76a4e~mv2.png/v1/fill/w_768,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%206.png`,
  iconC: `${CDN}b2eded_cc9a1a4250ac497584ae7fadab7615e9~mv2.png/v1/fill/w_766,h_612,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%207.png`,
  iconD: `${CDN}b2eded_d4706e8e9b00406ab0b4ad69d1930837~mv2.png/v1/fill/w_768,h_612,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%208.png`,
  banner: `${CDN}b2eded_f909fd5b87584b0f92cd80ab50100516~mv2.png/v1/fill/w_1502,h_400,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%209.png`,
  video1Poster: `${CDN}b2eded_da7c08d2af074e14ab2fd01acd97d6fdf000.jpg/v1/fill/w_960,h_681,al_c,q_85,enc_avif,quality_auto/b2eded_da7c08d2af074e14ab2fd01acd97d6fdf000.jpg`,
  video1Mp4: `https://video.wixstatic.com/video/b2eded_da7c08d2af074e14ab2fd01acd97d6fd/720p/mp4/file.mp4`,
  poster1: `${CDN}b2eded_a9706b9a4e5b47c0aadebbd1cfc85549~mv2.png/v1/fill/w_580,h_822,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2016.png`,
  poster5: `${CDN}b2eded_bbbe2fac653a45e5b8621a00e21c98d8~mv2.png/v1/fill/w_532,h_822,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2017.png`,
  closing: `${CDN}b2eded_842500aed49b40439e0a7b7e4a32aa47~mv2.png/v1/crop/x_0,y_0,w_1203,h_938/fill/w_662,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2019.png`,
  poster4: `${CDN}b2eded_f2d3c6589b304dcebd3a4265830d275a~mv2.png/v1/fill/w_452,h_660,al_c,lg_1,q_85,enc_avif,quality_auto/Asset%204.png`,
  poster3: `${CDN}b2eded_330bb2624b854b2c923a922e55bafb23~mv2.jpg/v1/fill/w_556,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.jpg`,
  video2Poster: `${CDN}b2eded_eff1709b21394e768c8a1e985b37ada7f000.jpg/v1/fill/w_960,h_700,al_c,q_85,enc_avif,quality_auto/b2eded_eff1709b21394e768c8a1e985b37ada7f000.jpg`,
  video2Mp4: `https://video.wixstatic.com/video/b2eded_eff1709b21394e768c8a1e985b37ada7/720p/mp4/file.mp4`,
  hero: `${CDN}b2eded_1e08c8a0b0b740cc8d69c0c17e9c837c~mv2.png/v1/fill/w_1488,h_1469,al_c,q_95,enc_avif,quality_auto/Asset%2018.png`,
  video3Poster: `${CDN}b2eded_78c23405babc4c92a4dce5d12dcf38b7f000.jpg/v1/fill/w_960,h_685,al_c,q_85,enc_avif,quality_auto/b2eded_78c23405babc4c92a4dce5d12dcf38b7f000.jpg`,
  video3Mp4: `https://video.wixstatic.com/video/b2eded_78c23405babc4c92a4dce5d12dcf38b7/720p/mp4/file.mp4`,
  poster6: `${CDN}b2eded_d40e62eddb5241a3890ce0743988d11a~mv2.png/v1/fill/w_580,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2020.png`,
  poster7: `${CDN}b2eded_10e3862bca1b49d59ed6f27dd380a00e~mv2.png/v1/fill/w_552,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2021.png`,
  scene: `${CDN}b2eded_83c85057e36544d7bd7373eb68cb4b00~mv2.png/v1/fill/w_1126,h_798,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2024.png`,
  video4Poster: `${CDN}b2eded_bd6dafb851fd482a85ef3f561f64e0d9f000.jpg/v1/fill/w_960,h_653,al_c,q_85,enc_avif,quality_auto/b2eded_bd6dafb851fd482a85ef3f561f64e0d9f000.jpg`,
  video4Mp4: `https://video.wixstatic.com/video/b2eded_bd6dafb851fd482a85ef3f561f64e0d9/720p/mp4/file.mp4`,
  video5Poster: `${CDN}b2eded_634990d6a19846b09b26121424d613bbf000.jpg/v1/fill/w_923,h_720,al_c,q_85,enc_avif,quality_auto/b2eded_634990d6a19846b09b26121424d613bbf000.jpg`,
  video5Mp4: `https://video.wixstatic.com/video/b2eded_634990d6a19846b09b26121424d613bb/720p/mp4/file.mp4`,
  poster2: `${CDN}b2eded_2e56a65cd6634debabf8a169cd32335a~mv2.jpg/v1/fill/w_572,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.jpg`,
  poster8: `${CDN}b2eded_b1dfef4cc8574e229302a777784f96df~mv2.png/v1/fill/w_574,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%2023.png`,
};

const imgClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

const westCopy =
  'Imagine what would happen if the media and visual language of famous dictatorships had come to life in modern times? In the dictatorial state, you can stay calm in the knowledge your information is kept safe. Consequently, that also means the information you are exposed to is limited and always under supervision of the state. We created an official emblem that combines security worlds with national patriotic elements. The branding concept was — Propaganda, which was reflected in the branding of walls and dining complexes, patriotic posters, and propaganda films that oppose the principles of the neighboring state.';

const eastCopy =
  'The Democratic state where freedom of information is open to everyone — is a more advanced state of visual visibility and symbolic meaning. As in any country where all information is open to everyone, there are some that use that information to infringe on the privacy of us all, and we have no control over what hackers and commercial entities are doing with it. The country is characterized by great commercial noise, rich content and advertisements, huge screens broadcasting inventive commercials of the future in video and broadly displayed posters.';

export default function BluehatCase() {
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

      {/* ============================================================ */}
      {/* WEST — Blue Hat West.html */}
      {/* ============================================================ */}
      <section className="bg-[#FCF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 md:pt-20 pb-20 md:pb-32">
          {/* Eyebrow */}
          <div className="text-[10px] tracking-[0.28em] uppercase text-[#050505]/55 mb-8 md:mb-12 pt-16 md:pt-20">
            Blue Hat · 2023 · Speculative Branding
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(40px,7vw,88px)] leading-[1.02] tracking-[-0.02em] mb-10 md:mb-14">
            The Western Republic of BlueHat
          </h1>

          {/* Wordmark */}
          <div className="mb-10 md:mb-14">
            <img src={west.wordmark} alt="Western Republic of BlueHat wordmark" className={imgClass} />
          </div>

          {/* Body copy */}
          <div className="max-w-[760px] mb-14 md:mb-20">
            <p className="font-serif-italic text-[clamp(15px,1.4vw,19px)] leading-[1.6] text-[#050505]/80">
              {westCopy}
            </p>
          </div>

          {/* Emblem */}
          <div className="mb-10 md:mb-14 flex justify-center">
            <img
              src={west.emblem}
              alt="Western emblem"
              className={`${imgClass} max-w-[420px]`}
            />
          </div>

          {/* Symbol pair (consecutive small images side-by-side on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={west.symbolA} alt="Western symbol A" className={imgClass} />
            <img src={west.symbolB} alt="Western symbol B" className={imgClass} />
          </div>

          {/* Poster A */}
          <div className="mb-10 md:mb-14">
            <img src={west.posterA} alt="Western poster A" className={imgClass} />
          </div>

          {/* Poster B */}
          <div className="mb-10 md:mb-14">
            <img src={west.posterB} alt="Western poster B" className={imgClass} />
          </div>

          {/* Scene */}
          <div className="mb-10 md:mb-14">
            <img src={west.scene} alt="Western scene" className={imgClass} />
          </div>

          {/* Video — propaganda film */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={west.videoMp4}
              poster={west.videoPoster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Hero */}
          <div className="mb-10 md:mb-14">
            <img src={west.hero} alt="Western hero composition" className={imgClass} />
          </div>

          {/* Asset 19 + Asset 11 (consecutive small images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={west.asset19} alt="Western asset 19" className={imgClass} />
            <img src={west.asset11} alt="Western asset 11" className={imgClass} />
          </div>

          {/* Square */}
          <div className="mb-10 md:mb-14">
            <img src={west.square} alt="Western square composition" className={imgClass} />
          </div>

          {/* Banner */}
          <div className="mb-0">
            <img src={west.banner} alt="Western banner" className={imgClass} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EAST — Blue Hat East.html (subtle separator, no label) */}
      {/* ============================================================ */}
      <section className="bg-[#FCF9F4]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 md:pt-20 pb-24 md:pb-40">
          {/* Title */}
          <h2 className="font-serif text-[clamp(40px,7vw,88px)] leading-[1.02] tracking-[-0.02em] mb-10 md:mb-14">
            East BlueHat
          </h2>

          {/* Emblem */}
          <div className="mb-10 md:mb-14 flex justify-center">
            <img
              src={east.emblem}
              alt="East BlueHat emblem"
              className={`${imgClass} max-w-[520px]`}
            />
          </div>

          {/* Wordmark */}
          <div className="mb-10 md:mb-14">
            <img src={east.wordmark} alt="East BlueHat wordmark" className={imgClass} />
          </div>

          {/* Body copy */}
          <div className="max-w-[760px] mb-14 md:mb-20">
            <p className="font-serif-italic text-[clamp(15px,1.4vw,19px)] leading-[1.6] text-[#050505]/80">
              {eastCopy}
            </p>
          </div>

          {/* Icon pair A/B */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={east.iconA} alt="East icon A" className={imgClass} />
            <img src={east.iconB} alt="East icon B" className={imgClass} />
          </div>

          {/* Icon pair C/D */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={east.iconC} alt="East icon C" className={imgClass} />
            <img src={east.iconD} alt="East icon D" className={imgClass} />
          </div>

          {/* Banner */}
          <div className="mb-10 md:mb-14">
            <img src={east.banner} alt="East banner" className={imgClass} />
          </div>

          {/* Video 1 */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={east.video1Mp4}
              poster={east.video1Poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Poster 1 + Poster 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={east.poster1} alt="East poster 1" className={imgClass} />
            <img src={east.poster5} alt="East poster 5" className={imgClass} />
          </div>

          {/* Closing scene */}
          <div className="mb-10 md:mb-14">
            <img src={east.closing} alt="East closing scene" className={imgClass} />
          </div>

          {/* Poster 4 + Poster 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={east.poster4} alt="East poster 4" className={imgClass} />
            <img src={east.poster3} alt="East poster 3" className={imgClass} />
          </div>

          {/* Video 2 */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={east.video2Mp4}
              poster={east.video2Poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Hero */}
          <div className="mb-10 md:mb-14">
            <img src={east.hero} alt="East hero composition" className={imgClass} />
          </div>

          {/* Video 3 */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={east.video3Mp4}
              poster={east.video3Poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Poster 6 + Poster 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            <img src={east.poster6} alt="East poster 6" className={imgClass} />
            <img src={east.poster7} alt="East poster 7" className={imgClass} />
          </div>

          {/* Scene */}
          <div className="mb-10 md:mb-14">
            <img src={east.scene} alt="East scene" className={imgClass} />
          </div>

          {/* Video 4 */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={east.video4Mp4}
              poster={east.video4Poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Video 5 */}
          <div className="mb-10 md:mb-14">
            <video
              className={imgClass}
              src={east.video5Mp4}
              poster={east.video5Poster}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Poster 2 + Poster 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-0">
            <img src={east.poster2} alt="East poster 2" className={imgClass} />
            <img src={east.poster8} alt="East poster 8" className={imgClass} />
          </div>
        </div>
      </section>
    </div>
  );
}
