import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/PortalUI';
import { properties } from '../data/properties';

const initialFilters = {
  project: '',
  propertyType: '',
  unitType: '',
  furnishing: '',
  bedrooms: '',
  bathrooms: '',
  minBudget: '',
  maxBudget: '',
};

export default function Properties() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(initialFilters);
  const [applied, setApplied] = useState(initialFilters);

  const filteredProperties = useMemo(() => properties.filter(property => {
    const min = Number(applied.minBudget || 0);
    const max = Number(applied.maxBudget || Number.MAX_SAFE_INTEGER);
    return (!applied.project || property.project === applied.project)
      && (!applied.propertyType || property.propertyType === applied.propertyType)
      && (!applied.unitType || property.unitType === applied.unitType)
      && (!applied.furnishing || property.furnishing === applied.furnishing)
      && (!applied.bedrooms || property.bedrooms === applied.bedrooms || property.bedrooms === 'Any')
      && (!applied.bathrooms || property.bathrooms === applied.bathrooms)
      && property.budget >= min
      && property.budget <= max;
  }), [applied]);

  const update = (key, value) => setFilters(current => ({ ...current, [key]: value }));
  const clearAll = () => { setFilters(initialFilters); setApplied(initialFilters); };

  return (
    <div className="pb-8">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Portfolio</p>
          <h1 className="mt-1 text-3xl font-black text-neutral-950">Properties</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">Filter and review linked properties, then open the detail page for service, access, and document context.</p>
        </div>
        <Button onClick={() => navigate('/access-request')}>Request access</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <FilterPanel filters={filters} update={update} clearAll={clearAll} apply={() => setApplied(filters)} />

        <section className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-5 py-4 shadow-sm">
            <div>
              <p className="text-sm font-bold text-neutral-950">{filteredProperties.length} properties found</p>
              <p className="mt-1 text-xs text-neutral-500">Showing matches based on selected filters</p>
            </div>
            <select className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100">
              <option>Sort: Recommended</option>
              <option>Budget: Low to High</option>
              <option>Budget: High to Low</option>
            </select>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {filteredProperties.map(property => (
              <Card key={property.id} className="overflow-hidden transition hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="grid md:grid-cols-[170px_1fr]">
                  <div className={`min-h-[180px] bg-gradient-to-br ${property.cover}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-600">{property.project}</p>
                        <h2 className="mt-2 text-xl font-black text-neutral-950">{property.name}</h2>
                        <p className="mt-1 text-sm text-neutral-500">{property.location}</p>
                      </div>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-800">{property.status}</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <Mini label="Type" value={property.unitType} />
                      <Mini label="Beds" value={property.bedrooms} />
                      <Mini label="Budget" value={`INR ${property.budget.toLocaleString('en-IN')}`} />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-neutral-500">{property.description}</p>
                    <Button variant="secondary" onClick={() => navigate(`/properties/${property.id}`)} className="mt-5 w-full">View details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FilterPanel({ filters, update, clearAll, apply }) {
  return (
    <aside className="h-max rounded-lg border border-black/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-2 text-xl font-black text-neutral-950"><span>Filters</span></h2>
        <button onClick={clearAll} className="text-sm font-black text-red-600 hover:text-red-700">Clear All</button>
      </div>
      <div className="space-y-5">
        <SelectField label="Project" value={filters.project} onChange={value => update('project', value)} options={unique('project')} placeholder="--All Projects--" />
        <SelectField label="Property Type" value={filters.propertyType} onChange={value => update('propertyType', value)} options={unique('propertyType')} placeholder="All Property Types" />
        <SelectField label="Unit Type" value={filters.unitType} onChange={value => update('unitType', value)} options={unique('unitType')} placeholder="All Types" />
        <SelectField label="Furnishing" value={filters.furnishing} onChange={value => update('furnishing', value)} options={unique('furnishing')} placeholder="Any" />
        <SelectField label="Bedrooms" value={filters.bedrooms} onChange={value => update('bedrooms', value)} options={['1', '2', '3', '4']} placeholder="Any" />
        <SelectField label="Bathrooms" value={filters.bathrooms} onChange={value => update('bathrooms', value)} options={['1', '2', '3', '4']} placeholder="Any" />
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.08em] text-neutral-700">Budget Range</p>
          <div className="grid grid-cols-2 gap-3">
            <NumberField label="Min" value={filters.minBudget} onChange={value => update('minBudget', value)} />
            <NumberField label="Max" value={filters.maxBudget} onChange={value => update('maxBudget', value)} />
          </div>
        </div>
        <Button onClick={apply} className="w-full">Apply Filters</Button>
      </div>
    </aside>
  );
}

function SelectField({ label, value, onChange, options, placeholder }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-neutral-700">{label}</span><select value={value} onChange={event => onChange(event.target.value)} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-950 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"><option value="">{placeholder}</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>;
}

function NumberField({ label, value, onChange }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-neutral-600">{label}</span><input type="number" min="0" value={value} onChange={event => onChange(event.target.value)} placeholder={label} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-950 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100" /></label>;
}

function Mini({ label, value }) {
  return <div className="rounded-lg bg-neutral-50 p-3"><p className="text-[10px] font-black uppercase tracking-[0.12em] text-neutral-500">{label}</p><p className="mt-1 truncate text-xs font-black text-neutral-950">{value}</p></div>;
}

function unique(key) {
  return [...new Set(properties.map(property => property[key]))].filter(Boolean);
}
