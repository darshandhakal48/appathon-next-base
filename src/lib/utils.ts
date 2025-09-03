import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const totalPages = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createShortName = (name: string = "PP") => {
  if (name.includes(" ")) {
    const profileName = name
      .split(" ")
      .map((name) => name[0])
      .join("");
    return profileName;
  }
  return name;
};
