export function PageHeader({ title, eyebrow, action }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">{eyebrow}</p>}
        <h1 className="mt-1 text-3xl font-black text-neutral-950">{title}</h1>
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = '' }) {
  return <div className={`rounded-lg border border-black/10 bg-white shadow-sm ${className}`}>{children}</div>;
}

export function Badge({ children, tone = 'neutral' }) {
  const map = {
    neutral: 'bg-neutral-100 text-neutral-700',
    orange: 'bg-orange-100 text-orange-800',
    green: 'bg-emerald-100 text-emerald-800',
    red: 'bg-red-100 text-red-800',
    black: 'bg-neutral-950 text-white',
  };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${map[tone] || map.neutral}`}>{children}</span>;
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20',
    secondary: 'border border-black/10 bg-white text-neutral-950 hover:border-orange-300 hover:text-orange-700',
    dark: 'bg-neutral-950 text-white hover:bg-neutral-800',
  };
  return <button className={`rounded-lg px-4 py-2.5 text-sm font-bold transition ${variants[variant]} ${className}`} {...props}>{children}</button>;
}

export function StatCard({ label, value, detail, tone = 'dark' }) {
  const text = { dark: 'text-neutral-950', orange: 'text-orange-600', green: 'text-emerald-600', red: 'text-red-600' };
  const dot = { dark: 'bg-neutral-950', orange: 'bg-orange-500', green: 'bg-emerald-500', red: 'bg-red-500' };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{label}</p>
          <p className={`mt-2 text-2xl font-black ${text[tone] || text.dark}`}>{value}</p>
          {detail && <p className="mt-1 text-sm text-neutral-500">{detail}</p>}
        </div>
        <span className={`h-2.5 w-2.5 rounded-full ${dot[tone] || dot.dark}`} />
      </div>
    </Card>
  );
}

export function TableShell({ children }) {
  return <Card className="overflow-hidden"><div className="overflow-x-auto">{children}</div></Card>;
}

export function Th({ children }) {
  return <th className="border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">{children}</th>;
}

export function Td({ children }) {
  return <td className="border-b border-neutral-100 px-4 py-3.5 text-sm text-neutral-700">{children}</td>;
}

export function inputClass() {
  return 'w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100';
}

export function statusTone(status) {
  if (['Paid', 'Resolved', 'Closed', 'Activated', 'Low'].includes(status)) return 'green';
  if (['Overdue', 'Escalated', 'High', 'Terminated'].includes(status)) return 'red';
  if (['New', 'Unpaid', 'Draft', 'Medium'].includes(status)) return 'orange';
  return 'neutral';
}
