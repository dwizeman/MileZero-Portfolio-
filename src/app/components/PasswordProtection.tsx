import { useState } from 'react';
import { Outlet } from 'react-router';
import logoSvg from '../../imports/Asset_1.svg';

export type UserRole = 'admin' | 'viewer';

export const UserContext = {
  role: null as UserRole | null,
};

export default function PasswordProtection() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'MZport@') {
      setIsAuthenticated(true);
      setPassword('');
      setPasswordError(false);
      setUserRole('admin');
      UserContext.role = 'admin';
    } else if (password === 'MZport!') {
      setIsAuthenticated(true);
      setPassword('');
      setPasswordError(false);
      setUserRole('viewer');
      UserContext.role = 'viewer';
    } else {
      setPasswordError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <div
          className="w-full max-w-[440px] px-8 sm:px-12 py-12 sm:py-14 text-[#050505]"
          style={{
            background: '#FCF9F4',
            border: '1px solid rgba(5, 5, 5, 0.14)',
            borderRadius: '28px',
          }}
        >
          <div className="flex justify-center mb-10">
            <img src={logoSvg} alt="MileZero" className="h-7" />
          </div>

          <h1
            className="text-center mb-2"
            style={{
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            Private Portfolio
          </h1>
          <p className="text-center text-sm text-[#050505]/55 mb-9">
            Enter password to continue
          </p>

          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              placeholder="Password"
              autoFocus
              className="w-full px-5 py-3 mb-3 bg-transparent text-[#050505] placeholder-[#050505]/35 outline-none transition-colors"
              style={{
                border: '1px solid rgba(5, 5, 5, 0.28)',
                borderRadius: '999px',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#050505';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = passwordError
                  ? 'rgba(5, 5, 5, 0.55)'
                  : 'rgba(5, 5, 5, 0.28)';
              }}
            />

            {passwordError && (
              <p
                className="text-center text-[11px] tracking-[0.18em] uppercase text-[#050505]/55 mb-3"
                aria-live="polite"
              >
                Incorrect password
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-2 transition-opacity hover:opacity-85"
              style={{
                background: '#050505',
                color: '#FCF9F4',
                borderRadius: '999px',
                fontSize: '13px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Enter
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-3 text-[10px] tracking-[0.24em] uppercase text-[#050505]/40">
            <span className="h-px w-6 bg-[#050505]/20" />
            <span>milezero · index</span>
            <span className="h-px w-6 bg-[#050505]/20" />
          </div>
        </div>
      </div>
    );
  }

  return <Outlet context={{ userRole }} />;
}
