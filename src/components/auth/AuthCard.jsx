export default function AuthCard({ children }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(23,23,23,0.12)]">
      {children}
    </div>
  );
}
