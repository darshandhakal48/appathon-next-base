"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type DateRange = {
  from: Date | null;
  to: Date | null;
};

type PresetOption = {
  label: string;
  value: string;
  getRange: () => DateRange;
};

interface DateRangePickerProps {
  value: DateRange;
  onValueChange: (range: DateRange) => void;
  placeholder?: string;
}

const presetOptions: PresetOption[] = [
  {
    label: "Today",
    value: "today",
    getRange: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return { from: today, to: today };
    },
  },
  {
    label: "Yesterday",
    value: "yesterday",
    getRange: () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0);
      return { from: yesterday, to: yesterday };
    },
  },
  {
    label: "This week",
    value: "this-week",
    getRange: () => {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return { from: startOfWeek, to: endOfWeek };
    },
  },
  {
    label: "Last week",
    value: "last-week",
    getRange: () => {
      const today = new Date();
      const startOfLastWeek = new Date(today);
      startOfLastWeek.setDate(today.getDate() - today.getDay() - 7);
      startOfLastWeek.setHours(0, 0, 0, 0);
      const endOfLastWeek = new Date(startOfLastWeek);
      endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
      return { from: startOfLastWeek, to: endOfLastWeek };
    },
  },
  {
    label: "This month",
    value: "this-month",
    getRange: () => {
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return { from: startOfMonth, to: endOfMonth };
    },
  },
  {
    label: "Last month",
    value: "last-month",
    getRange: () => {
      const today = new Date();
      const startOfLastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1,
      );
      const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      return { from: startOfLastMonth, to: endOfLastMonth };
    },
  },
  {
    label: "This year",
    value: "this-year",
    getRange: () => {
      const today = new Date();
      const startOfYear = new Date(today.getFullYear(), 0, 1);
      const endOfYear = new Date(today.getFullYear(), 11, 31);
      return { from: startOfYear, to: endOfYear };
    },
  },
  {
    label: "Last year",
    value: "last-year",
    getRange: () => {
      const today = new Date();
      const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
      const endOfLastYear = new Date(today.getFullYear() - 1, 11, 31);
      return { from: startOfLastYear, to: endOfLastYear };
    },
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

export function DateRangePicker({
  value,
  onValueChange,
  placeholder = "Select date range",
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDateRange = (range: DateRange): string => {
    if (!range.from || !range.to) return "";

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };

    if (range.from.getTime() === range.to.getTime()) {
      return formatDate(range.from);
    }

    return `${formatDate(range.from)} - ${formatDate(range.to)}`;
  };

  const handlePresetClick = (preset: PresetOption) => {
    const range = preset.getRange();
    onValueChange(range);
    setSelectedPreset(preset.value);
    setCurrentMonth(range.from?.getMonth() || new Date().getMonth());
    setCurrentYear(range.from?.getFullYear() || new Date().getFullYear());
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateInRange = (date: Date) => {
    if (!value.from || !value.to) return false;
    const dateTime = date.getTime();
    return dateTime >= value.from.getTime() && dateTime <= value.to.getTime();
  };

  const isDateRangeStart = (date: Date) => {
    return value.from && date.getTime() === value.from.getTime();
  };

  const isDateRangeEnd = (date: Date) => {
    return value.to && date.getTime() === value.to.getTime();
  };

  const renderCalendar = (monthOffset = 0) => {
    const displayMonth = currentMonth + monthOffset;
    const displayYear = currentYear + Math.floor(displayMonth / 12);
    const normalizedMonth = ((displayMonth % 12) + 12) % 12;

    const daysInMonth = getDaysInMonth(normalizedMonth, displayYear);
    const firstDay = getFirstDayOfMonth(normalizedMonth, displayYear);
    const days = [];

    const prevMonth = normalizedMonth === 0 ? 11 : normalizedMonth - 1;
    const prevYear = normalizedMonth === 0 ? displayYear - 1 : displayYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <div
          key={`prev-${day}`}
          className="text-grayscale-text-caption/70 flex h-8 w-8 items-center justify-center text-sm"
        >
          {day}
        </div>,
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(displayYear, normalizedMonth, day);
      const isInRange = isDateInRange(date);
      const isStart = isDateRangeStart(date);
      const isEnd = isDateRangeEnd(date);
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded text-sm",
            isInRange &&
              !isStart &&
              !isEnd &&
              "bg-primary-surface-default/20 text-primary-surface-default",
            (isStart || isEnd) &&
              "bg-primary-surface-default text-primary-text-label-2 font-medium",
            isToday && !isInRange && "border-primary border",
          )}
        >
          {day}
        </div>,
      );
    }

    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="text-grayscale-text-caption/70 flex h-8 w-8 items-center justify-center text-sm"
        >
          {day}
        </div>,
      );
    }

    return (
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <select
            value={normalizedMonth}
            onChange={(e) => setCurrentMonth(Number.parseInt(e.target.value))}
            className="cursor-pointer border-none bg-transparent text-sm font-medium outline-none"
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={displayYear}
            onChange={(e) => setCurrentYear(Number.parseInt(e.target.value))}
            className="ml-2 cursor-pointer border-none bg-transparent text-sm font-medium outline-none"
          >
            {Array.from({ length: 21 }, (_, i) => displayYear - 10 + i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="mb-2 grid grid-cols-7 gap-1">
          {weekDays.map((day, i) => (
            <div
              key={`${day}-${i}`}
              className="text-muted-foreground flex h-8 w-8 items-center justify-center text-xs font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        // className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-ring flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
        className="border-grayscale-border-lighter text-grayscale-text-subtitle flex items-center gap-2 rounded-full border-1 px-4 py-1.5 text-sm"
      >
        <div className="flex items-center gap-2">
          <Calendar className="text-muted-foreground h-4 w-4" />
          <span
            className={cn(
              "text-left",
              !value.from && !value.to && "text-muted-foreground",
            )}
          >
            {formatDateRange(value) || placeholder}
          </span>
        </div>
        {/* <ChevronDown className="text-muted-foreground h-4 w-4" /> */}
      </button>

      {isOpen && (
        <div className="bg-grayscale-surface-white border-border absolute top-full right-0 z-[9999] mt-1 min-w-[600px] rounded-md border shadow-lg">
          <div className="flex">
            {/* Preset Options */}
            <div className="border-border w-40 border-r">
              <div className="p-2">
                {presetOptions.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => handlePresetClick(preset)}
                    className={cn(
                      "hover:bg-accent hover:text-accent-foreground w-full rounded px-3 py-2 text-left text-sm",
                      selectedPreset === preset.value &&
                        "text-primary-foreground bg-primary-surface-default/20",
                    )}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="flex-1">
              <div className="border-border flex items-center justify-between border-b p-4">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="hover:bg-accent rounded p-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {months[currentMonth]} {currentYear}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {months[(currentMonth + 1) % 12]}{" "}
                      {currentMonth === 11 ? currentYear + 1 : currentYear}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigateMonth("next")}
                  className="hover:bg-accent rounded p-1"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex">
                {renderCalendar(0)}
                {renderCalendar(1)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
