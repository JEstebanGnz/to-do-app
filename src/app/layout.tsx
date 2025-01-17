import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: "To-do App :)",
  description: "Here to inspire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${titleFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
