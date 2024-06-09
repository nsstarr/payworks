import InvoiceButton from "./InvoiceButton";
import ExportButton from "./ExportButton";
import Filters from "./Filters";
import PageHeading from "./PageHeading";

type InvoiceControlPanelProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const InvoiceControlPanel = ({searchTerm, setSearchTerm} :InvoiceControlPanelProps) => {
  return (
    <section className="flex items-center justify-between">
      <PageHeading />
      <section className="flex gap-16">
        <div className="flex items-center gap-4">
          <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExportButton />
        </div>
        <InvoiceButton />
      </section>
    </section>
  );
};

export default InvoiceControlPanel;
