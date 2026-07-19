import { Link, useOutletContext } from 'react-router';
import logoSvg from '../../imports/Asset_1.svg';
import { UserRole } from './PasswordProtection';

interface OutletContext {
  userRole: UserRole;
}

interface Project {
  id: number;
  name: string;
  url?: string;
  thumbnail?: string;
  to?: string;
  isFigma?: boolean;
  label: string;
  year: string;
  category: string;
  thumbnailFit?: 'cover' | 'contain';
  thumbnailBg?: string;
  thumbnailScale?: number;
}

const projects: Project[] = [
  { id: 21, name: 'Access Club',                  label: 'BRAND SYSTEM',           year: '2025', category: 'Microsoft',           to: '/access-club', thumbnail: '/access-club/thumbnail.jpg' },
  { id: 1,  name: 'Multiply',                    label: 'BRAND SYSTEM',           year: '2024', category: 'Scala Group',         url: 'https://embed.figma.com/deck/Z2V3oQOFrBtscMYtF0y8Yi?embed-host=share', isFigma: true, thumbnail: '/thumbnails/multiply.jpg' },
  { id: 19, name: 'Multiply',                    label: 'BRAND SYSTEM',           year: '2024', category: 'Scala Group',         to: '/multiply', thumbnail: '/multiply/thumbnail.mp4' },
  { id: 2,  name: 'Your AI Companion',           label: 'PRODUCT UX / UI',        year: '2024', category: 'Museum of Tolerance', url: 'https://embed.figma.com/deck/Rnhyu8rGPbUjOICdErIwNZ?embed-host=share', isFigma: true, thumbnail: '/thumbnails/ai-companion.jpg' },
  { id: 20, name: 'Your AI Companion',           label: 'PRODUCT UX / UI',        year: '2024', category: 'Museum of Tolerance', to: '/ai-companion', thumbnail: '/ai-companion/1.png' },
  { id: 18, name: 'Global Security Startups',    label: 'BRAND & STRATEGY',       year: '2025', category: 'Microsoft',           to: '/global-security-startups', thumbnail: '/thumbnails/global-security-startups.jpg' },
  { id: 15, name: 'Neo',                         label: 'PRODUCT UX/UI',          year: '2025', category: 'Be the Bank',         url: 'https://embed.figma.com/deck/KVZ3YhctHLKgmVCYOyGGWI?embed-host=share', thumbnail: '/thumbnails/neo.png' },
  { id: 12, name: 'Ugly is the New Cool',        label: 'SWAG',                   year: '2026', category: 'Microsoft',           thumbnail: '/thumbnails/microsoft-collection.png', to: '/microsoft-collection' },
  { id: 13, name: 'A Story of a Product',        label: 'PRODUCT DESIGN',         year: '2026', category: 'Sages',               url: 'https://embed.figma.com/deck/5dfuwWFwn9dzbPYO8ebg9O?embed-host=share', thumbnail: '/thumbnails/sages.jpg' },
  { id: 3,  name: 'Keep it Deep',                label: 'EMPLOYEE BRANDING',      year: '2022', category: 'Deep Instinct',       to: '/deep-instinct', thumbnail: '/thumbnails/deep-instinct.avif' },
  { id: 7,  name: 'Out of Scope',                label: 'ACADEMY BRANDING',       year: '2023', category: 'Microsoft',           to: '/out-of-scope', thumbnail: '/thumbnails/out-of-scope.png' },
  { id: 8,  name: 'Reflect for Education',       label: 'WEB DESIGN & DEVELOPMENT', year: '2023', category: 'Microsoft',         url: 'https://reflect.microsoft.com', thumbnail: '/thumbnails/reflect.png' },
  { id: 4,  name: 'Abra Kadablue',               label: 'GAME DESIGN',            year: '2023', category: 'Microsoft',           to: '/abra-kadablue', thumbnail: '/thumbnails/abra-kadablue.gif', thumbnailFit: 'contain', thumbnailBg: '#0E0E10' },
  { id: 14, name: 'Bluehat',                     label: 'EVENT BRANDING',         year: '2021', category: 'Microsoft',           to: '/bluehat', thumbnail: '/thumbnails/bluehat.mp4' },
  { id: 6,  name: 'Bonds',                       label: 'COMMUNITY BRANDING',     year: '2022', category: 'Microsoft',           to: '/bonds', thumbnail: '/thumbnails/bonds.avif', thumbnailFit: 'contain', thumbnailBg: '#0E0E10', thumbnailScale: 0.6 },
  { id: 16, name: 'Curing Diabetes',             label: 'COMING SOON',            year: '2026', category: 'Betalin',             url: 'https://www.youtube.com/embed/Ww7nfJx9I2A?si=-V9UF6DkbvCPAODu&controls=0', thumbnail: '/thumbnails/betalin.png' },
  { id: 10, name: 'Adama',                       label: 'EXPLAINER FILM',         year: '2022', category: 'Adama',               url: 'https://player.vimeo.com/video/435425162?h=604955d3f4', thumbnail: '/thumbnails/adama.png' },
  { id: 17, name: 'Microsoft GS²',               label: 'BRAND & STRATEGY',       year: '2025', category: 'Microsoft',           url: 'https://embed.figma.com/deck/qPel0l74YSnJZqu0lhX5KS?node-id=6-116&embed-host=share', isFigma: true, thumbnail: '/thumbnails/microsoft-gs2.png' },
];

