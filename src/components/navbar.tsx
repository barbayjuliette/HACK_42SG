import { cn } from "@/lib/utils";
import { FC } from "react";
import Link from "next/link";

interface NavbarItemProps {
  icon: JSX.Element;
  title: string;
  href: string;
  selected?: boolean;
}

interface NavbarProps {
  items: NavbarItemProps[];
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { icon, title, href, selected } = props;
  return (
    <Link href={href} className="flex flex-col gap-2 items-center justify-center">
      {icon}
      <p className={cn("font-semibold text-sm", selected ? "text-panda" : "text-muted-foreground")}>{title}</p>
    </Link>
  );
};

const Navbar: FC<NavbarProps> = (props) => {
  const { items } = props;

  return (
    <div className="flex gap-10 h-[100px] items-center justify-center px-8">
      {items.map((item) => (
        <NavbarItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Navbar;
