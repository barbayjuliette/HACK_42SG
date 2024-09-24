import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

interface NavbarItemProps {
  icon: JSX.Element;
  title: string;
  selected?: boolean;
}

interface NavbarProps {
  items: NavbarItemProps[];
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { icon, title, selected } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-center justify-center",
        selected ? "text-panda" : "text-muted-foreground"
      )}
    >
      {icon}
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

const Navbar: FC<NavbarProps> = (props) => {
  const { items } = props;

  return (
    <div className="flex gap-10 h-[100px] items-center justify-center px-8">
      {items.map((item) => (
        <NavbarItem {...item} />
      ))}
    </div>
  );
};

export default Navbar;
