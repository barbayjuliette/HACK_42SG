import { FC } from "react";
import { Button } from "./ui/button";
import Timer from "./timer";

interface GatherButtonProps {}

const GatherButton: FC<GatherButtonProps> = (props) => {
  return (
    <Button className="rounded-t-xl rounded-b-none bg-panda text-white flex h-auto px-8 py-8 items-center justify-start text-start">
      <div className="flex flex-col flex-grow gap-4">
        <p className="font-semibold text-lg">PandaGathers Available Nearby</p>
        <p>There are 69 PandaGathers</p>
        <p>currently active near you!</p>
      </div>
      <Timer />
    </Button>
  );
};

export default GatherButton;
