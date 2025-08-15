
"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface CustomDatePickerProps {
  value?: Date
  onChange: (date: Date | undefined) => void
  placeholder?: string
  error?: boolean
}

export function CustomDatePicker({ value, onChange, placeholder = "DD/MM/YYYY", error }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(value || new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
  const today = new Date()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const days = []

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-8 w-8" />)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const isSelected = value && format(date, 'yyyy-MM-dd') === format(value, 'yyyy-MM-dd')
    const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')

    days.push(
      <button
        key={day}
        type="button"
        onClick={() => {
          onChange(date)
          setIsOpen(false)
        }}
        className={cn(
          "h-8 w-8 rounded-md text-sm transition-colors hover:bg-gray-100",
          isSelected && "bg-blue-600 text-white hover:bg-blue-700",
          isToday && !isSelected && "bg-gray-100 font-semibold"
        )}
      >
        {day}
      </button>
    )
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-10 w-full justify-between px-3 text-left font-normal",
            !value && "text-gray-500",
            error && "border-red-500 focus:border-red-500"
          )}
        >
          {value ? format(value, "dd/MM/yyyy") : placeholder}
          <CalendarIcon className="ml-2 h-4 w-4 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateMonth('prev')}
              className="rounded p-1 hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-sm font-semibold">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button
              type="button"
              onClick={() => navigateMonth('next')}
              className="rounded p-1 hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Days of week */}
          <div className="mb-2 grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="flex h-8 w-8 items-center justify-center text-xs font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
