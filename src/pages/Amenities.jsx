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
    <div className="space-y-7 pb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Amenity Listing</p>
          <h1 className="mt-1 text-3xl font-black text-neutral-950">Amenities</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">Browse shared facilities, availability, and booking requirements for your linked properties.</p>
        </div>
        <Button onClick={() => navigate('/access-request')}>Book an amenity</Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature title="Quick booking" text="Submit access and amenity requests directly from the listing." />
        <Feature title="Clear availability" text="Status tags show when a facility is available or requires approval." />
        <Feature title="Connected profile" text="Requests are linked to your tenant account for faster validation." />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {amenities.map(item => (
          <Card key={item.name} className="p-5 transition hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-lg font-black text-orange-700">{item.name[0]}</div>
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
  return <Card className="p-5"><p className="text-lg font-black text-neutral-950">{title}</p><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></Card>;
}
