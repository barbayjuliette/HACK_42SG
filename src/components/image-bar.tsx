import Image from "next/image";
import { FC } from "react";

interface Image {
  src: string;
}

interface ImageBarProps {
  images: Image[];
}

const ImageBarElement: FC<Image> = (props) => {
  const { src } = props;
  return (
    <Image
      src={src}
      alt="Image woohoo"
      height={1200}
      width={1200}
      className="rounded-xl shadow-lg shadow-gray-300 w-auto h-auto"
    />
  );
};

const ImageBar: FC<ImageBarProps> = (props) => {
  const { images } = props;
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => {
        return <ImageBarElement key={image.src} {...image} />;
      })}
    </div>
  );
};

export default ImageBar;
