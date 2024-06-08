import ApproveButton from "./ApproveButton";
import ExportButton from "./ExportButton";
import Filters from "./Filters";
import PageHeading from "./PageHeading";

const InvoiceControlPanel = () => {
  return (
    <section className="flex items-center justify-between">
      <PageHeading />
      <section className="flex gap-16">
        <div className="flex items-center gap-4">
          <Filters />
          <ExportButton />
        </div>
        <ApproveButton />
      </section>
    </section>
  );
};

export default InvoiceControlPanel;
