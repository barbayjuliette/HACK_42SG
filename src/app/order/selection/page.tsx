"use client";

import ExitButton from "@/components/exit-button";
import SearchDrawer from "@/components/search-drawer";
import Timer from "@/components/timer";
import TotalButton from "@/components/total-button";
import { Button } from "@/components/ui/button";
import { restaurantName } from "@/constants/general";
import { InfoCircledIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Share, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SelectionPage() {
  return (
    <div className="flex flex-col w-full py-2 pb-0 gap-4 bg-panda_bg">
      <Timer absolute className="w-[80px] h-[80px] text-lg" />
      <ExitButton href="/order/confirmation" back className="top-8" />
      <div className="flex flex-col gap-2 items-center px-4 py-2 justify-center">
        <Image
          height={44}
          width={44}
          alt="Restaurant.jpeg"
          src="/restaurant.jpeg"
          className="rounded-lg"
        />
        <p className="font-bold text-xl">{restaurantName}</p>
        <div className="flex gap-1 items-center">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarIcon size={15} />
          <InfoCircledIcon />
          <Share size={15} />
        </div>
      </div>
      <div className="flex rounded-3xl items-center justify-center py-2 px-4 gap-1 bg-white border mx-8 border-black">
        <InfoCircledIcon />
        <p>Delivery 10 - 25 mins</p>
        <p className="font-bold">|</p>
        <p className="font-bold">3 items max</p>
      </div>
      {/* I want that order */}
      <div className="grid grid-cols-2 gap-4 bg-white px-8 py-8">
        <div className="flex flex-col flex-grow">
          <p className="font-bold">I want THAT order!</p>
          <p>1x Food Item</p>
          <p>1x Side Dish</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-panda">Checkout Now</p>
          <Link href="/order/cart">
            <Button className="px-3 py-1 bg-panda text-white rounded-md font-bold w-fit hover:bg-panda_light">
              $8.00
            </Button>
          </Link>
        </div>
      </div>
      {/* Past Order */}
      <div className="flex flex-col gap-4 px-8">
        <p className="text-lg font-bold">Past Orders</p>
        <div className="flex gap-4 items-center">
          <Image
            src="/japanese.png"
            height={80}
            width={150}
            alt="japanese.png"
            className="border rounded-lg"
          />
          <Image
            src="/pizza.png"
            height={80}
            width={150}
            alt="pizza.png"
            className="border rounded-lg"
          />
          <Image
            src="/korean.png"
            height={80}
            width={150}
            alt="korean.png"
            className="border rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col">
        {/* Menu Search */}
        <SearchDrawer />
        {/* Total Button */}
        <Link href="/order/cart">
          <TotalButton title="Total: $12.80" />
        </Link>
      </div>
    </div>
  );
}
