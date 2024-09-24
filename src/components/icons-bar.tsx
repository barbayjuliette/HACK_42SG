"use client";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import { FC, ReactElement, useState } from "react";

interface IconProps {
  icon: JSX.Element;
  title: string;
  selected?: boolean;
  onClick?: VoidFunction;
}

interface IconsBarProps {
  icons: IconProps[];
}

const Icon: FC<IconProps> = (props) => {
  const { icon, title, selected, onClick } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-center justify-center",
        selected ? "text-panda" : ""
      )}
      onClick={onClick}
    >
      {icon}
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

const IconsBar: FC<IconsBarProps> = (props) => {
  const { icons } = props;
  const [selected, setSelected] = useState<IconProps | undefined>(
    icons.find((icon) => icon.selected)
  );

  const onClick = (icon: IconProps) => {
    setSelected(icon);
  };
  return (
    <div className="flex gap-8 items-center justify-center">
      {icons.map((icon) => (
        <Icon
          {...icon}
          selected={selected?.title === icon.title}
          onClick={() => onClick(icon)}
        />
      ))}
    </div>
  );
};

export default IconsBar;
