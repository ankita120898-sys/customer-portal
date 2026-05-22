import { useState } from 'react';
import { mockCases } from '../mock/data';
import { Badge, Button, Card, PageHeader, TableShell, Td, Th, inputClass, statusTone } from '../components/PortalUI';

export default function Cases() {
  const [cases, setCases] = useState(mockCases);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ subject: '', description: '', priority: 'Medium' });
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCase = { Id: String(cases.length + 1), CaseNumber: `0000${1005 + cases.length + 1}`, Subject: form.subject, Description: form.description, Priority: form.priority, Status: 'New', CreatedDate: new Date().toISOString() };
    setCases([newCase, ...cases]);
    setMessage({ type: 'success', text: 'Service request submitted successfully.' });
    setForm({ subject: '', description: '', priority: 'Medium' });
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader title="Service requests" eyebrow="Support" action={<Button onClick={() => { setShowForm(!showForm); setMessage(null); }} variant={showForm ? 'secondary' : 'primary'}>{showForm ? 'Cancel' : 'New request'}</Button>} />
      {message && <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">{message.text}</div>}
      {showForm && (
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-black text-neutral-950">New service request</h2>
          <form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-2">
            <Field label="Subject"><input className={inputClass()} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Brief description of the issue" required /></Field>
            <Field label="Priority"><select className={inputClass()} value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}><option>Low</option><option>Medium</option><option>High</option></select></Field>
            <Field label="Description" className="lg:col-span-2"><textarea className={`${inputClass()} min-h-[120px] resize-y`} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Provide more details" /></Field>
            <div className="lg:col-span-2"><Button type="submit">Submit request</Button></div>
          </form>
        </Card>
      )}
      <TableShell><table className="w-full border-collapse text-sm"><thead><tr><Th>Case</Th><Th>Subject</Th><Th>Priority</Th><Th>Status</Th><Th>Created</Th></tr></thead><tbody>{cases.map(c => <tr key={c.Id} className="hover:bg-orange-50/50"><Td><span className="font-bold text-neutral-950">{c.CaseNumber}</span></Td><Td>{c.Subject}</Td><Td><Badge tone={statusTone(c.Priority)}>{c.Priority}</Badge></Td><Td><Badge tone={statusTone(c.Status)}>{c.Status}</Badge></Td><Td>{new Date(c.CreatedDate).toLocaleDateString()}</Td></tr>)}</tbody></table></TableShell>
    </div>
  );
}

function Field({ label, children, className = '' }) {
  return <label className={`block ${className}`}><span className="mb-1.5 block text-sm font-bold text-neutral-700">{label}</span>{children}</label>;
}
