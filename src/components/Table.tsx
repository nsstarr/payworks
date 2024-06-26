import data from "../data/invoices.json";
import { formatDate } from "../utils/date-utils";
import { capitalizeFirstLetter } from "../utils/string-utils";
import EditDropdown from "./EditDropdown";
import InvoiceSelect from "./InvoiceSelect";

type TableProps = {
  searchTerm: string;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  excludedInvoices: string[];
  handleCheckboxChange: (supplierReference: string, isChecked: boolean) => void;
  handleDropdownOptionSelect: (option: string, supplier: string) => void;
};

const Table = ({
  searchTerm,
  selectedOption,
  setSelectedOption,
  excludedInvoices,
  handleCheckboxChange,
  handleDropdownOptionSelect,
}: TableProps) => {
  const filteredInvoices = data.pay_run.invoices.filter((invoice) =>
    invoice.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Current excluded invoices state:", excludedInvoices);

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-blue-200">
      <div className="table-container h-[calc(100vh-150px)] overflow-y-auto">
        <table className="w-full table-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr className="border-b border-blue-200 bg-white-200 text-left">
              <th className="rounded-tl-2xl px-2 py-3 font-medium tracking-wider text-black-800">
                <InvoiceSelect
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Invoice Number
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Supplier
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Amount
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Invoice Date
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Due Date
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-black-800">
                Status
              </th>
              <th className="hidden px-2 py-3 font-medium tracking-wider text-black-800 lg:visible lg:rounded-tr-2xl xl:block">
                Actions
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
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-gray-400">{invoice.invoice_number}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-gray-400">{invoice.supplier}</div>
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
                <td className="hidden whitespace-nowrap px-4 py-4 text-center xl:block">
                  <EditDropdown
                    onOptionSelect={(option) =>
                      handleDropdownOptionSelect(option, invoice.supplier)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
