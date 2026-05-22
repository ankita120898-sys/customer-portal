import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const tabs = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/account', label: 'Account' },
  { to: '/cases', label: 'Requests' },
  { to: '/invoices', label: 'Invoices' },
  { to: '/contracts', label: 'Contracts' },
  { to: '/profile', label: 'Profile' },
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f7f4f0] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 sm:px-8">
          <button onClick={() => navigate('/home')} className="flex shrink-0 items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 font-black text-white">E</span>
            <span>
              <span className="block text-lg font-black leading-none">Energy Flow</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">My Account</span>
            </span>
          </button>

          <div className="ml-auto hidden items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 text-xs font-black text-white">{user?.name?.[0] || 'A'}</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-neutral-900">{user?.name}</span>
              <span className="block truncate text-xs text-neutral-500">{user?.email}</span>
            </span>
          </div>

          <button onClick={() => navigate('/home')} className="rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-bold text-neutral-700 transition hover:border-orange-300 hover:text-orange-700">Website</button>
          <button onClick={handleLogout} className="rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800">Sign out</button>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-3 sm:px-8">
          <nav className="flex gap-2 overflow-x-auto rounded-lg border border-black/10 bg-neutral-50 p-1">
            {tabs.map(tab => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `min-w-max rounded-md px-4 py-2.5 text-sm font-bold transition ${isActive ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'text-neutral-600 hover:bg-white hover:text-orange-700'}`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
