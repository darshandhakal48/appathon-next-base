import { Roboto as FontSans, Inter, Urbanist } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSecondary = Inter({
  variable: "--font-sans-secondary",
});

export const fontUrban = Urbanist({
  subsets: ["latin"],
  variable: "--font-urban",
});
