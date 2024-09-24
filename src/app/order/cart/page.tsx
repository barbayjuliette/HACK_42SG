import ExitButton from "@/components/exit-button";
import Timer from "@/components/timer";
import { restaurantName } from "@/constants/general";

export default function CartPage() {
  return (
    <div className="flex flex-col w-full py-2 pb-0 gap-4 bg-panda_bg">
      <Timer absolute className="w-[80px] h-[80px] text-lg" />
      <ExitButton href="/order/selection" back className="top-8" />
      <div className="flex flex-col px-16 py-4">
        <p className="text-lg font-bold">Card</p>
        <p className="text-muted-foreground">{restaurantName}</p>
      </div>
    </div>
  );
}
