import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, inputClass } from '../components/PortalUI';
import { properties } from '../data/properties';

const requestTypes = [
  { label: 'Amenity booking', text: 'Reserve a shared facility or service space.' },
  { label: 'Visitor parking', text: 'Request parking permission for guests.' },
  { label: 'Document access', text: 'Ask for lease, invoice, or compliance files.' },
  { label: 'Move-in permission', text: 'Coordinate entry, lift, and security access.' },
];

export default function AccessRequest() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ requestType: 'Amenity booking', property: properties[0].name, date: '', time: '', notes: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-7 pb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Permissions</p>
          <h1 className="mt-1 text-3xl font-black text-neutral-950">Access Request</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">Submit amenity, visitor parking, document, or move-in access requests for your selected property.</p>
        </div>
        <Button variant="secondary" onClick={() => navigate('/cases')}>View service requests</Button>
      </div>

      <section className="grid gap-5 lg:grid-cols-[360px_1fr]">
        <Card className="h-max p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Choose request type</p>
          <h2 className="mt-2 text-2xl font-black text-neutral-950">What do you need?</h2>
          <div className="mt-6 space-y-3">
            {requestTypes.map(type => (
              <button key={type.label} onClick={() => setForm({ ...form, requestType: type.label })} className={`w-full rounded-lg border p-4 text-left transition ${form.requestType === type.label ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/10' : 'border-black/10 bg-white hover:border-orange-300'}`}>
                <span className="block text-sm font-black text-neutral-950">{type.label}</span>
                <span className="mt-1 block text-sm leading-5 text-neutral-500">{type.text}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          {submitted ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="30" height="30"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h2 className="mt-5 text-3xl font-black text-neutral-950">Request submitted</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">Your {form.requestType.toLowerCase()} request for {form.property} has been sent to the service team.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button onClick={() => { setSubmitted(false); setForm({ requestType: 'Amenity booking', property: properties[0].name, date: '', time: '', notes: '' }); }}>Create another</Button>
                <Button variant="secondary" onClick={() => navigate('/dashboard')}>Go to my account</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Request type"><select className={inputClass()} value={form.requestType} onChange={e => setForm({ ...form, requestType: e.target.value })}>{requestTypes.map(type => <option key={type.label}>{type.label}</option>)}</select></Field>
                <Field label="Property"><select className={inputClass()} value={form.property} onChange={e => setForm({ ...form, property: e.target.value })}>{properties.map(property => <option key={property.id}>{property.name}</option>)}</select></Field>
                <Field label="Preferred date"><input className={inputClass()} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required /></Field>
                <Field label="Preferred time"><input className={inputClass()} type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} /></Field>
              </div>
              <Field label="Notes"><textarea className={`${inputClass()} min-h-[150px] resize-y`} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Share visitor names, amenity, timing, or document details" /></Field>
              <div className="rounded-lg bg-orange-50 p-4 text-sm leading-6 text-orange-900">Requests are routed using your tenant profile. You can track submitted items from My Account.</div>
              <Button type="submit">Submit request</Button>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">{label}</span>{children}</label>;
}
