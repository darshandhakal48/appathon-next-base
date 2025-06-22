// Centralized query key management
export const QUERY_KEYS = {
  // Users
  USERS: ["users"] as const,
  USER: (id: string | number) => ["users", id] as const,
  USER_LIST: (params?: any) => ["users", "list", params] as const,

  // Products
  PRODUCTS: ["products"] as const,
  PRODUCT: (id: string | number) => ["products", id] as const,
  PRODUCT_LIST: (params?: any) => ["products", "list", params] as const,

  // Add more query keys as needed
} as const;

// Query key factory for dynamic generation
export const createQueryKey = (
  entity: string,
  operation?: string,
  params?: any
) => {
  const key = [entity];
  if (operation) key.push(operation);
  if (params) key.push(params);
  return key;
};
