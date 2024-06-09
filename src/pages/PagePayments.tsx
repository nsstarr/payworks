import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import InvoiceControlPanel from "../components/InvoiceControlPanel";
import Table from "../components/Table";
import data from "../data/invoices.json";

const PagePayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Exclude");
  const [excludedInvoices, setExcludedInvoices] = useState(
    data.pay_run.invoices
      .filter((invoice) => invoice.excluded)
      .map((invoice) => invoice.supplier_reference)
  );
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    setCheckedCount(excludedInvoices.length);
  }, [excludedInvoices]);

  const handleCheckboxChange = (
    supplierReference: string,
    isChecked: boolean
  ) => {
    setExcludedInvoices((prev) =>
      isChecked
        ? [...prev, supplierReference]
        : prev.filter((ref) => ref !== supplierReference)
    );
  };

  const handleInvoiceButtonClick = () => {
    if (selectedOption === "Exclude") {
      data.pay_run.invoices = data.pay_run.invoices.map((invoice) => {
        if (excludedInvoices.includes(invoice.supplier_reference)) {
          return { ...invoice, excluded: true };
        }
        return invoice;
      });
      console.log("Invoices after update:", data.pay_run.invoices);
      setExcludedInvoices([]);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 bg-white-100 px-20 pt-4">
      <Breadcrumbs />
      <InvoiceControlPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleInvoiceButtonClick={handleInvoiceButtonClick}
        checkedCount={checkedCount}
      />
      <Table
        searchTerm={searchTerm}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        excludedInvoices={excludedInvoices}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default PagePayments;
