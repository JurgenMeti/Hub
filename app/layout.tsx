import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";  // Import Work Sans font
import "./globals.css";

// Import Work Sans font with multiple weight variations
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],  // Different font weights
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`} // Apply the Work Sans font with antialiased text rendering
      >
        {children}
      </body>
    </html>
  );
}
