import { useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { UserRole } from './PasswordProtection';
import logoSvg from '../../imports/Asset_1.svg';

interface OutletContext {
  userRole: UserRole;
}

interface Project {
  id: number;
  url: string;
  cropTop: number;
  cropBottom: number;
  cropTopMobile?: number;
  cropBottomMobile?: number;
}

const projects: Project[] = [
  { id: 1,  url: 'https://embed.figma.com/deck/Z2V3oQOFrBtscMYtF0y8Yi?embed-host=share', cropTop: 0,  cropBottom: 0 },
  { id: 2,  url: 'https://embed.figma.com/deck/Rnhyu8rGPbUjOICdErIwNZ?embed-host=share', cropTop: 0,  cropBottom: 0 },
  { id: 3,  url: 'https://www.wizemandaum.com/deepinstinct',     cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 4,  url: 'https://www.wizemandaum.com/abra-kadablue',    cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 5,  url: 'https://www.wizemandaum.com/bluehat',          cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 7,  url: 'https://www.wizemandaum.com/out-of-scope',     cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 8,  url: 'https://reflect.microsoft.com',               cropTop: 64, cropBottom: 80,  cropTopMobile: 0, cropBottomMobile: 120 },
  { id: 9,  url: 'https://player.vimeo.com/video/396248787?h=bb4ea80f5d', cropTop: 0,  cropBottom: 0 },
  { id: 10, url: 'https://player.vimeo.com/video/435425162?h=604955d3f4', cropTop: 0,  cropBottom: 0 },
  { id: 11, url: 'https://www.wizemandaum.com/btb',              cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 13, url: 'https://embed.figma.com/deck/5dfuwWFwn9dzbPYO8ebg9O?embed-host=share', cropTop: 0, cropBottom: 0 },
  { id: 14, url: 'https://www.wizemandaum.com/bluehat', cropTop: 96, cropBottom: 120, cropTopMobile: 0, cropBottomMobile: 180 },
  { id: 15, url: 'https://embed.figma.com/deck/KVZ3YhctHLKgmVCYOyGGWI?embed-host=share', cropTop: 0, cropBottom: 0 },
  { id: 16, url: 'https://www.youtube.com/embed/Ww7nfJx9I2A?si=-V9UF6DkbvCPAODu&controls=0', cropTop: 0, cropBottom: 0 },
  { id: 17, url: 'https://embed.figma.com/deck/qPel0l74YSnJZqu0lhX5KS?node-id=6-116&embed-host=share', cropTop: 0, cropBottom: 0 },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userRole } = useOutletContext<OutletContext>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#FCF9F4] text-[#050505]">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-[#050505] text-[#FCF9F4] hover:opacity-90 transition-opacity"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const viewerHiddenIds = [2, 10, 16];
  const fullyHiddenIds = [17]; // hidden from everyone (admin included); code/assets stay in the repo
  if (fullyHiddenIds.includes(project.id) || (viewerHiddenIds.includes(project.id) && userRole === 'viewer')) {
    navigate('/');
    return null;
  }

  const cropTop = project.cropTop ?? 0;
  const cropBottom = project.cropBottom ?? 0;
  const cropTopMobile = project.cropTopMobile ?? 0;
  const cropBottomMobile = project.cropBottomMobile ?? cropBottom;
  const showMask = cropBottom > 0 || cropBottomMobile > 0;

  return (
    <div
      className="project-iframe-wrapper fixed inset-0 overflow-hidden bg-[#FCF9F4] m-0 p-0"
      style={{
        width: '100vw',
        maxWidth: 'none',
        height: '100dvh',
        ['--iframe-crop-top' as string]: `${cropTop}px`,
        ['--iframe-crop-bottom' as string]: `${cropBottom}px`,
        ['--iframe-crop-top-mobile' as string]: `${cropTopMobile}px`,
        ['--iframe-crop-bottom-mobile' as string]: `${cropBottomMobile}px`,
      }}
    >
      <iframe
        src={project.url}
        title="Project"
        className="project-iframe"
        style={{
          position: 'absolute',
          top: `calc(-1 * var(--iframe-crop-top))`,
          left: 0,
          width: '100vw',
          minWidth: '100vw',
          maxWidth: 'none',
          height: `calc(100dvh + var(--iframe-crop-top) + var(--iframe-crop-bottom))`,
          border: 0,
          display: 'block',
          transform: 'none',
        }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allowFullScreen
      />

      {showMask && (
        <div
          aria-hidden
          className="iframe-bottom-mask fixed left-0 right-0 bottom-0 pointer-events-none"
          style={{
            height: 'var(--iframe-crop-bottom)',
            background: '#FCF9F4',
            zIndex: 40,
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .project-iframe {
            top: calc(-1 * var(--iframe-crop-top-mobile)) !important;
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: none !important;
            height: calc(100dvh + var(--iframe-crop-top-mobile) + var(--iframe-crop-bottom-mobile)) !important;
            transform: none !important;
          }
          .iframe-bottom-mask {
            height: var(--iframe-crop-bottom-mobile) !important;
          }
        }
      `}</style>

      <button
        onClick={() => navigate('/')}
        aria-label="Back to portfolio"
        className="group fixed top-5 left-5 md:top-7 md:left-7 z-50 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[#050505] transition-all duration-300 hover:-translate-x-0.5"
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
    </div>
  );
}
