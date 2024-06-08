import Filters from "./Filters";
import PageHeading from "./PageHeading";

const InvoiceControlPanel = () => {
  return (
    <section className="flex items-center justify-between">
      <PageHeading />
      <Filters />
    </section>
  );
};

export default InvoiceControlPanel;
