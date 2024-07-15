import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLang } from "../i18n/Metronici18n";

type Props = {
  children: React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  autoplay?: boolean;
  cssEase?: string;
};

// HINT : the container of each child MUST be a <div>

const SliderComponent: FC<Props> = ({
  children,
  dots = true,
  infinite = true,
  slidesToShow = 3,
  autoplay = true,
  cssEase = "linear",
}) => {
  const lang = useLang();
  const isEnglish = lang === "en";
  const settings = {
    className: "slider variable-width",
    dots: dots,
    infinite: infinite,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: cssEase,
    rtl: !isEnglish,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderComponent;
