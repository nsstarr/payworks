import { useState, useRef, useEffect } from "react";
import { IconEdit } from "./glyphs/edit";

type DropdownProps = {
  onOptionSelect: (option: string) => void;
};

const EditDropdown = ({ onOptionSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="rounded-lg border border-gray-150 p-1 shadow-sm hover:bg-pink-100 hover:shadow-lg"
        onClick={toggleDropdown}
      >
        <IconEdit title="Edit the invoice actions" />
      </button>
      {isOpen && (
        <div className="bg-white absolute right-0 z-10 mt-2 w-40 rounded-2xl bg-white-100 shadow-lg">
          <ul>
            {["Edit", "Exclude", "Exclude supplier", "Move"].map((option) => (
              <li
                key={option}
                className="cursor-pointer px-4 py-2 hover:bg-white-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditDropdown;
