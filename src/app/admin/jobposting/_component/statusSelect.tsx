"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { JobStatusProp } from "@/lib/type";
import { cn } from "@/lib/utils";

interface StatusSelectProps {
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<JobStatusProp>>;
}

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "draft", label: "Draft" },
  { value: "close", label: "Close" },
];

export function StatusSelect({ value, onValueChange }: StatusSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (optionValue: JobStatusProp) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = statusOptions.find((option) => option.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <button
        ref={inputRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        // className={cn(
        //   "border-input bg-background ring-offset-background flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm",
        //   "placeholder:text-muted-foreground focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
        //   "disabled:cursor-not-allowed disabled:opacity-50",
        //   isOpen && "ring-ring ring-2 ring-offset-2",
        // )}
        className="border-grayscale-border-lighter text-grayscale-text-subtitle flex items-center gap-2 rounded-full border-1 px-4 py-1.5 text-sm"
      >
        <span className="capitalize">
          {selectedOption?.label || "Select status..."}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-50 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="border-border bg-grayscale-surface-white animate-in fade-in-0 zoom-in-95 absolute top-full z-[9999] mt-1 w-full min-w-[150px] rounded-md border shadow-lg">
          <div className="p-1">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  handleOptionSelect(option.value as JobStatusProp)
                }
                className={cn(
                  "relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  "transition-colors duration-150",
                )}
              >
                {/* Checkbox/Check icon */}
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <div
                    className={cn(
                      "border-border flex h-3 w-3 items-center justify-center rounded-sm border",
                      value === option.value && "bg-primary border-primary",
                    )}
                  >
                    {value === option.value && (
                      <Check className="text-primary-foreground h-2 w-2" />
                    )}
                  </div>
                </div>

                {/* Option label */}
                <span className="break-words capitalize">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
