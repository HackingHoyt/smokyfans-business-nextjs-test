import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everything Smokies | Business Directory",
  description: "Business Directory in the Smoky Mountains",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
