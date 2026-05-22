import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/PortalUI';

const amenities = [
  { name: 'Clubhouse lounge', hours: '8:00 AM - 10:00 PM', status: 'Available', category: 'Community', tone: 'bg-orange-100 text-orange-800' },
  { name: 'Fitness studio', hours: '6:00 AM - 11:00 PM', status: 'Available', category: 'Wellness', tone: 'bg-emerald-100 text-emerald-800' },
  { name: 'Rooftop garden', hours: '7:00 AM - 9:00 PM', status: 'Limited slots', category: 'Leisure', tone: 'bg-amber-100 text-amber-800' },
  { name: 'Visitor parking', hours: '24 hours', status: 'Request required', category: 'Access', tone: 'bg-neutral-100 text-neutral-800' },
  { name: 'Conference room', hours: '9:00 AM - 7:00 PM', status: 'Booking required', category: 'Work', tone: 'bg-orange-100 text-orange-800' },
  { name: 'Maintenance desk', hours: '9:30 AM - 6:30 PM', status: 'Open', category: 'Support', tone: 'bg-emerald-100 text-emerald-800' },
];

export default function Amenities() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 pb-8">
      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg bg-neutral-950 p-7 text-white shadow-2xl shadow-black/10 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">Amenity listing</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Spaces and services ready when your tenants need them.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">Browse community spaces, book access, and route approvals to the right service team in a few clicks.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => navigate('/access-request')}>Book an amenity</Button>
            <Button variant="secondary" onClick={() => navigate('/properties')} className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-neutral-950">View properties</Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Feature title="Fast approvals" text="Requests are attached to your verified tenant account." />
          <Feature title="Live availability" text="Status tags make it easy to see what needs booking." />
          <Feature title="Shared history" text="Bookings and permissions are visible from My Account." />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {amenities.map(item => (
          <Card key={item.name} className="group overflow-hidden p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-lg font-black text-orange-700">{item.name[0]}</div>
              <span className={`rounded-full px-3 py-1 text-xs font-black ${item.tone}`}>{item.status}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">{item.category}</p>
            <h2 className="mt-2 text-xl font-black text-neutral-950">{item.name}</h2>
            <p className="mt-2 text-sm text-neutral-500">{item.hours}</p>
            <div className="mt-5 rounded-lg bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">Reserve access, add notes, and let the portal notify the service desk.</div>
            <Button variant="secondary" onClick={() => navigate('/access-request')} className="mt-5 w-full">Request booking</Button>
          </Card>
        ))}
      </section>
    </div>
  );
}

function Feature({ title, text }) {
  return <Card className="p-6"><p className="text-lg font-black text-neutral-950">{title}</p><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></Card>;
}
