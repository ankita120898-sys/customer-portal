import { mockInvoices } from '../mock/data';
import { Badge, PageHeader, StatCard, TableShell, Td, Th, statusTone } from '../components/PortalUI';

export default function Invoices() {
  const invoices = mockInvoices;
  const total = invoices.reduce((sum, i) => sum + (i.Amount__c || 0), 0);
  const unpaid = invoices.filter(i => i.Status__c !== 'Paid').reduce((sum, i) => sum + (i.Amount__c || 0), 0);

  return (
    <div>
      <PageHeader title="Invoices" eyebrow="Billing" />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <StatCard label="Total invoiced" value={`$${total.toFixed(2)}`} />
        <StatCard label="Outstanding" value={`$${unpaid.toFixed(2)}`} tone={unpaid > 0 ? 'red' : 'green'} />
        <StatCard label="Total invoices" value={invoices.length} tone="orange" />
      </div>
      <TableShell><table className="w-full border-collapse text-sm"><thead><tr><Th>Invoice</Th><Th>Amount</Th><Th>Invoice date</Th><Th>Due date</Th><Th>Status</Th></tr></thead><tbody>{invoices.map(inv => <tr key={inv.Id} className="hover:bg-orange-50/50"><Td><span className="font-bold text-neutral-950">{inv.Name}</span></Td><Td>${inv.Amount__c?.toFixed(2)}</Td><Td>{new Date(inv.Invoice_Date__c).toLocaleDateString()}</Td><Td>{new Date(inv.Due_Date__c).toLocaleDateString()}</Td><Td><Badge tone={statusTone(inv.Status__c)}>{inv.Status__c}</Badge></Td></tr>)}</tbody></table></TableShell>
    </div>
  );
}
