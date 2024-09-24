import ExitButton from "@/components/exit-button";
import SearchDrawerTimed from "@/components/search-drawer-timed";

export default function CartPage() {
  return (
    <>
      <div className="flex flex-col w-full gap-4 bg-panda_bg">
        <div className="flex flex-col items-center justify-center px-16 py-4 bg-panda">
          <ExitButton href="/" back className="mb-4" />
          <p className="text-lg font-bold text-white">Nearby pandagathers</p>
        </div>
        <SearchDrawerTimed />
      </div>
    </>
  );
}