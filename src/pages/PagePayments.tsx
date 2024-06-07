import Breadcrumbs from "../components/Breadcrumbs";
import PageHeading from "../components/PageHeading";

const PagePayments = () => {
  return (
    <main className="flex flex-col gap-4 bg-white-100 px-20 pt-4">
      <Breadcrumbs />
      <PageHeading />
      <h1>Payments</h1>
    </main>
  );
};

export default PagePayments;
