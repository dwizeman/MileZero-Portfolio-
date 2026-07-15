import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logoSvg from '../../imports/Asset_1.svg';

const CDN = 'https://static.wixstatic.com/media/';

// Source HTML images, in strict DOM order. Wix nav/wdcreative chrome and
// instrumentation already removed; consecutive duplicate URLs removed.
const imgClass =
  'w-auto h-auto max-w-full max-h-[72vh] mx-auto rounded-[14px] md:rounded-[18px] object-contain block';

const wrapClass = 'max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-14';

const textBase =
  'text-[15px] md:text-[17px] lg:text-[19px] leading-[1.7] text-[#050505]/85';

// Media URLs (largest 1x candidate, dedup of srcset 2x/3x variants).
const M = {
  crustyFront: `${CDN}b2eded_ee6b966ed913445fb55504fd06678148~mv2.gif`,
  rustyFront: `${CDN}b2eded_eb3d165bc9ed44f78be3dd0c2353fb38~mv2.gif`,
  frame00: `${CDN}b2eded_31869862ef924edfb77ea8c07dac9f0b~mv2.png/v1/crop/x_0,y_3,w_760,h_754/fill/w_760,h_754,al_c,q_85,enc_avif,quality_auto/frame_00.png`,
  frame01: `${CDN}b2eded_33fc93cc08ea411ca718d61ae177d98b~mv2.gif`,
  frame03: `${CDN}b2eded_550de485ce2f4d7a9581039001a9511f~mv2.png/v1/crop/x_0,y_3,w_760,h_757/fill/w_760,h_757,al_c,q_85,enc_avif,quality_auto/frame_03.png`,
  frame02: `${CDN}b2eded_1d81e84d8100442d85fc684faaeb2d31~mv2.gif`,
  magican: `${CDN}b2eded_fd8af4ec2bcb4474b899dc02ba12ed23~mv2.png/v1/crop/x_41,y_0,w_664,h_496/fill/w_664,h_496,al_c,q_85,enc_avif,quality_auto/magican.png`,
  golem: `${CDN}b2eded_9e3d0aec051b4825b560a6ab30698b8f~mv2.gif`,
  monkey: `${CDN}b2eded_91d5cc9e72094b4a96bb650d9cd02dff~mv2.gif`,
  stinky: `${CDN}b2eded_82ba50a9fe994f608a4a57c859cca892~mv2.gif`,
  medusa: `${CDN}b2eded_e35bb304b5fd42e2b1bd360a89b3e9ec~mv2.png/v1/crop/x_0,y_1,w_256,h_255/fill/w_512,h_510,al_c,q_85,enc_avif,quality_auto/medusa_idle.png`,
  tree: `${CDN}b2eded_282a117249034885bb222136268e946d~mv2.png/v1/crop/x_0,y_0,w_255,h_256/fill/w_510,h_512,al_c,q_85,enc_avif,quality_auto/tree_idle.png`,
  rhino: `${CDN}b2eded_44bfc332afd645aabb195f8e2bdba927~mv2.png/v1/crop/x_0,y_1,w_256,h_255/fill/w_512,h_510,al_c,q_85,enc_avif,quality_auto/rhino_idle.png`,
  catboss: `${CDN}b2eded_c8206c307aa84afd9f4dfc2fd6a8c054~mv2.gif`,
  cookieMan: `${CDN}b2eded_dc8fadc8fca343fa93f6fc522cb03972~mv2.png/v1/crop/x_0,y_1,w_256,h_255/fill/w_512,h_510,al_c,q_85,enc_avif,quality_auto/cookie_man.png`,
  cyclope: `${CDN}b2eded_e1436312af1040e5905f926cf6ae2614~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_avif,quality_auto/cyclope_idle.png`,
  witchStinky: `${CDN}b2eded_240f11807cfc42a3b95fe1211558bfc7~mv2.gif`,
  dino: `${CDN}b2eded_08a289b3ef7c4770a2970f97f624af28~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_avif,quality_auto/dino_idle.png`,
  evilWizard: `${CDN}b2eded_2ca09d6bf2df4b519c4f16a84d7a5f9a~mv2.png/v1/crop/x_1,y_0,w_253,h_256/fill/w_506,h_512,al_c,q_85,enc_avif,quality_auto/evilwizard_idle.png`,
  robot: `${CDN}b2eded_0768058e83f04795a01d1b4836cc9035~mv2.gif`,
  chip: `${CDN}b2eded_2f5f3b800e2c4f50810388c5e90685d2~mv2.gif`,
  witchFront: `${CDN}b2eded_32cf4f83f4c640c38de3ec522c2cac06~mv2.gif`,
  rock: `${CDN}b2eded_1dcc5f156b314a0d934768495bfdd60c~mv2.gif`,
  cyclopeWalk: `${CDN}b2eded_0077adc59555458b982d9c9cac000808~mv2.gif`,
  mesudaWalk: `${CDN}b2eded_bea15f315bd244c2b281c18e6065666d~mv2.gif`,
  constWalk: `${CDN}b2eded_50f9ad6263d6403e913b45a32b6b05fc~mv2.gif`,
  treeWalk: `${CDN}b2eded_756b7bd443964b7ea9b164ae2763c580~mv2.gif`,
  rhinoWalk: `${CDN}b2eded_d1b2ebb145b149039a3cfbf5f80660fa~mv2.gif`,
  dinoWalk: `${CDN}b2eded_f2b09dbc93114f709b74b82cfbc142a7~mv2.gif`,
  cat: `${CDN}b2eded_7fd412cf738641dd9732189215152604~mv2.gif`,
  boorilla: `${CDN}b2eded_b4025d0aa9bc486bbba9e9b7a4df66de~mv2.gif`,
  magicItem: `${CDN}b2eded_18d65bd86ae34625a0ee340a04fd02d8~mv2.png/v1/crop/x_0,y_5,w_338,h_245/fill/w_676,h_490,al_c,q_85,enc_avif,quality_auto/magic_item.png`,
  iceCream: `${CDN}b2eded_629725813bef41efb4421e2b6fc0b616~mv2.gif`,
  holySip: `${CDN}b2eded_6b757562262241609a614aa6279a4a6e~mv2.gif`,
  pendulum: `${CDN}b2eded_420d08c0ce8a4a3c9a46c66bad573501~mv2.gif`,
  evilMirror: `${CDN}b2eded_cfc2977144294454ac34e8e2e420a29d~mv2.gif`,
  worms: `${CDN}b2eded_a226a0169ab249f691879f0422021d96~mv2.gif`,
  glassWall: `${CDN}b2eded_ed35ecb7cc3a48c9a5b2698661c66797~mv2.gif`,
  pretzel: `${CDN}b2eded_2f2bd4fd2eef45ecb63f6d759455dfb3~mv2.gif`,
  potion: `${CDN}b2eded_dea89745bbaf452d9b2a14604496feba~mv2.gif`,
  book: `${CDN}b2eded_692fc3e757c141d4996279c4bb8babf5~mv2.gif`,
  pandora: `${CDN}b2eded_ad1d8f6726e24fcba992afaa8cf83b4f~mv2.gif`,
  skull: `${CDN}b2eded_6edcd9ab0f9d4a6aa9e200ebb8258ac9~mv2.gif`,
  onion: `${CDN}b2eded_2dbdbc0154a544718342bfb9b4e4a37e~mv2.gif`,
  telephone: `${CDN}b2eded_4f025ff1b8814c7c8f2df9d979205d23~mv2.gif`,
  k300: `${CDN}b2eded_7caeb5f76c8b48809615e39271951285~mv2.gif`,
  socks: `${CDN}b2eded_4660f0a51def439692c3ddc7e501424b~mv2.gif`,
  t4: `${CDN}b2eded_ebb6bf92c6054a9b96194a3ab40b44b6~mv2.gif`,
  traderTriangle: `${CDN}b2eded_15ccc95716c64244bad74820d3b7cedf~mv2.png/v1/fill/w_702,h_700,al_c,lg_1,q_85,enc_avif,quality_auto/trader_triangle_04.png`,
  traderSquare: `${CDN}b2eded_a00b0647561142fda21b09a496076bb4~mv2.png/v1/fill/w_702,h_700,al_c,lg_1,q_85,enc_avif,quality_auto/trader_square_04.png`,
  t1: `${CDN}b2eded_97dddd7f1e284f1dbadd143d400b954a~mv2.gif`,
  t3: `${CDN}b2eded_a719b81cf8cb45bf98e893b9dea387c5~mv2.gif`,
  t2: `${CDN}b2eded_443e26040be1488a8117844b3103e398~mv2.gif`,
  h1: `${CDN}b2eded_2130ec03447946f698145d88e6fd265b~mv2.gif`,
  h2: `${CDN}b2eded_6858409b817b4044912fa47e2e84fbb2~mv2.gif`,
  h3: `${CDN}b2eded_09eb85330f4941f88af0bfc91ee45a5c~mv2.gif`,
  h4: `${CDN}b2eded_3e9b06a4572f482da0ae1943ca2f750d~mv2.gif`,
  wizard: `${CDN}b2eded_690ac859af3743cab2ea2003b00d9beb~mv2.png/v1/fill/w_498,h_498,al_c,q_85,enc_avif,quality_auto/wizard.png`,
  rockBig: `${CDN}b2eded_b8effeaf24ab47acb7e4e4212cc1cbf4~mv2.png/v1/fill/w_498,h_498,al_c,q_85,enc_avif,quality_auto/rock.png`,
  chimney: `${CDN}b2eded_9fd1a623638045e8aadd7c6308cb8a39~mv2.png/v1/crop/x_0,y_750,w_2479,h_2482/fill/w_498,h_498,al_c,q_85,enc_avif,quality_auto/Chimeny.png`,
  brobot: `${CDN}b2eded_d9de15a8a89f42ec9c6e9b5bacb7dd0b~mv2.png/v1/crop/x_9,y_52,w_760,h_1064/fill/w_498,h_700,al_c,q_85,enc_avif,quality_auto/brobot.png`,
  logoBig: `${CDN}b2eded_113c38576b7b4f3ba1a565bc04fa2b27~mv2.png/v1/crop/x_137,y_56,w_2093,h_1373/fill/w_1064,h_698,al_c,q_85,enc_avif,quality_auto/logo.png`,
  rockCopy: `${CDN}b2eded_d6e0f30f21a34434bc4e77594df62384~mv2.png/v1/crop/x_120,y_0,w_1125,h_1125/fill/w_498,h_500,al_c,q_85,enc_avif,quality_auto/rock%20copy.png`,
  wooch: `${CDN}b2eded_413cd20978c048f1bb84cda615bd559f~mv2.png/v1/crop/x_490,y_572,w_1603,h_1610/fill/w_498,h_500,al_c,q_85,enc_avif,quality_auto/wooch.png`,
  casino: `${CDN}b2eded_05170587f5f5436582e4f4bdf91e5ea5~mv2.png/v1/crop/x_210,y_160,w_1774,h_1781/fill/w_498,h_500,al_c,q_85,enc_avif,quality_auto/casino.png`,
  arena: `${CDN}b2eded_a177844cfc0548e6a2e8ff78fec92258~mv2.gif`,
  dancefloor: `${CDN}b2eded_e351806fa99f489a866951469f132c0d~mv2.gif`,
  rcCars: `${CDN}b2eded_491300f502ad4df6960fe5e19e6b1aa0~mv2.gif`,
  casinoAnim: `${CDN}b2eded_1b82a39a4ad54297aeb3bddd4f5dad4b~mv2.gif`,
  doorAnim: `${CDN}b2eded_14ee43a5d5f5478e96ee65bf07ce1fbb~mv2.gif`,
  tower: `${CDN}b2eded_c0323f57fb0241eda63f3d962f5cdc8c~mv2.gif`,
  market: `${CDN}b2eded_0be5d9fb8ca6478c96ffc5ce119bedaa~mv2.gif`,
  maze: `${CDN}b2eded_0c6986008e2d425a8cb2553436ac53c8~mv2.gif`,
  armory: `${CDN}b2eded_34570291f16141498730b4c6a65537a7~mv2.gif`,
  chimneyFixed: `${CDN}b2eded_c61de17e71894e7abaf9007ff62ec1bd~mv2.gif`,
  garden: `${CDN}b2eded_4a09db6897ac4779b34a47c326bbec97~mv2.gif`,
  footer: `${CDN}b2eded_52948525e20442b8997d762fc193d168~mv2.png/v1/fill/w_1700,h_466,al_c,q_85,enc_avif,quality_auto/footer.png`,
  booFooter: `${CDN}b2eded_4b0edf03dcc740a0a1b967fd30723cbd~mv2.gif`,
};

