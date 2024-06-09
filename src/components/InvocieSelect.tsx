const InvoiceSelect = () => {
  return (
    <select
      id="invoice_select"
      name="invoice_select"
      className="filter-select cursor-pointer rounded-xl border bg-purple-50 px-3 py-1.5 text-sm font-semibold tracking-tight text-black-600 shadow-md"
      value=""
    >
      <option value="Approve">APPR</option>
      <option value="Exclude">EXCL</option>
    </select>
  );
};

export default InvoiceSelect;
