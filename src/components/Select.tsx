import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  options: string[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <select
          className="appearance-none w-full p-2.5 pr-10 border border-gray-300 rounded-lg bg-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default Select;
