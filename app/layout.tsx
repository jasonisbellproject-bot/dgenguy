import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Tech Recovery Pro | Recovering Stolen Crypto Assets",
  description:
    "We specialize in crypto fraud investigation and asset recovery. Expert cryptographers and cybersecurity specialists dedicated to helping you reclaim lost funds.",
  keywords: "crypto recovery, cryptocurrency fraud, asset recovery, crypto scam recovery",
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
