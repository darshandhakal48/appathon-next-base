import type { User } from "./type";

// Data transformation utilities
export class DataTransformers {
  // Transform user data from API
  static transformUser(user: any): User {
    return {
      id: Number(user.id),
      name: user.name?.trim() || "",
      username: user.username?.trim() || "",
      email: user.email?.toLowerCase().trim() || "",
      address: {
        street: user.address?.street || "",
        suite: user.address?.suite || "",
        city: user.address?.city || "",
        zipcode: user.address?.zipcode || "",
        geo: {
          lat: user.address?.geo?.lat || "0",
          lng: user.address?.geo?.lng || "0",
        },
      },
      phone: user.phone || "",
      website: user.website || "",
      company: {
        name: user.company?.name || "",
        catchPhrase: user.company?.catchPhrase || "",
        bs: user.company?.bs || "",
      },
    };
  }

  // Transform array of users
  static transformUsers(users: any[]): User[] {
    return users.map((user) => this.transformUser(user));
  }

  // Generic data validator
  static validateData<T>(data: any, validator: (item: any) => boolean): T[] {
    if (!Array.isArray(data)) return [];
    return data.filter(validator);
  }

  // Format user for display
  static formatUserForDisplay(user: User) {
    return {
      ...user,
      displayName: user.name || user.username,
      fullAddress: `${user.address.street}, ${user.address.city}`,
      contactInfo: {
        email: user.email,
        phone: user.phone,
        website: user.website,
      },
    };
  }
}
