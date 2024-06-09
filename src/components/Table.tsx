import data from "../data/invoices.json";
import { formatDate } from "../utils/date-utils";
import { capitalizeFirstLetter } from "../utils/string-utils";
import InvoiceSelect from "./InvoiceSelect";

type TableProps = {
  searchTerm: string;
  selectedOption: string;
  excludedInvoices: string[];
  handleCheckboxChange: (supplierReference: string, isChecked: boolean) => void;
};

const Table = ({
  searchTerm,
  selectedOption,
  excludedInvoices,
  handleCheckboxChange,
}: TableProps) => {
  const filteredInvoices = data.pay_run.invoices.filter((invoice) =>
    invoice.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Current excluded invoices state:", excludedInvoices);

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-blue-200">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-blue-200 bg-white-200 text-left">
            <th className="rounded-tl-2xl px-2 py-3 font-medium tracking-wider text-black-800">
              <InvoiceSelect
                selectedOption={selectedOption}
                setSelectedOption={() => {}}
              />
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-black-800">
              Invoice Number
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-black-800">
              Supplier
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-black-800">
              Invoice Date
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-black-800">
              Due Date
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-black-800">
              Amount
            </th>
            <th className="rounded-tr-2xl px-6 py-3 font-medium tracking-wider text-black-800">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredInvoices.map((invoice, index) => (
            <tr
              key={invoice.supplier_reference}
              className={`text-gray-400 ${
                index === filteredInvoices.length - 1
                  ? "rounded-bl-2xl rounded-br-2xl"
                  : ""
              }`}
            >
              <td className="whitespace-nowrap px-6 py-4">
                <input
                  type="checkbox"
                  checked={excludedInvoices.includes(
                    invoice.supplier_reference
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(
                      invoice.supplier_reference,
                      e.target.checked
                    )
                  }
                  disabled={selectedOption !== "Exclude"}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-gray-400">{invoice.invoice_number}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="text-gray-400">{invoice.supplier}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-400">
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(invoice.amount)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-400">
                  {formatDate(invoice.posted_date)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-400">
                  {formatDate(invoice.due_date)}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-gray-400">
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
