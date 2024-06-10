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
  const [invoices, setInvoices] = useState(data.pay_run.invoices);

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
      const updatedInvoices = invoices.map((invoice) => {
        if (excludedInvoices.includes(invoice.supplier_reference)) {
          return { ...invoice, excluded: true };
        }
        return invoice;
      });
      setInvoices(updatedInvoices);
      console.log("Invoices after update:", updatedInvoices);
      setExcludedInvoices([]);
    } else if (selectedOption === "Approve") {
      const updatedInvoices = invoices.map((invoice) => {
        if (excludedInvoices.includes(invoice.supplier_reference)) {
          return { ...invoice, status: "approved" };
        }
        return invoice;
      });
      setInvoices(updatedInvoices);
      console.log("Invoices after update:", updatedInvoices);
      setExcludedInvoices([]);
    }
  };

  const handleDropdownOptionSelect = (option: string, supplier: string) => {
    if (option === "Exclude supplier") {
      const updatedInvoices = invoices.map((invoice) => {
        if (invoice.supplier === supplier) {
          return { ...invoice, excluded: true };
        }
        return invoice;
      });
      setInvoices(updatedInvoices);
      console.log("Invoices after excluding supplier:", updatedInvoices);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 bg-white-100 px-10 pt-4 xl:px-20">
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
        handleDropdownOptionSelect={handleDropdownOptionSelect}
      />
    </div>
  );
};

export default PagePayments;
