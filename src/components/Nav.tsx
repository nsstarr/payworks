import { IconDashboard } from "./glyphs/dashboard";
import { IconHelpdesk } from "./glyphs/helpdesk";
import { IconPayments } from "./glyphs/payments";
import { IconReports } from "./glyphs/reports";
import { IconSettings } from "./glyphs/settings";
import { IconStatements } from "./glyphs/statements";

const Nav = () => {
  return (
    <nav
      id="navbar"
      className="left-0 flex min-h-screen flex-col bg-gradient-to-b from-deeppurple-600 to-deeppurple-500 px-4 font-medium text-white-200"
    >
      <a className="tracking-tigh mx-auto hidden px-8 pb-9 pt-7 text-xl font-semibold xl:block">
        <h1 className="flex rounded-3xl bg-gray-100/10 px-4 py-2 font-highlight font-semibold">
          <div className="text-pink-500">Pay</div>Works
        </h1>
      </a>
      <ul className="mt-5 flex flex-col gap-4 xl:mt-0">
        <li className="flex cursor-pointer gap-2 tracking-tight text-purple-200 xl:px-3">
          <IconDashboard title="Dashboard icon" className="h-6 w-6" />
          <a className="hidden xl:block">Dashboard</a>
        </li>
        <li className="flex cursor-pointer gap-2 py-1.5 tracking-tight text-purple-200 xl:px-3">
          <IconHelpdesk title="Helpdesk icon" className="h-6 w-6" />
          <a className="hidden xl:block">Helpdesk</a>
        </li>
        <li className="flex cursor-pointer gap-2 py-1.5 tracking-tight text-purple-200 xl:px-3">
          <IconReports title="Reports icon" className="h-6 w-6" />
          <a className="hidden xl:block">Reports</a>
        </li>
        <li className="flex cursor-pointer gap-2 py-1.5 tracking-tight text-purple-200 xl:px-3">
          <IconStatements title="Statements icon" className="h-6 w-6" />
          <a className="hidden xl:block">Statements</a>
        </li>
        <li className="flex cursor-pointer gap-2 rounded-md bg-purple-400 py-1.5 tracking-tight text-white-100 xl:px-3">
          <IconPayments title="Payments icon" className="h-6 w-6" />
          <a className="hidden xl:block">Payments</a>
        </li>
        <li className="flex cursor-pointer gap-2 py-1.5 tracking-tight text-purple-200 xl:px-3">
          <IconSettings title="Settings icon" className="h-6 w-6" />
          <a className="hidden xl:block">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
