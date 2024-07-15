import React, { FC, useEffect, useRef, useState } from "react";
import { setLanguage, useLang } from "../../../i18n/Metronici18n";

interface Props {
  isScrolled?: boolean;
}

const SwitchLang: FC<Props> = ({ isScrolled = true }) => {
  const lang = useLang();

  const [swapped, setSwapped] = useState(false);
  const [label, setLabel] = useState("English");
  const [nextLabel, setNextLabel] = useState("");
  useEffect(() => {
    lang === "en" ? setLabel("ar") : setLabel("en");
    lang === "en" ? setNextLabel("en") : setNextLabel("ar");
  }, []);
  const changeLanguage = () => {
    setTimeout(() => {
      switch (lang) {
        case "en":
          setLanguage("ar");
          break;
        case "ar":
          setLanguage("en");
      }
    }, 1000);

    setSwapped((prev) => !prev);
  };
  return (
    <div className="lang-btn" onClick={changeLanguage}>
      <div className="ball-container">
        <div className={`label next ${swapped ? "opacity-100" : "opacity-0"} `}>
          {nextLabel}
        </div>
        <div
          className={`ball ${swapped && lang === "en" ? "swap-en" : ""} ${
            swapped && lang === "ar" ? "swap-ar" : ""
          }`}
        ></div>
      </div>
      <div
        className={`label ${
          swapped && lang === "en" ? "swap-en opacity-0" : ""
        } ${swapped && lang === "ar" ? "swap-ar opacity-0" : ""}`}
      >
        {label}
      </div>
    </div>
  );
};

export default SwitchLang;
