import { useState } from "react";
import { ExportFile } from "./glyphs/export-file";

const ExportCSV = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="hover:duration-600 my-4 flex h-12 items-center justify-center rounded-2xl border border-gray-200 bg-pink-100 px-3 shadow-md transition ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ExportFile title="Export to CSV" className="p-0" />
      <span className={`text-black-600 font-medium ${isHovered ? "pl-3" : ""}`}>
        {isHovered ? "Export to CSV" : ""}
      </span>
    </button>
  );
};

export default ExportCSV;
