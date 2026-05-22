import { mockContracts } from '../mock/data';
import { Badge, PageHeader, TableShell, Td, Th, statusTone } from '../components/PortalUI';

export default function Contracts() {
  const contracts = mockContracts;
  return (
    <div>
      <PageHeader title="Contracts" eyebrow="Documents" />
      <TableShell><table className="w-full border-collapse text-sm"><thead><tr><Th>Contract</Th><Th>Status</Th><Th>Start date</Th><Th>End date</Th><Th>Term</Th></tr></thead><tbody>{contracts.map(c => <tr key={c.Id} className="hover:bg-orange-50/50"><Td><span className="font-bold text-neutral-950">{c.ContractNumber}</span></Td><Td><Badge tone={statusTone(c.Status)}>{c.Status}</Badge></Td><Td>{new Date(c.StartDate).toLocaleDateString()}</Td><Td>{new Date(c.EndDate).toLocaleDateString()}</Td><Td>{c.ContractTerm} months</Td></tr>)}</tbody></table></TableShell>
    </div>
  );
}
