"use client";

import { useState } from 'react';
import ExitButton from "@/components/exit-button";
import Timer from "@/components/timer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { restaurantName, userLocation } from "@/constants/general";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ArrowRight, Bike, CreditCard } from "lucide-react";
import Link from "next/link";
import LocationAlert from "@/components/location-alert";

export default function OrderConfirmationPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <div className="flex flex-col gap-8 bg-panda_bg w-full items-center">
      {showAlert && <LocationAlert />}
      <ExitButton />
      <div className="p-12 bg-restaurant bg-cover bg-opacity-20 w-full items-center justify-center shadow-lg">
        <div className="p-4 flex flex-col gap-6 rounded-lg bg-panda_bg items-center justify-center opacity-90">
          <Timer className="h-[180px] w-[180px] text-5xl border-8" />
          <p className="font-bold text-lg">{restaurantName}</p>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="font-bold text-lg">to</p>
            <p className="font-semibold">{userLocation}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center bg-white py-3 w-[340px] mx-8 rounded-xl border">
        <InfoCircledIcon />
        <p>Delivery 10 - 25 min</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center bg-white py-4 w-[340px] mx-8 rounded-xl border">
        <p className="font-semibold">YOU SAVE</p>
        <div className="flex gap-8 items-center justify-center text-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Bike />
            <div className="flex flex-col items-center justify-center">
              <p>32 km</p>
              <p>travelled</p>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <CreditCard />
            <div className="flex flex-col items-center justify-center">
              <p>$32.00</p>
              <p>on delivery</p>
            </div>
          </div>
        </div>
      </div>
      <Button className="h-[86px] w-[340px] flex items-center justify-center rounded-xl bg-panda" onClick={handleButtonClick}>
        <ArrowRight size={48} />
      </Button>
    </div>
  );
}