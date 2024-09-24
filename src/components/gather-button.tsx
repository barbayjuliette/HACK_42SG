import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Timer from "./timer"; // Import Timer component

interface GatherButtonProps {
  href: string;
  className?: string;
}

const GatherButton: FC<GatherButtonProps> = (props) => {
  const { className } = props;
  return (
    <Link href="/gather" className={cn("flex", className)}>
      <Button variant="default" size="lg" className="rounded-t-xl rounded-b-none bg-panda text-white flex h-auto px-8 py-8 items-center justify-start text-start w-full">
        <div className="flex flex-col flex-grow gap-2">
          <p className="font-semibold text-lg">pandagather Available Nearby</p>
          <p>There are 19 pandagathers currently</p>
          <p>available near you!</p>
        </div>
        <Timer /> {/* Add Timer component to the right */}
      </Button>
    </Link>
  );
};

export default GatherButton;
