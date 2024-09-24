import { FC } from "react";
import { Input } from "./ui/input";
import Image from "next/image";

interface FoodItemProps {
  title: string;
  description: string;
  src: string;
  price: string;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const { title, description, src, price } = props;
  return (
    <div className="flex gap-2 items-center justify-between px-4">
      <div className="flex flex-col gap-2 flex-grow">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-muted-foreground">{description}</p>
        <p className="text-muted-foreground">{price}</p>
      </div>
      <Image
        height={120}
        width={120}
        src={src}
        alt={src}
        className="rounded-lg"
      />
    </div>
  );
};

const items: FoodItemProps[] = [
  {
    title: "Mala Xianguo",
    description: "Description for Mala",
    src: "/korean.png",
    price: "$5.00",
  },
  {
    title: "Pizza",
    description: "Description for Pizza",
    src: "/pizza.png",
    price: "$12.00",
  },
  {
    title: "Ramen",
    description: "Description for Ramen",
    src: "/japanese.png",
    price: "$50.00",
  },
  {
    title: "Golden Chicken",
    description: "Description for Chicken",
    src: "/singapore.png",
    price: "$150.00",
  },
];

const SearchDrawer = () => {
  return (
    <div className="flex flex-col rounded-t-xl shadow bg-white p-4">
      <Input placeholder="Search in menu" startIcon />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <FoodItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchDrawer;
