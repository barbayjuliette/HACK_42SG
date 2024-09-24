import ExitButton from "@/components/exit-button";
import Timer from "@/components/timer";
import TotalButton from "@/components/total-button";
import { Switch } from "@/components/ui/switch";
import { restaurantName } from "@/constants/general";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FoodItem: FC<{
  src: string;
  title: string;
  description: string;
  price: string;
}> = (props) => {
  const { src, title, description, price } = props;
  return (
    <div className="p-4 bg-white flex gap-4 items-center">
      <Image
        height={50}
        width={50}
        alt={src}
        src={src}
        className="rounded-lg mx-6"
      />
      <div className="flex flex-col gap-2 flex-grow">
        <p className="font-bold">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <p className="text-muted-foreground w-[80px]">{price}</p>
    </div>
  );
};

export default function CartPage() {
  return (
    <div className="flex flex-col w-full py-2 pb-0 gap-2 bg-panda_bg">
      <Timer absolute className="w-[80px] h-[80px] text-lg" />
      <ExitButton href="/order/selection" back className="top-8" />
      <div className="flex flex-col px-16 py-4">
        <p className="text-lg font-bold">Cart</p>
        <p className="text-muted-foreground">{restaurantName}</p>
      </div>
      {/* Stepper */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <Separator className="border border-neutral min-w-[40px]" />
          <div className="flex flex-col items-center mt-5 gap-1">
            <p className="rounded-full px-1.5 text-panda_bg font-bold bg-neutral">
              1
            </p>
            <p className="text-neutral font-bold text-xs">Menu</p>
          </div>
          <Separator className="border border-neutral w-full" />
          <div className="flex flex-col items-center mt-5 gap-1">
            <p className="rounded-full px-1.5 text-panda_bg font-bold bg-neutral">
              2
            </p>
            <p className="text-neutral font-bold text-xs">Cart</p>
          </div>
          <Separator className="border border-gray-300 w-full" />
          <div className="flex flex-col items-center mt-5 gap-1">
            <p className="rounded-full px-1.5 text-panda_bg font-bold bg-gray-300">
              3
            </p>
            <p className="text-neutral font-bold text-xs">Done</p>
          </div>
          <Separator className="border border-gray-300 min-w-[40px]" />
        </div>
      </div>
      {/* Estimated */}
      <div className="flex items-center justify-center p-2 px-8 bg-white">
        <div className="px-8 w-full h-[64px] flex gap-4 items-center justify-center shadow-md rounded-lg">
          <ShoppingCart size={20} className="text-neutral" />
          <div className="flex flex-col gap-1">
            <p className="text-neutral font-bold text-sm">Estimated Delivery</p>
            <p className="text-neutral font-bold">Panda Gather (20 - 35 min)</p>
          </div>
        </div>
      </div>
      {/* Food Item */}
      <div className="flex flex-col">
        <FoodItem
          src="/japanese.png"
          title="Donburi"
          description="The juiciest salmon"
          price="$5.00"
        />
        <FoodItem
          src="/korean.png"
          title="Bimbimbap"
          description="The bobbiest bimbab"
          price="$12.00"
        />
        <FoodItem
          src="/korean.png"
          title="Cutest Bob"
          description="The bobbiest bimbab"
          price="$12.00"
        />
        <FoodItem
          src="/korean.png"
          title="Precious Bibab"
          description="The bobbiest bimbab"
          price="$12.00"
        />
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-8 w-full px-8 py-2 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Subtotal</p>
          <p className="font-bold text-sm">Standard Delivery</p>
          <p className="font-bold text-sm">PandaGather Discount</p>
          <p className="font-bold text-sm">Platform Fee</p>
        </div>
        <div className="flex flex-col gap-3 text-end">
          <p className="text-lg">$41.00</p>
          <p className="text-sm">$2.00</p>
          <p className="text-sm text-panda">-$3.00</p>
          <p className="text-sm">$1.00</p>
        </div>
      </div>
      {/* Cutlery */}
      <div className="flex p-4 items-center justify-between px-8 bg-white">
        <p className="text-lg font-bold">Cutlery</p>
        <Switch />
      </div>
      <div className="grid grid-cols-2 gap-8 w-full px-8 py-2 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold">Points Earned</p>
        </div>
        <div className="flex flex-col gap-3 text-end">
          <p className="text-lg font-bold text-panda">$41.00</p>
          <div className="flex gap-2 items-center justify-end">
            <p className="text-lg font-bold">1337</p>
            <Image
              src="/cactus.png"
              height={24}
              width={24}
              alt="Cactus image"
            />
          </div>
        </div>
      </div>
      <Link href="/order/track">
        <TotalButton title="Confirm Order" />
      </Link>
    </div>
  );
}
