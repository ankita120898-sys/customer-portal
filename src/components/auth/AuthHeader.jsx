export default function AuthHeader() {
  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg shadow-orange-500/25">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="26" height="26">
            <path d="M3 12h4l3-8 4 16 3-8h4" />
          </svg>
        </div>
      </div>
      <h1 className="text-center text-2xl font-black text-neutral-950">Energy Flow</h1>
      <p className="mb-7 mt-2 text-center text-sm text-neutral-500">Customer management portal</p>
    </>
  );
}
