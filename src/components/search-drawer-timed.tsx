import { FC } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import Timer from "./timer";
import { StarIcon, Clock } from "lucide-react";

interface FoodItemProps {
  title: string;
  rating: string;
  timing: string;
  src: string;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const { title, rating, timing, src } = props;
  return (
    <div className="flex flex-row gap-2 items-center justify-between px-4 py-4 border-4 rounded-xl border-pink-200 hover:bg-pink-100 transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-2 flex-grow">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-bold whitespace-nowrap">{title}</p>
          <div className="flex items-center">
            <span className="ml-2">
              <StarIcon />
            </span>
            <p className="text-lg font-bold ml-2">{rating}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="ml-2">
              <Clock />
            </span>
            <p className="ml-2">Delivery </p>
            <p className="ml-2 whitespace-nowrap">{timing}</p>
          </div>
          <p className="text-sm font-bold">Popular Menu Items:</p>
          <p className="text-muted-foreground">Item A</p>
          <p className="text-muted-foreground">Item B</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image
          height={120}
          width={120}
          src={src}
          alt={src}
          className="rounded-lg"
        />
        <Timer />
      </div>
    </div>
  );
};

const items: FoodItemProps[] = [
  {
    title: "Roasted Delights",
    rating: "4.5",
    timing: "10 - 25 mins",
    src: "/roasted.jpg",
  },
  {
    title: "Pizza Place",
    rating: "3.9",
    timing: "15 - 30 mins",
    src: "/pizza.png",
  },
  {
    title: "Backyard Specialty",
    rating: "4.1",
    timing: "15 - 30 mins",
    src: "/japanese.png",
  },
  {
    title: "Seafood Paradise",
    rating: "3.8",
    timing: "30 - 45 mins",
    src: "/sushi.png",
  },
];

const SearchDrawerTimed = () => {
  return (
    <div className="flex flex-col rounded-t-xl shadow bg-white p-4">
      <Input placeholder="Search restaurant" startIcon />
      <div className="mt-4 flex flex-col gap-8">
        {items.map((item) => (
          <FoodItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchDrawerTimed;
