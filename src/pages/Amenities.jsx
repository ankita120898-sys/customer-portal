import { useNavigate } from 'react-router-dom';
import { Button, Card, PageHeader } from '../components/PortalUI';

const amenities = [
  { name: 'Clubhouse lounge', hours: '8:00 AM - 10:00 PM', status: 'Available' },
  { name: 'Fitness studio', hours: '6:00 AM - 11:00 PM', status: 'Available' },
  { name: 'Rooftop garden', hours: '7:00 AM - 9:00 PM', status: 'Limited slots' },
  { name: 'Visitor parking', hours: '24 hours', status: 'Request required' },
  { name: 'Conference room', hours: '9:00 AM - 7:00 PM', status: 'Booking required' },
  { name: 'Maintenance desk', hours: '9:30 AM - 6:30 PM', status: 'Open' },
];

export default function Amenities() {
  const navigate = useNavigate();
  return (
    <div className="space-y-7">
      <PageHeader title="Amenities" eyebrow="Services" action={<Button onClick={() => navigate('/access-request')}>Book access</Button>} />
      <section className="rounded-lg bg-neutral-950 p-7 text-white">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Amenity listing</p>
          <h2 className="mt-3 text-4xl font-black leading-tight">Reserve spaces, view availability, and request visitor permissions.</h2>
          <p className="mt-4 text-sm leading-6 text-white/70">All amenities are connected to your tenant profile so service teams can validate access faster.</p>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {amenities.map(item => (
          <Card key={item.name} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-neutral-950">{item.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{item.hours}</p>
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">{item.status}</span>
            </div>
            <Button variant="secondary" onClick={() => navigate('/access-request')} className="mt-5 w-full">Request booking</Button>
          </Card>
        ))}
      </section>
    </div>
  );
}
