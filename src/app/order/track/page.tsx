import { Button } from "@/components/ui/button";
import { CaretDownIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TrackPage() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Title with interactions */}
      <div className="p-6 flex flex-col w-full bg-panda_bg">
        <div className="flex gap-4 items-center justify-between w-full">
          <CaretDownIcon className="h-[40px] w-[40px]" />
          <p className="text-xl font-bold">Track Your Order</p>
          <QuestionMarkCircledIcon className="h-[32px] w-[32px]" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-panda_bg w-full p-4 py-6">
        <p className="text-lg font-bold">Estimated Delivery Time</p>
        <p>18:00 - 18:10</p>
      </div>
      {/* Estimate Delivery Time */}
      <div className="flex flex-col w-full flex-grow items-center justify-center">
        <div className="flex flex-col items-center gap-8 py-8">
          <Image
            src="/panda_bow.gif"
            height={180}
            width={180}
            alt="panda bow"
          />
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl text-panda">6.9 km</p>
            <p className="font-bold text-xl text-panda">$4.20 delivery saved</p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <p className="text-2xl">+1337</p>
          <Image src="/cactus.png" height={32} width={32} alt="Cactus image" />
        </div>
        <Link href="/">
          <Button className="bg-panda text-white text-lg my-8 p-6 rounded-xl w-[248px] hover:bg-panda_light">
            Leaderboard
          </Button>
        </Link>
      </div>
      <div className="p-6 py-4 text-lg flex items-center gap-4 border w-full justify-center">
        <MapPin size={32} />
        <p>Delivery Details</p>
      </div>
    </div>
  );
}
