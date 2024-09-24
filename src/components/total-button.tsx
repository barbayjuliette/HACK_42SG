import { FC } from "react";
import { Button } from "./ui/button";

interface TotalButtonProps {
  title: string;
}

const TotalButton: FC<TotalButtonProps> = (props) => {
  const { title } = props;
  return (
    <Button className="w-full h-[56px] flex items-center justify-center bg-panda text-white rounded-none hover:bg-panda_light">
      <p className="font-bold text-lg">{title}</p>
    </Button>
  );
};

export default TotalButton;
