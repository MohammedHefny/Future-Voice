import { useState } from "react";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface clientsI {
  img: string;
  className: string;
}

const ClientsImages = () => {
  const [clients, setClients] = useState<clientsI[]>([
    { img: "", className: "clients__1 clients__BordersTop d-none d-sm-flex " },
    { img: "", className: "clients__BordersTop d-none d-sm-flex" },
    { img: "", className: "clients__BordersTop d-none d-sm-flex" },
    { img: "", className: "clients__BordersTop d-none d-sm-flex" },
    { img: "", className: "clients__BordersTop d-none d-sm-flex" },
    { img: "", className: "clients__2 clients__BordersTop d-none d-sm-flex" },
    { img: "Google.svg", className: "clients__Google" },
    { img: "Microsoft.svg", className: "clients__Microsoft" },
    { img: "Zoom.svg", className: "clients__Zoom" },
    { img: "Tableau.svg", className: "clients__Tableau" },
    { img: "Oracle.svg", className: "clients__Oracle" },
    { img: "Qlik.svg", className: "clients__Qlik" },

    { img: "Modon.png", className: "clients__Modon" },
    { img: "TGA.png", className: "clients__TGA" },
    { img: "mobily.png", className: "clients__mobily" },
    { img: "Davita.png", className: "clients__Davita" },
    { img: "KingSaudUni.png", className: "clients__KingSaudUni" },
    { img: "stc.svg", className: "clients__stc" },

    {
      img: "real state general authority.png",
      className: "clients__realState",
    },
    { img: "nesma telecom.png", className: "clients__nesma" },
    { img: "1427.png", className: "clients__1427" },
    { img: "tree sword.png", className: "clients__TreeSword" },
    { img: "industrial modern.png", className: "clients__IndustrialModern" },
    { img: "HolyMakkahMuniCapility.png", className: "clients__HolyMakkah" },

    { img: "water company.png", className: "clients__WaterCompany" },
    { img: "amana aser.png", className: "clients__amana aser" },
    { img: "mastoura.png", className: "clients__mastoura" },
    { img: "mcv.png", className: "clients__mcv" },
    { img: "royal-gas.svg", className: "clients__RoyalGas" },
    { img: "IntegratedDawiyat.png", className: "clients__IntegratedDawiyat" },
    { img: "", className: "clients__3" },
    { img: "", className: "clients__BordersBottom d-none d-sm-flex" },
    { img: "", className: "clients__BordersBottom d-none d-sm-flex" },
    { img: "", className: "clients__BordersBottom d-none d-sm-flex" },
    { img: "", className: "clients__BordersBottom d-none d-sm-flex" },
    {
      img: "",
      className: "clients__4 clients__BordersBottom d-none d-sm-flex",
    },
  ]);
  return (
    <div className="container  ">
      <div className="row">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`${
              client.img ? "clients__holder" : ""
            } d-flex justify-content-center align-items-center col-lg-2 col-md-4 ${
              client.className
            }`}
          >
            {client.img && (
              // <img
              //   className={""}
              //   src={`/media/assets/clients/${client.img}`}
              //   alt={client.img}
              // />
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={200}
                src={`/media/assets/clients/${client.img}`}
                alt={client.img}
                classes=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsImages;
