import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay Computers | Laptop Sales, Rental & Repair in Ghatkopar",
  description:
    "Jay Computers — trusted since 2014 for laptop & desktop sales, repair, rental, CCTV installation, video door phones, printers and biometric attendance systems in Ghatkopar, Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
