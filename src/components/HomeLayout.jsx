import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './PortalUI';

const navItems = [
  { to: '/home', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/access-request', label: 'Access Request' },
];

export default function HomeLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

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
            <span className="hidden sm:block">
              <span className="block text-lg font-black leading-none">Energy Flow</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Customer Portal</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3.5 py-2 text-sm font-bold transition ${isActive ? 'bg-orange-100 text-orange-700' : 'text-neutral-600 hover:bg-orange-50 hover:text-orange-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden max-w-[240px] flex-1 items-center rounded-lg border border-black/10 bg-neutral-50 px-3 sm:flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" className="text-neutral-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={searchVal} onChange={e => setSearchVal(e.target.value)} placeholder="Search" className="w-full bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-neutral-400" />
          </div>

          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-2.5 py-2 transition hover:border-orange-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 text-xs font-black text-white">{user?.name?.[0] || 'A'}</span>
              <span className="hidden text-sm font-bold text-neutral-700 md:block">{user?.name || 'Anjali Garg'}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-48 rounded-lg border border-black/10 bg-white p-2 shadow-xl">
                <button onClick={() => navigate('/dashboard')} className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-neutral-900 hover:bg-orange-50 hover:text-orange-700">My Account</button>
                <button onClick={() => navigate('/profile')} className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-neutral-700 hover:bg-neutral-50">Profile</button>
                <button onClick={handleLogout} className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-orange-700 hover:bg-orange-50">Sign out</button>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">{children}</main>
    </div>
  );
}


