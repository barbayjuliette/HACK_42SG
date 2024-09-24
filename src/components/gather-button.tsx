import { FC } from "react";
import { Button } from "./ui/button";

const GatherButton: FC = () => {
  return (
    <Button className="rounded-t-xl rounded-b-none bg-panda text-white flex h-auto px-8 py-8 items-center justify-start text-start">
      <div className="flex flex-col flex-grow gap-2">
        <p className="font-semibold text-lg">PandaGathers Available Nearby</p>
        <p>There are 69 PandaGathers currently</p>
		<p>available near you!</p>
      </div>
    </Button>
  );
};

export default GatherButton;
