import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, StatCard } from '../components/PortalUI';
import { properties } from '../data/properties';

export default function PropertyDetail() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const property = properties.find(item => item.id === propertyId);

  if (!property) return <Navigate to="/properties" replace />;

  return (
    <div className="space-y-7 pb-8">
      <button onClick={() => navigate('/properties')} className="text-sm font-bold text-neutral-500 transition hover:text-orange-700">Back to properties</button>

      <section className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${property.cover} p-7 text-white shadow-2xl shadow-black/10 sm:p-10`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.28),transparent_28%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">{property.status}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">{property.name}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{property.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button onClick={() => navigate('/access-request')}>Request access</Button>
              <Button variant="secondary" onClick={() => navigate('/cases')} className="border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-neutral-950">Open cases</Button>
            </div>
          </div>
          <Card className="border-white/15 bg-white/95 p-5 text-neutral-950">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">Property manager</p>
            <h2 className="mt-2 text-2xl font-black">{property.manager}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-500">{property.address}</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Units" value={property.units} detail="Under management" tone="orange" />
        <StatCard label="Occupancy" value={property.occupancy} detail="Current status" tone="green" />
        <StatCard label="Open requests" value={property.openRequests} detail="Service queue" />
        <StatCard label="Documents" value="12" detail="Available files" />
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Highlights</p>
          <h2 className="mt-2 text-2xl font-black text-neutral-950">Property features</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {property.highlights.map(item => <div key={item} className="rounded-lg border border-black/10 bg-white p-4 text-sm font-bold text-neutral-700">{item}</div>)}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Service health</p>
          <h2 className="mt-2 text-2xl font-black text-neutral-950">Current operations</h2>
          <div className="mt-5 space-y-4">
            <Health label="Maintenance response" value="92%" />
            <Health label="Payment completion" value="88%" />
            <Health label="Access approvals" value="95%" />
          </div>
        </Card>
      </section>
    </div>
  );
}

function Health({ label, value }) {
  const width = parseInt(value, 10);
  return <div><div className="flex justify-between text-sm font-bold text-neutral-700"><span>{label}</span><span>{value}</span></div><div className="mt-2 h-2 rounded-full bg-neutral-100"><div className="h-2 rounded-full bg-orange-500" style={{ width: `${width}%` }} /></div></div>;
}
