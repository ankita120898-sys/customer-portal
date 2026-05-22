import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockCases, mockInvoices, mockContracts } from '../mock/data';
import { Badge, Card, PageHeader, StatCard, Td, Th, statusTone } from '../components/PortalUI';

export default function Dashboard() {
  const { user } = useAuth();
  const cases = mockCases;
  const invoices = mockInvoices;
  const contracts = mockContracts;
  const openCases = cases.filter(c => !['Closed', 'Resolved'].includes(c.Status));
  const pendingInvoices = invoices.filter(i => i.Status__c === 'Unpaid' || i.Status__c === 'Overdue');
  const activeContracts = contracts.filter(c => c.Status === 'Activated');

  return (
    <div>
      <PageHeader title="My Account" eyebrow={`Welcome back, ${user?.name?.split(' ')[0] || 'Anjali'}`} />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Open cases" value={openCases.length} detail="Service requests" tone={openCases.length ? 'orange' : 'green'} />
        <StatCard label="Pending invoices" value={pendingInvoices.length} detail="Awaiting payment" tone={pendingInvoices.length ? 'red' : 'green'} />
        <StatCard label="Active contracts" value={activeContracts.length} detail="Current leases" />
        <StatCard label="Total cases" value={cases.length} detail="All time" />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card className="p-5">
          <PanelTitle title="Recent service requests" to="/cases" />
          <table className="w-full border-collapse text-sm">
            <thead><tr><Th>Case</Th><Th>Subject</Th><Th>Status</Th></tr></thead>
            <tbody>{cases.slice(0, 5).map(c => <tr key={c.Id} className="hover:bg-orange-50/50"><Td><span className="font-bold text-neutral-950">{c.CaseNumber}</span></Td><Td>{c.Subject}</Td><Td><Badge tone={statusTone(c.Status)}>{c.Status}</Badge></Td></tr>)}</tbody>
          </table>
        </Card>

        <Card className="p-5">
          <PanelTitle title="Recent invoices" to="/invoices" />
          <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr><Th>Invoice</Th><Th>Amount</Th><Th>Status</Th></tr></thead><tbody>{invoices.slice(0, 5).map(inv => <tr key={inv.Id} className="hover:bg-orange-50/50"><Td><span className="font-bold text-neutral-950">{inv.Name}</span></Td><Td>${inv.Amount__c?.toFixed(2)}</Td><Td><Badge tone={statusTone(inv.Status__c)}>{inv.Status__c}</Badge></Td></tr>)}</tbody></table></div>
        </Card>
      </div>
    </div>
  );
}

function PanelTitle({ title, to }) {
  return <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-black text-neutral-950">{title}</h2><Link to={to} className="text-sm font-bold text-orange-700 hover:text-orange-800">View all</Link></div>;
}
