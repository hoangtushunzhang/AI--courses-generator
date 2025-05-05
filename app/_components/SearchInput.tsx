"use client";

import React, { useState, useEffect } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";

type SearchInputProps = {
  placeholder?: string;
  delay?: number;
  onDebouncedChange: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  delay = 300,
  onDebouncedChange,
}) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    onDebouncedChange(debouncedValue);
  }, [debouncedValue, onDebouncedChange]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64"
    />
  );
};

export default SearchInput;
