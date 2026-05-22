import { mockAccount } from '../mock/data';
import { Card, PageHeader } from '../components/PortalUI';

export default function Account() {
  const account = mockAccount;
  return (
    <div>
      <PageHeader title="Account" eyebrow="Property details" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-black text-neutral-950">Account information</h2>
          <InfoRow label="Account name" value={account.Name} />
          <InfoRow label="Phone" value={account.Phone} />
        </Card>
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-black text-neutral-950">Billing address</h2>
          <InfoRow label="Street" value={account.BillingStreet} />
          <InfoRow label="City" value={account.BillingCity} />
          <InfoRow label="State" value={account.BillingState} />
          <InfoRow label="Postal code" value={account.BillingPostalCode} />
          <InfoRow label="Country" value={account.BillingCountry} />
        </Card>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return <div className="flex justify-between gap-4 border-b border-neutral-100 py-3 last:border-0"><span className="text-sm font-semibold text-neutral-500">{label}</span><span className="text-right text-sm font-bold text-neutral-900">{value || '-'}</span></div>;
}
