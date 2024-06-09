type InvoiceSelectProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

const InvoiceSelect = ({
  selectedOption,
  setSelectedOption,
}: InvoiceSelectProps) => {
  return (
    <select
      id="invoice_select"
      name="invoice_select"
      className="filter-select cursor-pointer rounded-xl border bg-purple-50 px-3 py-1.5 text-sm font-semibold tracking-tight text-black-600 shadow-md"
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      <option value="Approve">APPR</option>
      <option value="Exclude">EXCL</option>
    </select>
  );
};

export default InvoiceSelect;
