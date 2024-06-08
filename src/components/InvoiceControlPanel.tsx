import ApproveButton from "./ApproveButton";
import Filters from "./Filters";
import PageHeading from "./PageHeading";

const InvoiceControlPanel = () => {
  return (
    <section className="flex items-center justify-between">
      <PageHeading />
      <Filters />
      <ApproveButton /> 
    </section>
  );
};

export default InvoiceControlPanel;
