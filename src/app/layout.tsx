import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PandaGather",
  description: "Gathering all the pandas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-grow">{children}</div>
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
