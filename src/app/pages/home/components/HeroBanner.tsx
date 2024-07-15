import { useIntl } from "react-intl";
import Granim from "granim";
import { useEffect, useRef } from "react";

const HeroBanner = () => {
  const intl = useIntl();

  // const granimRef = useRef(null);
  // useEffect(() => {
  //   if (granimRef.current) {
  //     new Granim({
  //       element: granimRef.current,
  //       direction: "diagonal",
  //       isPausedWhenNotInView: true,
  //       states: {
  //         "default-state": {
  //           gradients: [
  //             ["#FFE608", "#3CFFB9"],
  //             ["#79FFBF", "#FF63B4"],
  //             ["#FF63B4", "#8B38E3"],
  //           ],
  //           transitionSpeed: 1000,
  //         },
  //       },
  //     });
  //   }
  // }, []);
  return (
    <>
      <div className="herobanner">
        {/* <canvas id="canvas-basic" ref={granimRef} /> */}
        <div className="blur-object blur-object-1">
          <img src="/media/assets/blur-object-1.svg" alt="blur-object" />
        </div>
        <div className="blur-object blur-object-2">
          {" "}
          <img src="/media/assets/blur-object-2.svg" alt="blur-object" />
        </div>
        <div className="blur-object blur-object-3">
          {" "}
          <img src="/media/assets/blur-object-3.svg" alt="blur-object" />
        </div>
        <div className="blur-object blur-object-4">
          {" "}
          <img src="/media/assets/blur-object-4.svg" alt="blur-object" />
        </div>
        <div className="blur-object blur-object-5">
          {" "}
          <img src="/media/assets/blur-object-5.svg" alt="blur-object" />
        </div>
        <img
          src="/media/assets/dashed-circle-1.svg"
          className="dashed-circle"
          alt=""
        />
        <img
          src="/media/assets/dashed-circle-2.svg"
          className="dashed-circle"
          alt=""
        />
        <img
          src="/media/assets/dashed-circle-3.svg"
          className="dashed-circle"
          alt=""
        />
        <img
          src="/media/assets/dashed-circle-4.svg"
          className="dashed-circle"
          alt=""
        />

        <div className="container">
          <h2 className="herobanner-header">
            {intl.formatMessage({ id: "HeroBannerHeader" })}
          </h2>
          {/* <div className="herobanner-footer">
            <p>{intl.formatMessage({ id: "Established" })}</p>
            <p>2000</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
