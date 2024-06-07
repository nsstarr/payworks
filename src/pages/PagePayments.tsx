import Breadcrumbs from "../components/Breadcrumbs";
import PageHeading from "../components/PageHeading";
import Table from "../components/Table";

const PagePayments = () => {
  return (
    <main className="flex flex-col gap-4 bg-white-100 px-20 pt-4">
      <Breadcrumbs />
      <PageHeading />
      <Table />
    </main>
  );
};

export default PagePayments;
