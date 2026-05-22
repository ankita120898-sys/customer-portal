import { useState } from 'react';
import { mockContact } from '../mock/data';
import { Button, Card, PageHeader, inputClass } from '../components/PortalUI';

export default function Profile() {
  const contact = mockContact;
  const [form, setForm] = useState({ phone: contact.Phone, mobilePhone: contact.MobilePhone });
  const [message, setMessage] = useState(null);
  const handleSave = (e) => { e.preventDefault(); setMessage({ type: 'success', text: 'Profile updated successfully.' }); };

  return (
    <div>
      <PageHeader title="Profile" eyebrow="Contact" />
      {message && <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">{message.text}</div>}
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-black text-neutral-950">Contact details</h2>
          <InfoRow label="First name" value={contact.FirstName} />
          <InfoRow label="Last name" value={contact.LastName} />
          <InfoRow label="Email" value={contact.Email} />
          <InfoRow label="Mailing street" value={contact.MailingStreet} />
          <InfoRow label="City" value={contact.MailingCity} />
          <InfoRow label="State" value={contact.MailingState} />
          <InfoRow label="Postal code" value={contact.MailingPostalCode} />
        </Card>
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-black text-neutral-950">Update phone numbers</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">Phone</span><input type="tel" className={inputClass()} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></label>
            <label className="block"><span className="mb-1.5 block text-sm font-bold text-neutral-700">Mobile phone</span><input type="tel" className={inputClass()} value={form.mobilePhone} onChange={e => setForm({ ...form, mobilePhone: e.target.value })} /></label>
            <Button type="submit">Save changes</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return <div className="flex justify-between gap-4 border-b border-neutral-100 py-3 last:border-0"><span className="text-sm font-semibold text-neutral-500">{label}</span><span className="text-right text-sm font-bold text-neutral-900">{value || '-'}</span></div>;
}
