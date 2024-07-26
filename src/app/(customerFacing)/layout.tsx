import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shai Beauty Kids",
  description: "",
};


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={cn("bg-background min-h-screen font-sans antialiased", inter.variable)}>
        {/* <Navbar/> */}
        
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
