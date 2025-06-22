"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { apiClient } from "./api-client";
import { DataTransformers } from "./data-transformation";
import type { User, ApiResponse } from "./type";

// Cache tags for revalidation
const CACHE_TAGS = {
  USERS: "users",
  USER: "user",
} as const;

// Fetch all users
export async function fetchUsers(): Promise<ApiResponse<User[]>> {
  try {
    const response = await apiClient.get<User[]>("/users");

    if (response.success && response.data) {
      const transformedUsers = DataTransformers.transformUsers(response.data);
      return {
        ...response,
        data: transformedUsers,
      };
    }

    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      data: null,
      error: "Failed to fetch users",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Fetch single user by ID
export async function fetchUserById(id: number): Promise<ApiResponse<User>> {
  try {
    const response = await apiClient.get<User>(`/users/${id}`);

    if (response.success && response.data) {
      const transformedUser = DataTransformers.transformUser(response.data);
      return {
        ...response,
        data: transformedUser,
      };
    }

    return response;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    return {
      data: null,
      error: `Failed to fetch user with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Create new user
export async function createUser(
  userData: Partial<User>
): Promise<ApiResponse<User>> {
  try {
    const response = await apiClient.post<User>("/users", userData);

    if (response.success) {
      // Revalidate users cache
      revalidateTag(CACHE_TAGS.USERS);
      revalidatePath("/users");
    }

    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      data: null,
      error: "Failed to create user",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Update user
export async function updateUser(
  id: number,
  userData: Partial<User>
): Promise<ApiResponse<User>> {
  try {
    const response = await apiClient.put<User>(`/users/${id}`, userData);

    if (response.success) {
      // Revalidate specific user and users list
      revalidateTag(CACHE_TAGS.USER);
      revalidateTag(CACHE_TAGS.USERS);
      revalidatePath(`/users/${id}`);
      revalidatePath("/users");
    }

    return response;
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    return {
      data: null,
      error: `Failed to update user with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Delete user
export async function deleteUser(id: number): Promise<ApiResponse<null>> {
  try {
    const response = await apiClient.delete<null>(`/users/${id}`);

    if (response.success) {
      // Revalidate users cache
      revalidateTag(CACHE_TAGS.USERS);
      revalidatePath("/users");
    }

    return response;
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    return {
      data: null,
      error: `Failed to delete user with ID ${id}`,
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}

// Search users by name or email
export async function searchUsers(query: string): Promise<ApiResponse<User[]>> {
  try {
    const response = await fetchUsers();

    if (response.success && response.data) {
      const filteredUsers = response.data.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()) ||
          user.username.toLowerCase().includes(query.toLowerCase())
      );

      return {
        ...response,
        data: filteredUsers,
      };
    }

    return response;
  } catch (error) {
    console.error("Error searching users:", error);
    return {
      data: null,
      error: "Failed to search users",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
}
