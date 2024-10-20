import * as React from "react";

import { cn } from "@/lib/utils";
import { CiSearch } from "react-icons/ci";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const px: string = type === "search" ? "px-10" : "px-2";
  return (
    <div className="relative flex ">
      {type === "search" && (
        <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
      )}
      <input
        type={type}
        className={cn(
          `flex h-10 w-full bg-background rounded-lg border border-input ${px} py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
