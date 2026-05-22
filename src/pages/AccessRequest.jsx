import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, PageHeader, inputClass } from '../components/PortalUI';

export default function AccessRequest() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ requestType: 'Amenity booking', date: '', notes: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-7">
      <PageHeader title="Access request" eyebrow="Permissions" action={<Button variant="secondary" onClick={() => navigate('/cases')}>View service requests</Button>} />
      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Request types</p>
          <h2 className="mt-2 text-2xl font-black text-neutral-950">Submit access, amenity, visitor, or document requests.</h2>
          <div className="mt-6 space-y-3">
            {['Amenity booking', 'Visitor parking', 'Document access', 'Move-in permission'].map(type => (
              <button key={type} onClick={() => setForm({ ...form, requestType: type })} className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-bold transition ${form.requestType === type ? 'border-orange-500 bg-orange-50 text-orange-800' : 'border-black/10 bg-white text-neutral-700 hover:border-orange-300'}`}>{type}</button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          {submitted ? (
            <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h2 className="mt-5 text-2xl font-black text-neutral-950">Request submitted</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">Your {form.requestType.toLowerCase()} request has been sent to the service team.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button onClick={() => { setSubmitted(false); setForm({ requestType: 'Amenity booking', date: '', notes: '' }); }}>Create another</Button>
                <Button variant="secondary" onClick={() => navigate('/dashboard')}>Go to my account</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">Request type</span><select className={inputClass()} value={form.requestType} onChange={e => setForm({ ...form, requestType: e.target.value })}><option>Amenity booking</option><option>Visitor parking</option><option>Document access</option><option>Move-in permission</option></select></label>
              <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">Preferred date</span><input className={inputClass()} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required /></label>
              <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">Notes</span><textarea className={`${inputClass()} min-h-[130px] resize-y`} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Share timing, visitors, space requirements, or other details" /></label>
              <Button type="submit">Submit request</Button>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}

