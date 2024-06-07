import Breadcrumbs from "../components/Breadcrumbs";
import PageHeading from "../components/PageHeading";
import Table from "../components/Table";

const PagePayments = () => {
  return (
    <div className="flex w-full flex-col gap-4 bg-white-100 px-20 pt-4">
      <Breadcrumbs />
      <PageHeading />
      <Table />
    </div>
  );
};

export default PagePayments;
