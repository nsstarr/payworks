const PageHeading = () => {
  return (
    <header className="flex items-center gap-2">
      {/* <h1>42</h1>  TODO(Ana):Render invoice number data here */}
      <span className="rounded-full bg-purple-150 px-3 py-2">
        <h1 className="font-highlight text-xl text-purple-400">42</h1>
      </span>
      <h1 className="text-800 font-highlight text-xl font-semibold tracking-tight text-black-800">
        Invoices
      </h1>
    </header>
  );
};

export default PageHeading;
