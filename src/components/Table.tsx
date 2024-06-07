import data from "../data/invoices.json";


const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Invoice
            </th>
            <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Invoice Date
            </th>
            <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Due Date
            </th>
            <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Amount
            </th>
            <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.pay_run.invoices.map((invoice) => (
            <tr key={invoice.invoice_number} className="text-sm text-gray-500">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-gray-800">{invoice.invoice_number}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">{invoice.posted_date}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">{invoice.due_date}</div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(invoice.amount)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">{invoice.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
