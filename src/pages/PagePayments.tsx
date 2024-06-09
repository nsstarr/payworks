import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import InvoiceControlPanel from "../components/InvoiceControlPanel";
import Table from "../components/Table";

const PagePayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
return (
  <div className="flex w-full flex-col gap-4 bg-white-100 px-20 pt-4">
    <Breadcrumbs />
    <InvoiceControlPanel
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
    <Table searchTerm={searchTerm}/>
  </div>
)
};

export default PagePayments;
