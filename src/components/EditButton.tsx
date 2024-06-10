import { IconEdit } from "./glyphs/edit";

const EditButton = () => {
  return (
    <button className="rounded-lg border border-gray-150 p-1 shadow-sm hover:bg-pink-100 hover:shadow-lg">
      <IconEdit title="Edit the invoice actions" />
    </button>
  );
};

export default EditButton;
