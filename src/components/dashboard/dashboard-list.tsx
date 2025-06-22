"use client";

import { useEffect, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useApiState } from "@/features/api/use-api-state";
import { fetchUsers, searchUsers } from "@/actions/user-actions";
import type { User } from "@/features/api/type";
import { DataTransformers } from "@/features/api/data-transformation";
import { useState } from "react";
import { Search, RefreshCw, UserIcon, Mail, Phone, Globe } from "lucide-react";

export function UserList() {
  const { state, setLoading, setData, setError } = useApiState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  // Load users on component mount
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    startTransition(async () => {
      const response = await fetchUsers();
      if (response.success) {
        setData(response.data);
      } else {
        setError(response.error);
      }
    });
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      loadUsers();
      return;
    }

    setLoading(true);
    startTransition(async () => {
      const response = await searchUsers(query);
      if (response.success) {
        setData(response.data);
      } else {
        setError(response.error);
      }
    });
  };

  const handleRefresh = () => {
    setSearchQuery("");
    loadUsers();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">
            Manage and view user information from the backend API
          </p>
        </div>
        <Button onClick={handleRefresh} disabled={state.loading || isPending}>
          <RefreshCw
            className={`h-4 w-4 mr-2 ${
              state.loading || isPending ? "animate-spin" : ""
            }`}
          />
          Refresh
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users by name, email, or username..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
          className="pl-10"
        />
      </div>

      {/* Loading State */}
      {(state.loading || isPending) && (
        <div className="flex items-center justify-center py-8">
          <LoadingSpinner size="lg" />
          <span className="ml-2 text-muted-foreground">Loading users...</span>
        </div>
      )}

      {/* Error State */}
      {state.error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center text-red-600">
              <span className="font-medium">Error:</span>
              <span className="ml-2">{state.error}</span>
            </div>
            <Button
              onClick={loadUsers}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Users Grid */}
      {!state.loading && !isPending && state.data && (
        <>
          <div className="text-sm text-muted-foreground">
            {state.data.length} user{state.data.length !== 1 ? "s" : ""} found
            {state.lastFetched && (
              <span className="ml-2">
                • Last updated: {state.lastFetched.toLocaleTimeString()}
              </span>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {state.data.map((user) => {
              const displayUser = DataTransformers.formatUserForDisplay(user);
              return (
                <Card
                  key={user.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {displayUser.displayName}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{user.phone}</span>
                    </div>
                    {user.website && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="truncate">{user.website}</span>
                      </div>
                    )}
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        {displayUser.fullAddress}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {user.company.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {/* Empty State */}
      {!state.loading && !isPending && state.data?.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <UserIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No users found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery
                ? "Try adjusting your search query."
                : "No users available at the moment."}
            </p>
            {searchQuery && (
              <Button
                onClick={() => {
                  setSearchQuery("");
                  loadUsers();
                }}
              >
                Clear Search
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
