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
      <a className="tracking-tigh mx-auto px-8 pb-9 pt-7 text-xl font-semibold">
        <h1 className="flex rounded-3xl bg-gray-100/10 px-4 py-2 font-highlight font-semibold">
          <div className="text-pink-500">Pay</div>Works
        </h1>
      </a>
      <ul className="flex flex-col gap-4">
        <li className="flex cursor-pointer gap-2 px-3 tracking-tight text-purple-200">
          <IconDashboard title="Dashboard icon" className="h-6 w-6" />
          <a>Dashboard</a>
        </li>
        <li className="flex cursor-pointer gap-2 px-3 py-1.5 tracking-tight text-purple-200">
          <IconHelpdesk title="Helpdesk icon" className="h-6 w-6" />
          <a>Helpdesk</a>
        </li>
        <li className="flex cursor-pointer gap-2 px-3 py-1.5 tracking-tight text-purple-200">
          <IconReports title="Reports icon" className="h-6 w-6" />
          <a>Reports</a>
        </li>
        <li className="flex cursor-pointer gap-2 px-3 py-1.5 tracking-tight text-purple-200">
          <IconStatements title="Statements icon" className="h-6 w-6" />
          <a>Statements</a>
        </li>
        <li className="flex cursor-pointer gap-2 rounded-md bg-purple-400 px-3 py-1.5 tracking-tight text-white-100">
          <IconPayments title="Payments icon" className="h-6 w-6" />
          <a>Payments</a>
        </li>
        <li className="flex cursor-pointer gap-2 px-3 py-1.5 tracking-tight text-purple-200">
          <IconSettings title="Settings icon" className="h-6 w-6" />
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
