import { useState } from "react";

function FilterBox({ title, filters, onFilterClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-6 w-40 border border-black p-3">
      
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-xl font-bold"
      >
        {title} ▼
      </button>

      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {filters.map((filter, index) => (
            <div
              key={index}
              onClick={() => onFilterClick(filter)} 
              className="cursor-pointer border border-black px-2 py-1 text-base hover:bg-gray-200"
            >
              {filter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterBox;
  