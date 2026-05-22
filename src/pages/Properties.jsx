import { useNavigate } from 'react-router-dom';
import { Button, Card, PageHeader, StatCard } from '../components/PortalUI';

const properties = [
  { name: 'Orion Residency', type: 'Premium apartments', location: 'Bengaluru, Karnataka', status: 'Occupied', units: 84 },
  { name: 'Solaris Business Park', type: 'Commercial tower', location: 'Pune, Maharashtra', status: 'Active', units: 42 },
  { name: 'Amber Heights', type: 'Mixed-use community', location: 'Gurugram, Haryana', status: 'Onboarding', units: 118 },
];

export default function Properties() {
  const navigate = useNavigate();
  return (
    <div className="space-y-7">
      <PageHeader title="Properties" eyebrow="Portfolio" action={<Button onClick={() => navigate('/access-request')}>Request access</Button>} />
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Managed sites" value="3" detail="Across India" tone="orange" />
        <StatCard label="Total units" value="244" detail="Residential and commercial" />
        <StatCard label="Active services" value="18" detail="Open work orders" tone="green" />
      </section>
      <section className="grid gap-5 lg:grid-cols-3">
        {properties.map(property => (
          <Card key={property.name} className="overflow-hidden">
            <div className="h-36 bg-gradient-to-br from-neutral-950 via-neutral-800 to-orange-600" />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">{property.status}</p>
              <h2 className="mt-2 text-xl font-black text-neutral-950">{property.name}</h2>
              <p className="mt-2 text-sm text-neutral-500">{property.type}</p>
              <div className="mt-5 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
                <div className="font-bold text-neutral-950">{property.location}</div>
                <div className="mt-1">{property.units} units under management</div>
              </div>
              <Button variant="secondary" onClick={() => navigate('/dashboard')} className="mt-5 w-full">View details</Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
