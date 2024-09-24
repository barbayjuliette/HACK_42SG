import { FC } from "react";
import { cn } from "@/lib/utils";

interface InfoIconProps {
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

const InfoIcon: FC<InfoIconProps> = ({ title, selected, onClick }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 cursor-pointer w-32 h-12 rounded-l-full rounded-r-full mx-2",
        selected ? "bg-panda text-white" : "bg-white text-black"
      )}
      onClick={onClick}
    >
      <p className="font-bold text-sm">{title}</p>
    </div>
  );
};

export default InfoIcon;