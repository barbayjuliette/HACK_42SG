import ExitButton from "@/components/exit-button";
import Timer from "@/components/timer";
import { Button } from "@/components/ui/button";
import { restaurantName, userLocation } from "@/constants/general";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-6 px-12 bg-panda_bg">
      <ExitButton />
      <Timer className="h-[180px] w-[180px] text-5xl border-8" />
      <Button className="w-full h-[121px] bg-panda_light text-white">
        SAMPLE TEXT
      </Button>
      <p className="font-bold text-lg">{restaurantName}</p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="font-bold text-lg">to</p>
        <p className="font-semibold">{userLocation}</p>
      </div>
      <div className="rounded-lg flex flex-col p-4 bg-white border-2 text-sm w-full items-center">
        <div className="flex gap-2 items-center">
          <p>Delivery 10 - 25 min</p>
          <p className="font-bold">|</p>
          <p className="font-bold">3 items max</p>
        </div>
        <p className="font-bold text-lg">You will save</p>
        <p className="font-bold text-lg text-panda">69 km</p>
        <p className="font-bold text-lg text-panda">Delivery $8.00</p>
      </div>
      <Link href="/order/selection">
        <Button variant="ghost" size="icon">
          <ArrowRightCircle height={40} width={40} />
        </Button>
      </Link>
    </div>
  );
}
