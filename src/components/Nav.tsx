const Nav = () => {
  return (
    <nav
      id="navbar"
      className="left-0 flex min-h-screen flex-col px-4 font-medium text-white-200"
    >
      <a className="tracking-tigh mx-auto px-16 pb-9 pt-7 text-xl font-semibold">
     <span>Payworks</span>
      </a>
      <ul className="gap-4">
        <li className="cursor-pointer px-3 tracking-tight">
          <a>Dashboard</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight">
          <a>My Learning</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight">
          <a>Licenses</a>
        </li>
        <li className="cursor-pointer px-3 py-1 tracking-tight">
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
