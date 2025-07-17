"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { apiClient } from "@/features/api/api-client";
import { DataTransformers } from "@/features/api/data-transformation";
import type { ApiResponse } from "@/features/api/type";
import { Job } from "@/lib/type";

// Cache tags for revalidation
const CACHE_TAGS = {
  jobS: "jobs",
  job: "job",
} as const;

// Fetch all jobs
export async function fetchJobs(): Promise<ApiResponse<Job[]>> {
  try {
    const response = await apiClient.get<Job[]>("/jobs");

    if (response.success && response.data) {
      return {
        ...response,
      };
    }

    return response;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return {
      data: null,
      error: "Failed to fetch jobs",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Fetch single job by ID
export async function fetchJobById(id: number): Promise<ApiResponse<Job>> {
  try {
    const response = await apiClient.get<Job>(`/jobs/${id}`);

    if (response.success && response.data) {
      return {
        ...response,
      };
    }

    return response;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    return {
      data: null,
      error: `Failed to fetch job with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Create new job
export async function createjob(
  jobData: Partial<Job>
): Promise<ApiResponse<Job>> {
  try {
    const response = await apiClient.post<Job>("/jobs", jobData);

    if (response.success) {
      // Revalidate jobs cache
      revalidateTag(CACHE_TAGS.jobS);
      revalidatePath("/jobs");
    }

    return response;
  } catch (error) {
    console.error("Error creating job:", error);
    return {
      data: null,
      error: "Failed to create job",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Update job
export async function updatejob(
  id: number,
  jobData: Partial<Job>
): Promise<ApiResponse<Job>> {
  try {
    const response = await apiClient.put<Job>(`/jobs/${id}`, jobData);

    if (response.success) {
      // Revalidate specific job and jobs list
      revalidateTag(CACHE_TAGS.job);
      revalidateTag(CACHE_TAGS.jobS);
      revalidatePath(`/jobs/${id}`);
      revalidatePath("/jobs");
    }

    return response;
  } catch (error) {
    console.error(`Error updating job ${id}:`, error);
    return {
      data: null,
      error: `Failed to update job with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Delete job
export async function deletejob(id: number): Promise<ApiResponse<null>> {
  try {
    const response = await apiClient.delete<null>(`/jobs/${id}`);

    if (response.success) {
      // Revalidate jobs cache
      revalidateTag(CACHE_TAGS.jobS);
      revalidatePath("/jobs");
    }

    return response;
  } catch (error) {
    console.error(`Error deleting job ${id}:`, error);
    return {
      data: null,
      error: `Failed to delete job with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Search jobs by name or email
export async function searchjobs(query: string): Promise<ApiResponse<Job[]>> {
  try {
    const response = await fetchJobs();

    if (response.success && response.data) {
      const filteredjobs = response.data.filter(
        (job) =>
          job.company.toLowerCase().includes(query.toLowerCase()) ||
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.type.toLowerCase().includes(query.toLowerCase())
      );

      return {
        ...response,
        data: filteredjobs,
      };
    }

    return response;
  } catch (error) {
    console.error("Error searching jobs:", error);
    return {
      data: null,
      error: "Failed to search jobs",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}
