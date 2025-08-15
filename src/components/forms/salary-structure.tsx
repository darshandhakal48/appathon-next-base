
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const templateSchema = z.object({
  templateName: z.string().min(1, "Template name is required"),
  level: z.string().min(1, "Level is required"),
  department: z.string().min(1, "Please select a department"),
  basic: z
    .string()
    .min(1, "Basic amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  hra: z
    .string()
    .min(1, "HRA amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  bonus: z.string().min(1, "Please select a bonus amount"),
  pf: z
    .string()
    .min(1, "PF amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  tax: z
    .string()
    .min(1, "Tax amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
})

type TemplateFormData = z.infer<typeof templateSchema>

const departments = [
  "Human Resources",
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Customer Support",
]

const bonusAmounts = ["5000", "10000", "15000", "20000", "25000", "30000"]

export function TemplateForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TemplateFormData>({
    resolver: zodResolver(templateSchema),
    defaultValues: {
      templateName: "",
      level: "",
      department: "",
      basic: "",
      hra: "",
      bonus: "",
      pf: "",
      tax: "",
    },
  })

  const onSubmit = (data: TemplateFormData) => {
    console.log("Form submitted:", data)
    // Handle form submission here
  }

  const watchedDepartment = watch("department")
  const watchedBonus = watch("bonus")

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">About Template</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* About Template Section */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="templateName" className="text-sm font-medium text-gray-700">
                Template Name
              </Label>
              {/* Simplified form structure without FormControl wrapper */}
              <Input
                id="templateName"
                placeholder="Enter Template Name"
                className="border-gray-200 bg-gray-50"
                {...register("templateName")}
              />
              {errors.templateName && <p className="text-sm text-red-600">{errors.templateName.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="level" className="text-sm font-medium text-gray-700">
                Level
              </Label>
              <Input
                id="level"
                placeholder="Enter Level Name"
                className="border-gray-200 bg-gray-50"
                {...register("level")}
              />
              {errors.level && <p className="text-sm text-red-600">{errors.level.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                Department
              </Label>
              <Select value={watchedDepartment} onValueChange={(value) => setValue("department", value)}>
                <SelectTrigger className="border-gray-200 bg-gray-50">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.department && <p className="text-sm text-red-600">{errors.department.message}</p>}
            </div>
          </div>

          {/* Earnings Components Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Earnings Components</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="basic" className="text-sm font-medium text-gray-700">
                  Basic
                </Label>
                <Input
                  id="basic"
                  placeholder="Enter Basic Amount"
                  className="border-gray-200 bg-gray-50"
                  {...register("basic")}
                />
                {errors.basic && <p className="text-sm text-red-600">{errors.basic.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="hra" className="text-sm font-medium text-gray-700">
                  HRA
                </Label>
                <Input
                  id="hra"
                  placeholder="Enter HRA Amount"
                  className="border-gray-200 bg-gray-50"
                  {...register("hra")}
                />
                {errors.hra && <p className="text-sm text-red-600">{errors.hra.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bonus" className="text-sm font-medium text-gray-700">
                  Bonus
                </Label>
                <Select value={watchedBonus} onValueChange={(value) => setValue("bonus", value)}>
                  <SelectTrigger className="border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select Bonus Amount" />
                  </SelectTrigger>
                  <SelectContent>
                    {bonusAmounts.map((amount) => (
                      <SelectItem key={amount} value={amount}>
                        ₹{amount}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.bonus && <p className="text-sm text-red-600">{errors.bonus.message}</p>}
              </div>
            </div>
          </div>

          {/* Deduction Components Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Deduction Components</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pf" className="text-sm font-medium text-gray-700">
                  PF
                </Label>
                <Input
                  id="pf"
                  placeholder="Enter PF Amount"
                  className="border-gray-200 bg-gray-50"
                  {...register("pf")}
                />
                {errors.pf && <p className="text-sm text-red-600">{errors.pf.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax" className="text-sm font-medium text-gray-700">
                  Tax
                </Label>
                <Input
                  id="tax"
                  placeholder="Enter Tax Amount"
                  className="border-gray-200 bg-gray-50"
                  {...register("tax")}
                />
                {errors.tax && <p className="text-sm text-red-600">{errors.tax.message}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button type="submit" className="px-8">
              Save Template
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
