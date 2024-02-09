import React, { ChangeEvent } from "react";

interface FilterInputProps {
  onChange: (value: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input type="text" className="search" placeholder="Filter..." onChange={handleChange} />;
};

export default FilterInput;