export default function PortfolioGrid() {
  const { userRole } = useOutletContext<OutletContext>();

  const viewerHiddenIds = [2, 10, 16];
  const fullyHiddenIds = [17]; // hidden from everyone (admin included); code/assets stay in the repo
  const visibleProjects = projects.filter(
    p => !fullyHiddenIds.includes(p.id) && (userRole === 'admin' || !viewerHiddenIds.includes(p.id))
  );

  const totalLabel = visibleProjects.length.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#050505] px-4 sm:px-6 md:px-10 py-6 md:py-10">
      {/* Top stage labels */}
      <div className="max-w-[1280px] mx-auto flex justify-between items-baseline px-2 mb-6 md:mb-10">
        <span className="text-white/70 text-[11px] tracking-[0.24em] uppercase">{totalLabel}</span>
        <span className="text-white/70 text-[11px] tracking-[0.24em] uppercase">projects</span>
      </div>

      {/* Browser-frame container */}
      <div className="max-w-[1280px] mx-auto rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Browser bar */}
        <div className="bg-[#0a0a0a] h-6 md:h-7 flex items-center px-4 gap-1.5 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>

        {/* Inner warm-white page */}
        <div className="bg-[#FCF9F4] px-5 sm:px-8 md:px-14 lg:px-20 pt-12 md:pt-20 pb-16 md:pb-24 text-[#050505]">
          {/* Hero — logo left, statement right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center mb-16 md:mb-28">
            <div className="md:col-span-6 flex justify-center md:justify-start">
              <img
                src={logoSvg}
                alt="MileZero"
                className="select-none"
                style={{
                  height: 'clamp(40px, 5.6vw, 78px)',
                  width: 'auto',
                }}
              />
            </div>
            <div className="md:col-span-6">
              <p
                className="text-[#050505]"
                style={{
                  fontSize: 'clamp(17px, 1.55vw, 22px)',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  maxWidth: '560px',
                }}
              >
                We're a hybrid{' '}
                <strong style={{ fontWeight: 600 }}>creative tech powerhouse</strong>{' '}
                delivering AI driven solutions that power digital transformation across sectors.
              </p>
            </div>
          </div>

          {/* Project rows */}
          <div>
            {visibleProjects.map((project, i) => (
              <article
                key={project.id}
                className="group border-b border-[#050505]/28 grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 py-10 md:py-14 items-center"
                style={{
                  animation: 'mz-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
                  animationDelay: `${i * 70}ms`,
                }}
              >
                {/* Left: metadata + title */}
                <div className="md:col-span-3 order-1">
                  <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/55 mb-3">
                    {project.label}
                  </div>
                  <h2
                    className="text-[#050505]"
                    style={{
                      fontSize: 'clamp(28px, 3.4vw, 44px)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.025em',
                      fontWeight: 500,
                    }}
                  >
                    {project.name}
                  </h2>
                  <div className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45 mt-3">
                    {project.year} <span className="font-serif-italic normal-case tracking-normal text-[#050505]/35 mx-1">/</span> {project.category}
                  </div>
                </div>

                {/* Center: preview rectangle (iframe or image) */}
                <div className="md:col-span-6 order-3 md:order-2">
                  <Link
                    to={project.to ?? `/project/${project.id}`}
                    className="block relative aspect-[16/9] rounded-lg overflow-hidden border border-[#050505]/10 transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ background: project.thumbnailBg ?? '#EDEBE6' }}
                  >
                    {project.thumbnail ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.thumbnail.endsWith('.mp4') || project.thumbnail.endsWith('.webm') ? (
                          <video
                            src={project.thumbnail}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className={`${project.thumbnailScale ? '' : 'w-full h-full'} ${project.thumbnailFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                            style={project.thumbnailScale ? { maxWidth: `${project.thumbnailScale * 100}%`, maxHeight: `${project.thumbnailScale * 100}%` } : undefined}
                          />
                        ) : (
                          <img
                            src={project.thumbnail}
                            alt={project.name}
                            className={`${project.thumbnailScale ? '' : 'w-full h-full'} ${project.thumbnailFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                            style={project.thumbnailScale ? { maxWidth: `${project.thumbnailScale * 100}%`, maxHeight: `${project.thumbnailScale * 100}%` } : undefined}
                            loading="lazy"
                          />
                        )}
                      </div>
                    ) : (
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 pointer-events-none"
                        title={project.name}
                        sandbox="allow-same-origin allow-scripts"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/[0.04] transition-colors duration-500" />
                  </Link>
                </div>

                {/* Right: CTA */}
                <div className="md:col-span-3 order-2 md:order-3 flex md:justify-end">
                  <Link
                    to={project.to ?? `/project/${project.id}`}
                    className="inline-flex items-center text-[10px] tracking-[0.24em] uppercase text-[#050505]"
                  >
                    <span>View the</span>
                    <span
                      aria-hidden
                      className="mx-3 h-px bg-[#050505] inline-block transition-all duration-500 ease-out"
                      style={{ width: '20px' }}
                    />
                    <span className="relative">
                      Project
                      <span className="absolute left-0 right-0 -bottom-1 h-px bg-[#050505] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                    <style>{`
                      .group:hover [aria-hidden] { width: 44px !important; }
                    `}</style>
                  </Link>
                </div>
              </article>
            ))}

            {visibleProjects.length === 0 && (
              <div className="py-24 text-center text-[#050505]/45 text-sm tracking-wide">
                No projects in this category.
              </div>
            )}
          </div>

          {/* Footnote */}
          <div className="mt-14 md:mt-20 flex justify-between items-baseline">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#050505]/45">
              MileZero
            </span>
            <span className="font-serif-italic text-sm md:text-base text-[#050505]/55">
              selected works
            </span>
          </div>
        </div>
      </div>

      {/* Bottom stage label */}
      <div className="max-w-[1280px] mx-auto px-2 mt-6 md:mt-10 flex justify-between items-baseline">
        <span className="text-white/40 text-[10px] tracking-[0.24em] uppercase">© milezero</span>
        <span className="font-serif-italic text-white/55 text-sm">index</span>
      </div>

      <style>{`
        @keyframes mz-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
