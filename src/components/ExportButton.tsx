import { ExportFile } from "./glyphs/export-file";

const ExportCSV = () => {
  return (
    <button className="my-4 h-12 rounded-2xl border border-gray-200 bg-pink-100 px-3 shadow-md">
      <ExportFile title="Export to CSV" className="p-0"/>
    </button>
  );
};

export default ExportCSV;