import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex gap-2 items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          className
        )}
      >
        {startIcon && <Search className="text-black h-[16px] w-[16px]" />}
        <input
          type={type}
          ref={ref}
          className="w-full file:border-0 file:bg-transparent border-none focus:outline-none file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
