const Filters = () => {
  return (
    <form
      className="control-panel rounded-lg bg-gray-100 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <fieldset>
        <div className="mb-4 flex flex-wrap gap-4">
          <input
            id="search"
            name="search"
            placeholder="Search invoice..."
            type="text"
            className="rounded-xl border border-gray-300 px-4 py-2 xl:min-w-64"
            value=""
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />

          <select
            id="sort"
            name="sort"
            className="filter-select cursor-pointer rounded-xl border bg-white-100 px-3 text-black-600 shadow-md"
            value="sort"
            onChange={() => {}}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
          <select
            id="category"
            name="category"
            className="filter-select cursor-pointer rounded-xl border bg-white-100 px-3 text-black-600 shadow-md"
            value="category"
            onChange={() => {}}
          >
            <option value="Office Supplies">Office Supplies</option>
            <option value="Electronics">Electronics</option>
            <option value="Industrial Goods">Industrial Goods</option>
            <option value="IT Solutions">IT Solutions</option>
            <option value="Logistics">Logistics</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default Filters;
