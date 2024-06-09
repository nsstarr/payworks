import { Check } from "./glyphs/check";
import data from "../data/invoices.json";

type InvoiceButtonProps = {
  handleInvoiceButtonClick: () => void;
  selectedOption: string;
  checkedCount: number;
};

const InvoiceButton = ({
  handleInvoiceButtonClick,
  selectedOption,
  checkedCount,
}: InvoiceButtonProps) => {
  const buttonText =
    checkedCount === 0
      ? `${selectedOption === "Exclude" ? "Exclude" : "Approve"}`
      : checkedCount === data.pay_run.invoices.length
      ? `${selectedOption === "Exclude" ? "Exclude All" : "Approve All"}`
      : `${
          selectedOption === "Exclude" ? "Exclude" : "Approve"
        } (${checkedCount})`;

  return (
    <button
      className="my-auto flex max-h-10 items-center gap-[5px] rounded-full bg-gradient-to-r from-purple-700 via-purple-750 to-purple-800 px-[18px] py-2 text-white-200 opacity-80 shadow-md"
      onClick={handleInvoiceButtonClick}
    >
      <Check title="Check mark" />
      {buttonText}
    </button>
  );
};

export default InvoiceButton;
