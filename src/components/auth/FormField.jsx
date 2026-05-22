export default function FormField({ label, type = 'text', value, onChange, placeholder, error, required = false }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 flex items-center text-sm font-semibold text-neutral-800">
        {label}
        {required && <span className="ml-1 text-orange-600">*</span>}
      </label>
      <div className={`flex items-center rounded-lg bg-white transition ${error ? 'border border-red-500 ring-4 ring-red-100' : 'border border-neutral-200 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100'}`}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 rounded-lg bg-transparent px-3.5 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
        />
      </div>
      {error && <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>}
    </div>
  );
}
