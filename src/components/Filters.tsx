type FiltersProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const Filters = ({ searchTerm, setSearchTerm }: FiltersProps) => {
  return (
    <form
      className="control-panel rounded-lg bg-gray-100 py-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <fieldset>
        <div className="flex flex-wrap gap-4">
          <input
            id="search"
            name="search"
            placeholder="Search supplier..."
            type="text"
            className="rounded-xl border border-gray-300 px-4 py-2 xl:min-w-64"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <select
            id="sort"
            name="sort"
            className="filter-select cursor-pointer rounded-xl border bg-white-100 px-3 text-black-600 shadow-md"
            value="sort"
            onChange={() => {}}
          >
            <option value="Ascending">Sort</option>
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
            <option value="Office Supplies">All Categories</option>
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
