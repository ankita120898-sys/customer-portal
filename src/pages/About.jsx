import { useNavigate } from 'react-router-dom';
import { Button, Card, PageHeader } from '../components/PortalUI';

const values = [
  'Fast, transparent service resolution',
  'One customer record across every module',
  'Modern tenant experience with clear next steps',
  'Secure access for billing, contracts, and support',
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="space-y-7">
      <PageHeader title="About Energy Flow" eyebrow="Company" />
      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Customer-first operations</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-neutral-950">A modern portal for property service teams and tenants.</h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">Energy Flow brings daily property workflows into one clear system: support cases, billing, amenities, access requests, contracts, and profile management. The experience is designed to feel calm, direct, and easy to act on.</p>
          <Button onClick={() => navigate('/access-request')} className="mt-7">Get support</Button>
        </Card>
        <div className="rounded-lg bg-neutral-950 p-7 text-white">
          <p className="text-sm font-semibold text-orange-300">Operating principles</p>
          <div className="mt-5 space-y-3">
            {values.map(item => <div key={item} className="rounded-lg border border-white/10 bg-white/10 p-4 text-sm font-semibold text-white/85">{item}</div>)}
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['24h', 'target response window'],
          ['99%', 'digital request visibility'],
          ['6', 'connected portal modules'],
        ].map(([value, label]) => <Card key={label} className="p-6"><div className="text-4xl font-black text-orange-600">{value}</div><div className="mt-2 text-sm font-semibold text-neutral-500">{label}</div></Card>)}
      </section>
    </div>
  );
}
