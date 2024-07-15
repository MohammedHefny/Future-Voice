import { Blurhash } from "react-blurhash";
import { useState, useEffect, FC } from "react";

export interface ImageBlurHashProps {
  src: string;
  hash: string;
  height: number;
  alt: string;
  classes: string;
}

const ImageBlurHash: FC<ImageBlurHashProps> = ({
  src,
  hash,
  height,
  alt,
  classes,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={hash}
          width={"100%"}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt={alt}
        className={`${classes} ${!imageLoaded ? "d-none " : "d-inline"}`}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export default ImageBlurHash;
