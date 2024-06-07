const Nav = () => {
  return (
    <nav
      id="navbar"
      className="left-0 flex min-h-screen flex-col px-4 font-medium text-white-200 bg-gradient-to-b from-deeppurple-600 to-deeppurple-500"
    >
      <a className="tracking-tigh mx-auto px-16 pb-9 pt-7 text-xl font-semibold">
        <h1 className="font-highlight font-semibold flex  bg-gray-100/10 px-4 py-2 rounded-3xl">
          <div className="text-pink-500">Pay</div>Works
        </h1>
      </a>
      <ul className="flex flex-col gap-4">
        <li className="cursor-pointer px-3 tracking-tight text-purple-200">
          <a>Dashboard</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight text-purple-200">
          <a>Helpdesk</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight text-purple-200">
          <a>Reports</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight text-purple-200">
          <a>Statements</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight text-white-100 bg-purple-400 rounded-md">
          <a>Payments</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight text-purple-200">
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
