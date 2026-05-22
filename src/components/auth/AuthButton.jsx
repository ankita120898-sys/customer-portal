export default function AuthButton({ children, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  );
}
