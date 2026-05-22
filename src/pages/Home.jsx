import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockCases, mockInvoices, mockContracts } from '../mock/data';
import { Badge, Button, Card, StatCard, statusTone } from '../components/PortalUI';

const services = [
  { title: 'Service requests', text: 'Raise maintenance tickets and track every update from submission to completion.', to: '/cases' },
  { title: 'Billing center', text: 'Review invoices, payment status, due dates, and outstanding balances.', to: '/invoices' },
  { title: 'Contracts', text: 'Access lease agreements, active terms, and important account documents.', to: '/contracts' },
];

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const openCases = mockCases.filter(c => !['Closed', 'Resolved'].includes(c.Status)).length;
  const overdue = mockInvoices.filter(i => i.Status__c === 'Overdue').length;
  const activeContracts = mockContracts.filter(c => c.Status === 'Activated').length;

  return (
    <div className="space-y-14 pb-8">
      <section className="relative overflow-hidden rounded-lg bg-neutral-950 text-white shadow-2xl shadow-black/10">
        <img src="/login_bg.jpg" alt="Energy Flow property" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-orange-900/35" />
        <div className="relative grid min-h-[520px] items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">Energy Flow Customer Portal</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">A smarter home for every service, payment, and property update.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">Welcome {user?.name || 'Anjali'}. Manage requests, invoices, amenities, contracts, and access permissions from one polished workspace.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => navigate('/access-request')}>Request access</Button>
              <Button variant="secondary" onClick={() => navigate('/properties')} className="border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-neutral-950">Explore properties</Button>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-white/70">Live portal snapshot</p>
            <div className="mt-5 grid gap-3">
              <Metric label="Open requests" value={openCases} />
              <Metric label="Overdue invoices" value={overdue} />
              <Metric label="Active contracts" value={activeContracts} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Response window" value="24h" detail="Priority support queue" tone="orange" />
        <StatCard label="Portal modules" value="6" detail="Connected screens" />
        <StatCard label="Account status" value="Active" detail="Tenant verified" tone="green" />
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">What you can do</p>
            <h2 className="mt-1 text-3xl font-black text-neutral-950">Portal services</h2>
          </div>
          <Button variant="dark" onClick={() => navigate('/dashboard')}>Open my account</Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map(service => (
            <button key={service.title} onClick={() => navigate(service.to)} className="rounded-lg border border-black/10 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-lg font-black text-orange-700">{service.title[0]}</span>
              <h3 className="mt-5 text-xl font-black text-neutral-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">{service.text}</p>
              <span className="mt-5 inline-block text-sm font-bold text-orange-700">Open screen</span>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Recent activity</p>
          <h2 className="mt-1 text-2xl font-black text-neutral-950">Service request status</h2>
          <div className="mt-5 space-y-3">
            {mockCases.slice(0, 4).map(c => (
              <button key={c.Id} onClick={() => navigate('/cases')} className="flex w-full items-center justify-between gap-4 rounded-lg border border-neutral-100 p-3 text-left hover:border-orange-200 hover:bg-orange-50">
                <span><span className="block text-sm font-bold text-neutral-950">{c.Subject}</span><span className="mt-1 block text-xs text-neutral-500">{c.CaseNumber}</span></span>
                <Badge tone={statusTone(c.Status)}>{c.Status}</Badge>
              </button>
            ))}
          </div>
        </Card>
        <div className="rounded-lg bg-orange-500 p-6 text-white shadow-xl shadow-orange-500/20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-100">Need help now?</p>
          <h2 className="mt-2 text-3xl font-black">Create a request and attach details in under a minute.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">Use the redesigned request screen to submit maintenance, access, billing, or general support items.</p>
          <Button variant="dark" onClick={() => navigate('/cases')} className="mt-7">Raise service request</Button>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }) {
  return <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3"><span className="text-sm text-white/70">{label}</span><span className="text-xl font-black text-white">{value}</span></div>;
}

