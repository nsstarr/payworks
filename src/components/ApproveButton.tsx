import { Check } from "./glyphs/check";

const ApproveButton = () => {
  return (
    <button className="flex items-center gap-[5px] rounded-full bg-gradient-to-r from-purple-700 via-purple-750 to-purple-800 px-4 py-2 text-white-200 opacity-80">
      <Check title="Check mark" />
      Approve All
    </button>
  );
};

export default ApproveButton;
