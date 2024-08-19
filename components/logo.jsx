import logo from "@/assets/acu-learn-logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
  );
};
