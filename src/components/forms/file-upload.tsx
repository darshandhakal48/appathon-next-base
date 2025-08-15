
"use client"

import { useState, useRef } from "react"
import { Upload, X, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FileItem {
  file: File
  id: string
}

interface CustomFileUploadProps {
  onFilesChange?: (files: File[]) => void
  maxFiles?: number
  acceptedTypes?: string[]
  maxSize?: number // in MB
}

export function CustomFileUpload({
  onFilesChange,
  maxFiles = 5,
  acceptedTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
  maxSize = 10
}: CustomFileUploadProps) {
  const [files, setFiles] = useState<FileItem[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return

    const validFiles: FileItem[] = []

    Array.from(newFiles).forEach((file) => {
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
        return
      }

      // Check file type
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
      if (!acceptedTypes.includes(fileExtension)) {
        alert(`File type ${fileExtension} is not supported.`)
        return
      }

      // Check max files
      if (files.length + validFiles.length >= maxFiles) {
        alert(`Maximum ${maxFiles} files allowed.`)
        return
      }

      validFiles.push({
        file,
        id: Math.random().toString(36).substr(2, 9)
      })
    })

    const updatedFiles = [...files, ...validFiles]
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles.map(f => f.file))
  }

  const removeFile = (id: string) => {
    const updatedFiles = files.filter(f => f.id !== id)
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles.map(f => f.file))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-3">
      <div
        className={cn(
          "cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-all duration-200",
          isDragOver
            ? "border-blue-400 bg-blue-50"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className={cn(
          "mx-auto mb-3 h-8 w-8 transition-colors",
          isDragOver ? "text-blue-500" : "text-gray-400"
        )} />
        <p className="mb-1 text-sm text-gray-600">
          <span className="font-medium text-blue-600 hover:text-blue-500">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">
          {acceptedTypes.join(', ')} up to {maxSize}MB each
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((fileItem) => (
            <div
              key={fileItem.id}
              className="flex items-center justify-between rounded-lg border bg-gray-50 p-3"
            >
              <div className="flex items-center space-x-3">
                <FileText className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="max-w-48 truncate text-sm font-medium text-gray-900">
                    {fileItem.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(fileItem.file.size)}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(fileItem.id)}
                className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
