"use client";
import { restaurantName } from "@/constants/general";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const FoodpandaNotif = () => {
  const router = useRouter();
  const onClick = () => {
    toast.dismiss();
    router.push("/order/confirmation");
  };
  return (
    <div className="flex flex-col gap-4" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="/foodpanda.png"
            height={24}
            width={24}
            alt="Foodpanda Icon"
          />
          <p className="text-panda">FOODPANDA</p>
        </div>
        <p className="text-muted-foreground text-sm">2m ago</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">foodpanda</p>
        <p className="text-muted-foreground">
          Someone in your area is ordering from {restaurantName}. Join them now!
        </p>
      </div>
    </div>
  );
};

export default FoodpandaNotif;
