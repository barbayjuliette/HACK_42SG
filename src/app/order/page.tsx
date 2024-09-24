"use client";

import FoodpandaNotif from "@/components/foodpanda-notif";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function OrderPage() {
  const onClick = () => {
    toast.info(<FoodpandaNotif />);
  };
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Button onClick={onClick} variant="outline">
        Display Notification
      </Button>
    </div>
  );
}
