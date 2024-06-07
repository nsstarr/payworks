const PageHeading = () => {
  return (
    <div className="flex items-center gap-2">
      {/* <h1>42</h1>  TODO(Ana):Render invoice number data here */}
      <span className="bg-purple-150 rounded-full px-3 py-2">
        <h1 className="font-highlight text-xl text-purple-400">42</h1>
      </span>
      <h1 className="text-800 font-highlight font-semibold tracking-tight">Invoices</h1>
    </div>
  );
};

export default PageHeading;
