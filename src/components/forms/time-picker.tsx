
"use client"

import { useState, useRef, useEffect } from "react"
import { Clock } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface CustomTimePickerProps {
  value?: string
  onChange: (time: string) => void
  placeholder?: string
  error?: boolean
}

export function CustomTimePicker({ value, onChange, placeholder = "00:00", error }: CustomTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hours, setHours] = useState(value ? value.split(':')[0] : '00')
  const [minutes, setMinutes] = useState(value ? value.split(':')[1] : '00')
  const inputRef = useRef<HTMLInputElement>(null)

  const hourOptions = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

  useEffect(() => {
    if (value) {
      const [h, m] = value.split(':')
      setHours(h)
      setMinutes(m)
    }
  }, [value])

  const handleTimeSelect = (newHours: string, newMinutes: string) => {
    setHours(newHours)
    setMinutes(newMinutes)
    onChange(`${newHours}:${newMinutes}`)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue.match(/^\d{2}:\d{2}$/)) {
      const [h, m] = inputValue.split(':')
      if (parseInt(h) <= 23 && parseInt(m) <= 59) {
        setHours(h)
        setMinutes(m)
        onChange(inputValue)
      }
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            value={value || ''}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={cn(
              "h-10 pr-10",
              error && "border-red-500 focus:border-red-500"
            )}
            pattern="[0-9]{2}:[0-9]{2}"
          />
          <Clock className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform cursor-pointer text-gray-400" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex">
          {/* Hours */}
          <div className="border-r">
            <div className="border-b p-2 text-center text-xs font-medium text-gray-500">Hours</div>
            <div className="flex max-h-48 flex-col overflow-x-hidden overflow-y-auto">
              {hourOptions.map((hour) => (
                <button
                  key={hour}
                  type="button"
                  onClick={() => handleTimeSelect(hour, minutes)}
                  className={cn(
                    "w-16 py-2 text-sm transition-colors hover:bg-gray-100",
                    hours === hour && "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          {/* Minutes */}
          <div>
            <div className="border-b p-2 text-center text-xs font-medium text-gray-500">Minutes</div>
            <div className="flex max-h-48 flex-col overflow-x-hidden overflow-y-auto">
              {minuteOptions.filter((_, i) => i % 5 === 0).map((minute) => (
                <button
                  key={minute}
                  type="button"
                  onClick={() => handleTimeSelect(hours, minute)}
                  className={cn(
                    "w-16 py-2 text-sm transition-colors hover:bg-gray-100",
                    minutes === minute && "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  {minute}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
