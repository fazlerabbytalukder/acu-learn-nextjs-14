import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "ACU-LEARN - World's Best Learning Platform",
  description: "Explore || Learn || Share",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        <NextTopLoader
          color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
          height={2}
        />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
