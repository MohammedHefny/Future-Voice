import React from "react";
import SliderComponent from "../../../shared/Slider";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const ClientsSlider = () => {
  const clientsImages = [
    "/media/assets/services/website development.jpg",
    "/media/assets/services/photography.jpg",
    "/media/assets/services/content creation.jpg",
    "/media/assets/services/Advertising.jpg",
    "/media/assets/services/business-development.jpg",
  ];
  return (
    <div className="our-clients">
      <SliderComponent dots={false} slidesToShow={6}>
        {clientsImages.map((client, index) => (
          <React.Fragment key={index}>
            <div className="img-container">
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={100}
                src={client}
                alt="client logo "
                classes="slider-image slider-image-width"
              />
              {/* <img src={client} alt="client logo " className="slider-image" /> */}
            </div>
          </React.Fragment>
        ))}
      </SliderComponent>
    </div>
  );
};

export default ClientsSlider;
