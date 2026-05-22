import { useNavigate } from 'react-router-dom';
import { Button, Card, StatCard } from '../components/PortalUI';
import { properties } from '../data/properties';

export default function Properties() {
  const navigate = useNavigate();
  const totalUnits = properties.reduce((sum, property) => sum + property.units, 0);
  const totalRequests = properties.reduce((sum, property) => sum + property.openRequests, 0);

  return (
    <div className="space-y-8 pb-8">
      <section className="relative overflow-hidden rounded-lg bg-neutral-950 p-7 text-white shadow-2xl shadow-black/10 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.45),transparent_32%),linear-gradient(135deg,#111_0%,#111_48%,#fb923c_100%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">Portfolio</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Properties managed with clarity, service visibility, and fast access.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">Explore every linked site, review service health, and open a property workspace for details, documents, amenities, and requests.</p>
          </div>
          <div className="grid gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur sm:grid-cols-3 lg:grid-cols-1">
            <HeroMetric label="Sites" value={properties.length} />
            <HeroMetric label="Units" value={totalUnits} />
            <HeroMetric label="Open requests" value={totalRequests} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Managed sites" value={properties.length} detail="Across India" tone="orange" />
        <StatCard label="Total units" value={totalUnits} detail="Residential and commercial" />
        <StatCard label="Active services" value={totalRequests} detail="Open work orders" tone="green" />
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {properties.map(property => (
          <Card key={property.id} className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className={`relative h-48 bg-gradient-to-br ${property.cover}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.28),transparent_28%)]" />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-950">{property.status}</div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-sm font-semibold text-white/75">{property.type}</p>
                <h2 className="mt-1 text-2xl font-black">{property.name}</h2>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-neutral-500">{property.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <Mini label="Units" value={property.units} />
                <Mini label="Occupancy" value={property.occupancy} />
                <Mini label="Requests" value={property.openRequests} />
              </div>
              <div className="mt-5 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
                <div className="font-bold text-neutral-950">{property.location}</div>
                <div className="mt-1">Managed by {property.manager}</div>
              </div>
              <Button variant="secondary" onClick={() => navigate(`/properties/${property.id}`)} className="mt-5 w-full">View property detail</Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

function HeroMetric({ label, value }) {
  return <div className="rounded-lg bg-white/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">{label}</p><p className="mt-1 text-3xl font-black text-white">{value}</p></div>;
}

function Mini({ label, value }) {
  return <div className="rounded-lg bg-orange-50 p-3 text-center"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-orange-700">{label}</p><p className="mt-1 text-base font-black text-neutral-950">{value}</p></div>;
}
