import data from "../data/invoices.json";
import { formatDate } from "../utils/date-utils";
import { capitalizeFirstLetter } from "../utils/string-utils";

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border border-blue-200">
        <thead>
            <tr className="rounded-2xl border border-blue-200 bg-white-200 text-left">
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Invoice Number
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Supplier
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
            <tr
              key={invoice.supplier_reference}
              className="text-sm text-gray-500"
            >
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-gray-800">{invoice.invoice_number}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-gray-800">{invoice.supplier}</div>
                </div>
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
                <div className="text-gray-800">
                  {formatDate(invoice.posted_date)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">
                  {formatDate(invoice.due_date)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-800">
                  {capitalizeFirstLetter(invoice.status)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
