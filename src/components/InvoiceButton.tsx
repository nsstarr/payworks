import { Check } from "./glyphs/check";

const InvoiceControlButton = () => {
  return (
    <button className="my-auto flex max-h-10 items-center gap-[5px] rounded-full bg-gradient-to-r from-purple-700 via-purple-750 to-purple-800 px-[18px] py-2 text-white-200 opacity-80 shadow-md">
      <Check title="Check mark" />
      Approve All
    </button>
  );
};

export default InvoiceControlButton;
