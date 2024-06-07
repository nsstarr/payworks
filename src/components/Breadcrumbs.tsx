const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex text-black-500">
        <li>
          <a href="/" className="px-3 underline underline-offset-2">
            Payments
          </a>
        </li>
        <li>
          <span>{">"}</span>{" "}
          <a href="/products" className="px-3">
            Pay Run
          </a>{" "}
          <span>{">"}</span>
        </li>
        <li>
          <a href="/products/123" className="px-3">
            w/c 3 June 2024
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
