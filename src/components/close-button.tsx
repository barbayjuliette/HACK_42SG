import React from 'react';
import Link from "next/link";
import { Button } from "./ui/button";
import { XIcon, X } from "lucide-react";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface CloseButtonProps {
  href?: string;
  back?: boolean;
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = (props) => {
  const { href = "/", back, className } = props;
  return (
    <Link href={href} className={cn("absolute top-4 left-4", className)}>
      <Button variant="ghost" size="icon">
        {back ? <XIcon size={32} /> : <X size={32} />}
      </Button>
    </Link>
  );
};

export default CloseButton;