function Img({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" className={imgClass} />;
}

function Video({ src, label }: { src: string; label?: string }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      className={imgClass}
    />
  );
}

function Pair({
  a,
  b,
}: {
  a: { src: string; alt: string };
  b: { src: string; alt: string };
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <Img src={a.src} alt={a.alt} />
      <Img src={b.src} alt={b.alt} />
    </div>
  );
}

export default function AbraKadablueCase() {
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
        <img
          src={logoSvg}
          alt="MileZero"
          className="h-3.5 md:h-4 w-auto max-w-full select-none"
        />
      </button>

      {/* Editorial hero */}
      <div className={`${wrapClass} pt-[120px] md:pt-[160px]`}>
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-6">
              Game Design · 2023 · Microsoft
            </div>
            <h1
              style={{
                fontSize: 'clamp(56px, 9vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
            >
              Abra
              <br />
              Kadablue
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
              A magical league of sorcerers chasing the rarest of treasures.
            </h2>
            <p
              className="text-[#050505]/58"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              For Microsoft BlueHat&rsquo;s annual security conference we
              developed a game for the security researcher community — the
              theme for the game was security breaches.
            </p>
          </div>
        </header>

        {/* Section line */}
        <div className="h-px bg-[#050505]/14 mb-14 md:mb-20" />
      </div>

      {/* crusty_32_front.gif */}
      <div className={`${wrapClass} pt-12 md:pt-20 flex justify-center`}>
        <img
          src={M.crustyFront}
          alt="crusty"
          loading="lazy"
          className="h-[120px] md:h-[160px] w-auto block"
        />
      </div>

      {/* Rusty caption */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <p className={`${textBase} max-w-[720px] mx-auto text-center`}>
          Rusty is the newest member of the league and a magical prodigy.
          She&rsquo;s on a lifelong quest to retrieve her lost nose.
        </p>
      </div>

      {/* rusty_34_front.gif */}
      <div className={`${wrapClass} pt-8 md:pt-12 flex justify-center`}>
        <img
          src={M.rustyFront}
          alt="rusty"
          loading="lazy"
          className="h-[140px] md:h-[180px] w-auto block"
        />
      </div>

      {/* frame_00, frame_01, frame_03, frame_02 */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <Pair
          a={{ src: M.frame00, alt: 'frame_00' }}
          b={{ src: M.frame01, alt: 'frame_01' }}
        />
      </div>
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.frame03, alt: 'frame_03' }}
          b={{ src: M.frame02, alt: 'frame_02' }}
        />
      </div>

      {/* magican.png */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <Img src={M.magican} alt="magican" />
      </div>

      {/* Arena Master text */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <p className={`${textBase} max-w-[820px] mx-auto text-center`}>
          To progress within the game, one must organize fights and those can be
          obtained only from the Arena Master who is trusted with finding you
          worthy trolling opponents.
        </p>
      </div>

      {/* golem, monkey, robot stinky */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Img src={M.golem} alt="golem" />
          <Img src={M.monkey} alt="monkey" />
          <Img src={M.stinky} alt="robot stinky" />
        </div>
      </div>

      {/* medusa, tree, rhino */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Img src={M.medusa} alt="medusa" />
          <Img src={M.tree} alt="tree" />
          <Img src={M.rhino} alt="rhino" />
        </div>
      </div>

      {/* catboss */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Img src={M.catboss} alt="cat boss" />
      </div>

      {/* cookie man, cyclope */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.cookieMan, alt: 'cookie man' }}
          b={{ src: M.cyclope, alt: 'cyclope' }}
        />
      </div>

      {/* witch stinky */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Img src={M.witchStinky} alt="witch stinky" />
      </div>

      {/* dino, evil wizard */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.dino, alt: 'dino' }}
          b={{ src: M.evilWizard, alt: 'evil wizard' }}
        />
      </div>

      {/* small character walk cycle row 1: robot, chip, witch front */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          <Img src={M.robot} alt="robot" />
          <Img src={M.chip} alt="chip" />
          <Img src={M.witchFront} alt="witch front" />
          <Img src={M.rock} alt="rock" />
          <Img src={M.cyclopeWalk} alt="cyclope walk" />
          <Img src={M.mesudaWalk} alt="medusa walk" />
        </div>
      </div>

      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          <Img src={M.constWalk} alt="construct walk" />
          <Img src={M.treeWalk} alt="tree walk" />
          <Img src={M.rhinoWalk} alt="rhino walk" />
          <Img src={M.dinoWalk} alt="dino walk" />
          <Img src={M.cat} alt="cat" />
          <Img src={M.boorilla} alt="boorilla" />
        </div>
      </div>

      {/* magic_item.png */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <Img src={M.magicItem} alt="magic item" />
      </div>

      {/* sorcerers seek text */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <p className={`${textBase} max-w-[820px] mx-auto text-center`}>
          The sorcerers seek to gather the rarest, most insane and worthiest
          objects in order to climb up the tournament&rsquo;s ranking.
        </p>
      </div>

      {/* Items grid (in DOM order): blue_ice_cream, holy-sip, pendulum,
          evil_mirror, worms, glass-wall, pretzel, potion, book, pandora,
          skull, onion, telephone, k300, socks */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          <Img src={M.iceCream} alt="blue ice cream" />
          <Img src={M.holySip} alt="holy sip" />
          <Img src={M.pendulum} alt="pendulum" />
          <Img src={M.evilMirror} alt="evil mirror" />
          <Img src={M.worms} alt="worms" />
          <Img src={M.glassWall} alt="glass wall" />
          <Img src={M.pretzel} alt="pretzel" />
          <Img src={M.potion} alt="potion" />
          <Img src={M.book} alt="book" />
          <Img src={M.pandora} alt="pandora" />
          <Img src={M.skull} alt="skull" />
          <Img src={M.onion} alt="onion" />
          <Img src={M.telephone} alt="telephone" />
          <Img src={M.k300} alt="k300" />
          <Img src={M.socks} alt="socks" />
        </div>
      </div>

      {/* lone t4 */}
      <div className={`${wrapClass} pt-12 md:pt-20 flex justify-center`}>
        <img
          src={M.t4}
          alt="t4"
          loading="lazy"
          className="h-[120px] md:h-[160px] w-auto block"
        />
      </div>

      {/* AbraKadablue traders heading */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <h2 className="text-center text-[22px] md:text-[28px] lg:text-[32px] font-serif-italic">
          AbraKadablue traders
        </h2>
      </div>

      {/* trader_triangle, trader_square */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <Pair
          a={{ src: M.traderTriangle, alt: 'trader triangle' }}
          b={{ src: M.traderSquare, alt: 'trader square' }}
        />
      </div>

      {/* t4, t1, t3, t2 row */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          <Img src={M.t4} alt="t4" />
          <Img src={M.t1} alt="t1" />
          <Img src={M.t3} alt="t3" />
          <Img src={M.t2} alt="t2" />
        </div>
      </div>

      {/* h1, h2, h3, h4 row */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          <Img src={M.h1} alt="h1" />
          <Img src={M.h2} alt="h2" />
          <Img src={M.h3} alt="h3" />
          <Img src={M.h4} alt="h4" />
        </div>
      </div>

      {/* Making Of */}
      <div className={`${wrapClass} pt-16 md:pt-28`}>
        <h2 className="text-center text-[22px] md:text-[28px] lg:text-[32px] font-serif-italic mb-6 md:mb-8">
          Making Of
        </h2>
        <p className={`${textBase} max-w-[820px] mx-auto text-center`}>
          A Microsoft team of developers led by Or Virnik and with a close
          cooperation with our team of animators and concept artists.
        </p>
        <p className={`${textBase} max-w-[820px] mx-auto text-center mt-4`}>
          Here is a glimpse into what went on in the editing room.
        </p>
      </div>

      {/* Making Of — videos */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Video src="/abra-kadablue/file-1.mp4" label="Making Of — clip 1" />
          <Video src="/abra-kadablue/file-2.mp4" label="Making Of — clip 2" />
        </div>
      </div>

      {/* wizard, rock, chimney, brobot */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Img src={M.wizard} alt="wizard" />
          <Img src={M.rockBig} alt="rock" />
          <Img src={M.chimney} alt="chimney" />
          <Img src={M.brobot} alt="brobot" />
        </div>
      </div>

      {/* logo */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Img src={M.logoBig} alt="Abra Kadablue logo" />
      </div>

      {/* rock copy, wooch, casino */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Img src={M.rockCopy} alt="rock copy" />
          <Img src={M.wooch} alt="wooch" />
          <Img src={M.casino} alt="casino" />
        </div>
      </div>

      {/* Kadablue Arena heading + arena gif */}
      <div className={`${wrapClass} pt-16 md:pt-28`}>
        <h3 className="text-center text-[15px] md:text-[17px] font-bold mb-6">
          Kadablue Arena
        </h3>
        <Img src={M.arena} alt="Kadablue Arena" />
      </div>

      {/* dancefloor unlocking */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Img src={M.dancefloor} alt="dancefloor unlocking" />
      </div>

      {/* Disco Club + Formula Two headings */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            Disco Club
          </h3>
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            Formula Two
          </h3>
        </div>
      </div>

      {/* rc cars + casino animation */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.rcCars, alt: 'rc cars animation' }}
          b={{ src: M.casinoAnim, alt: 'casino animation' }}
        />
      </div>

      {/* Roulette heading + door animation */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <h3 className="text-center text-[15px] md:text-[17px] font-bold mb-6">
          Rolette
        </h3>
        <Img src={M.doorAnim} alt="door animation" />
      </div>

      {/* Portal heading + tower */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <h3 className="text-center text-[15px] md:text-[17px] font-bold mb-6">
          Portal
        </h3>
        <Img src={M.tower} alt="tower" />
      </div>

      {/* The Tower + Market headings */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            The Tower
          </h3>
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            Market
          </h3>
        </div>
      </div>

      {/* market animation + maze */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.market, alt: 'market animation' }}
          b={{ src: M.maze, alt: 'maze' }}
        />
      </div>

      {/* Maze + Armory headings */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            Maze
          </h3>
          <h3 className="text-center text-[15px] md:text-[17px] font-bold">
            Armory
          </h3>
        </div>
      </div>

      {/* armory animation + chimney fixed */}
      <div className={`${wrapClass} pt-6 md:pt-8`}>
        <Pair
          a={{ src: M.armory, alt: 'armory animation' }}
          b={{ src: M.chimneyFixed, alt: 'chimney' }}
        />
      </div>

      {/* The Good Chimney heading + garden */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <h3 className="text-center text-[15px] md:text-[17px] font-bold mb-6">
          The Good Chimney
        </h3>
        <Img src={M.garden} alt="garden jungle" />
      </div>

      {/* The Bush heading */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <h3 className="text-center text-[15px] md:text-[17px] font-bold">
          The Bush
        </h3>
      </div>

      {/* Footer banner */}
      <div className={`${wrapClass} pt-12 md:pt-20`}>
        <Img src={M.footer} alt="footer" />
      </div>

      {/* boo footer ani */}
      <div
        className={`${wrapClass} pt-6 md:pt-8 pb-20 md:pb-32 flex justify-center`}
      >
        <img
          src={M.booFooter}
          alt="boo footer"
          loading="lazy"
          className="h-[160px] md:h-[220px] w-auto block"
        />
      </div>
    </div>
  );
}
