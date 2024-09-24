import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

interface IconProps {
  icon: JSX.Element;
  title: string;
  selected?: boolean;
}

interface IconsBarProps {
  icons: IconProps[];
}

const Icon: FC<IconProps> = (props) => {
  const { icon, title, selected } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-center justify-center",
        selected ? "text-panda" : ""
      )}
    >
      {icon}
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

const IconsBar: FC<IconsBarProps> = (props) => {
  const { icons } = props;
  return (
    <div className="flex gap-8 items-center justify-center">
      {icons.map((icon) => (
        <Icon {...icon} />
      ))}
    </div>
  );
};

export default IconsBar;
