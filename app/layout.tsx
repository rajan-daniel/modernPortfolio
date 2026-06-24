import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Rajan — Software Engineer",
  description:
    "Portfolio of Rajan, a software engineer and Framer creator building modern, scalable web experiences.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}