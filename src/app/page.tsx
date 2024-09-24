import GatherButton from "@/components/gather-button";
import IconsBar from "@/components/icons-bar";
import ImageBar from "@/components/image-bar";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  cuisineImages,
  homepageIcons,
  navbarItems,
  userLocation,
} from "@/constants/general";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col gap-4 flex-grow">
        {/* Navbar */}
        <div
          className={`h-[133px] bg-panda px-8 py-4 pt-2 flex flex-col gap-4 justify-center w-full`}
        >
          <Link href="/addresses">
            <p className="text-white">{userLocation}</p>
          </Link>
          <Input
            className="w-full bg-white border-none rounded-xl"
            placeholder="Search"
            startIcon
          />
        </div>
        {/* Icons Bar */}
        <div className="flex flex-col gap-4 px-8 py-2">
          <IconsBar icons={homepageIcons} />
          <Button variant="outline" className="border border-panda text-panda">
            Filters
          </Button>
        </div>
        {/* Cuisines */}
        <div className="flex flex-col gap-4 px-8 py-2">
          <p className="font-bold text-xl">Cuisines</p>
          <ImageBar images={cuisineImages} />
        </div>
        {/* GIF */}
        <Link href="/order" className="px-8 py-2 flex-grow">
          <Image
            src="/panda_offer.gif"
            alt="gidasdas"
            height={800}
            width={1800}
            style={{
              borderRadius: 18,
            }}
          />
        </Link>
        {/* Gather Button */}
        <GatherButton />
      </div>
      <Navbar items={navbarItems} />
    </div>
  );
}
