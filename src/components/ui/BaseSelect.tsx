import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
  label?: string;
  disabled?: boolean
}

export const BaseSelect: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  style,
  placeholder,
  label,
  disabled,
}) => {
  const [showOptions, setShowOptions] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{label}</label>
      <div className="border border-main-100 rounded-3xl flex items-center px-4">
        <select
          disabled={disabled}
          value={value}
          onChange={onChange}
          style={style}
          onClick={() => {
            setShowOptions(!showOptions);
          }}
          className="bg-transparent appearance-none w-full outline-none cursor-pointer"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-zinc-800"
            >
              {option.label}
            </option>
          ))}
        </select>

        {showOptions ? (
          <ArrowRight2 size="32" color="#3b82f6" />
        ) : (
          <ArrowDown2 size="32" color="#3b82f6" />
        )}
      </div>
    </div>
  );
};
