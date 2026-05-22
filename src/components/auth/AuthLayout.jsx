export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f4f0] text-neutral-950">
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden overflow-hidden bg-neutral-950 lg:block">
          <img src={import.meta.env.BASE_URL + 'login_bg.jpg'} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-orange-700/55" />
          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-black text-white">E</span>
              <span className="text-lg font-semibold text-white">Energy Flow</span>
            </div>
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Customer Portal</p>
              <h2 className="text-5xl font-black leading-tight text-white">Manage service, billing, and property requests in one place.</h2>
              <p className="mt-5 text-base leading-7 text-white/75">A cleaner workspace for tenants, support teams, and account managers.</p>
            </div>
            <p className="text-xs text-white/50">2026 Energy Flow. All rights reserved.</p>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10">
          <div className="w-full max-w-[420px]">
            {children}
            <p className="mt-8 text-center text-xs text-neutral-500 lg:hidden">2026 Energy Flow. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
