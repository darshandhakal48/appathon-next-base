
"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CustomDatePicker } from "@/components/forms/date-picker"
import { CustomTimePicker } from "@/components/forms/time-picker"
import { CustomFileUpload } from "@/components/forms/file-upload"

const formSchema = z.object({
  date: z.date({
    required_error: "Date is required",
  }),
  startTime: z.string({
    required_error: "Start time is required",
  }).min(1, "Start time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  endTime: z.string({
    required_error: "End time is required",
  }).min(1, "End time is required").regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  breakTime: z.string().optional().refine((val) => {
    if (!val || val === '') return true
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val)
  }, "Invalid time format"),
  projectClient: z.string({
    required_error: "Project/Client name is required",
  }).min(1, "Please select a project/client"),
  taskDescription: z.string().optional(),
  supportingDocuments: z.any().optional(),
}).refine((data) => {
  if (data.startTime && data.endTime) {
    const [startHour, startMin] = data.startTime.split(':').map(Number)
    const [endHour, endMin] = data.endTime.split(':').map(Number)
    const startMinutes = startHour * 60 + startMin
    const endMinutes = endHour * 60 + endMin
    return endMinutes > startMinutes
  }
  return true
}, {
  message: "End time must be after start time",
  path: ["endTime"]
})

type FormData = z.infer<typeof formSchema>

const projectOptions = [
  "Project Alpha - Client A",
  "Project Beta - Client B",
  "Project Gamma - Client C",
  "Internal Development",
  "Marketing Campaign - Client D",
  "Website Redesign - Client E",
  "Mobile App Development - Client F"
]

export default function ProfessionalTimesheetForm() {
  const [totalHours, setTotalHours] = useState("Auto-calculated")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      breakTime: "",
      taskDescription: "",
    },
  })

  const calculateTotalHours = (startTime: string, endTime: string, breakTime: string) => {
    if (!startTime || !endTime) return "Auto-calculated"

    try {
      const [startHour, startMin] = startTime.split(':').map(Number)
      const [endHour, endMin] = endTime.split(':').map(Number)
      const [breakHour = 0, breakMin = 0] = breakTime ? breakTime.split(':').map(Number) : [0, 0]

      const startMinutes = startHour * 60 + startMin
      const endMinutes = endHour * 60 + endMin
      const breakMinutes = breakHour * 60 + breakMin

      const totalMinutes = endMinutes - startMinutes - breakMinutes

      if (totalMinutes <= 0) return "Auto-calculated"

      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    } catch {
      return "Auto-calculated"
    }
  }

  const watchedValues = form.watch(['startTime', 'endTime', 'breakTime'])

  useEffect(() => {
    const [startTime, endTime, breakTime] = watchedValues
    const calculated = calculateTotalHours(startTime || '', endTime || '', breakTime || '')
    setTotalHours(calculated)
  }, [watchedValues])

  const onSubmit = (data: FormData, isDraft: boolean = false) => {
    const submissionData = {
      ...data,
      totalHours,
      supportingDocuments: uploadedFiles,
      isDraft,
      submittedAt: new Date().toISOString()
    }

    console.log('Form submitted:', submissionData)

    // Show success message
    alert(isDraft ? 'Draft saved successfully!' : 'Timesheet submitted for approval!')
  }

  return (
    <div className="mx-auto max-w-lg bg-white">
      <div className="p-8">
        <Form {...form}>
          <form className="space-y-6">
            {/* Date Field */}
            <FormField
              control={form.control}
              name="date"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Date <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <CustomDatePicker
                      value={field.value}
                      onChange={field.onChange}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* Start Time Field */}
            <FormField
              control={form.control}
              name="startTime"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Start Time <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <CustomTimePicker
                      value={field.value}
                      onChange={field.onChange}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* End Time Field */}
            <FormField
              control={form.control}
              name="endTime"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    End Time <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <CustomTimePicker
                      value={field.value}
                      onChange={field.onChange}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* Break Time Field */}
            <FormField
              control={form.control}
              name="breakTime"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Break Time</FormLabel>
                  <FormControl>
                    <CustomTimePicker
                      value={field.value}
                      onChange={field.onChange}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* Total Hours Worked */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-500">
                Total Hours Worked
              </Label>
              <Input
                value={totalHours}
                readOnly
                className="h-10 border-gray-200 bg-gray-50 text-gray-600"
              />
            </div>

            {/* Project/Client Name */}
            <FormField
              control={form.control}
              name="projectClient"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Project/Client Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`h-10${fieldState.error ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select Project/Client Name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {projectOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* Task Description */}
            <FormField
              control={form.control}
              name="taskDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Task Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What did you do today?"
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            {/* Attach Supporting Documents */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Attach Supporting Documents</Label>
              <CustomFileUpload
                onFilesChange={setUploadedFiles}
                maxFiles={5}
                maxSize={10}
                acceptedTypes={['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.txt']}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6">
              <Button
                type="button"
                variant="outline"
                className="h-11 flex-1 border-gray-300 font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => form.handleSubmit((data) => onSubmit(data, true))()}
              >
                Save as Draft
              </Button>
              <Button
                type="button"
                className="h-11 flex-1 bg-blue-600 font-medium text-white hover:bg-blue-700"
                onClick={form.handleSubmit((data) => onSubmit(data, false))}
              >
                Submit for Approval
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

