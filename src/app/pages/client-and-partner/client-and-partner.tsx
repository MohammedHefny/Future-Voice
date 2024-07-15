import React from "react";
import HeaderText from "../../shared/headerText";
import StayInformed from "../../shared/components/StayInformed";
import ClientsImages from "./components/clientsImages";

const headerTextData = {
  header1: "ClientsAndPartners",
  header2: "WeShowSome",
  header3: "successPartners",
  className: "ClientAndPartner__header",
};
const ClientAndPartner = () => {
  return (
    <>
      <HeaderText HeaderText={headerTextData} />
      <ClientsImages />
      <StayInformed />
    </>
  );
};

export default ClientAndPartner;
