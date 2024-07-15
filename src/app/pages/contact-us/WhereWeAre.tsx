import { FC } from "react";
import { useIntl } from "react-intl";
import HeaderText from "../../shared/headerText";
import ImageBlurHash from "../../shared/components/imageBlurHash";

const WhereWeAre: FC = () => {
  const intl = useIntl();
  interface countriesI {
    name: string;
    branchName: string;
    class: string;
    branch: string;
  }
  const countries: countriesI[] = [
    {
      name: "SaudiArabia",
      branchName: "ConvenientlyLocated",
      class: "bg__KSA",
      branch: "_Riyadh",
    },
    {
      name: "Egypt",
      branchName: "FindUsEasily",
      class: "bg__Egypt",
      branch: "_Cairo",
    },
    {
      name: "UAE",
      branchName: "LocatedOffice",
      class: "bg__UAE",
      branch: "_DubaiDeira",
    },
    {
      name: "UAE",
      branchName: "SituatedCluster",
      class: "bg__UAE",
      branch: "_DubaiJLT",
    },

    {
      name: "Bahrain",
      branchName: "OurOfficeIsSituated",
      class: "bg__Bahrain",
      branch: "_Manama",
    },
    {
      name: "Italy",
      branchName: "VisitRosazza",
      class: "bg__Italy",
      branch: "_Rome",
    },
  ];
  const headerTextData = {
    header1: "OurBranches",
    header2: "ABrandISOCertified",
    className: "Branches__stars",
  };
  return (
    <>
      <div className="container ">
        <div className="WhereWeAre__section">
          <HeaderText HeaderText={headerTextData} />

          <div className="countries row">
            {countries.map((country, index) => (
              <div
                key={index}
                className=" col-12 col-sm-4  mb-md-0 countriresMap__holder"
              >
                <div className={` ${country.class}`}>
                  <div className=" country__holder">
                    <div>
                      {/* <img
                        src={`/media/assets/contactUs/${country.name}.png`}
                        alt={country.name}
                      /> */}
                      <ImageBlurHash
                        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                        height={100}
                        src={`/media/assets/contactUs/${country.name}.png`}
                        alt={country.name}
                        classes=""
                      />
                    </div>
                    <span className="country ">
                      {intl.formatMessage({
                        id: country.name,
                      })}
                    </span>
                  </div>
                  <div className="branchName ">
                    <span className="branch">
                      {" "}
                      {intl.formatMessage({
                        id: country.branch,
                      })}
                    </span>
                    <span>
                      {intl.formatMessage({
                        id: country.branchName,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereWeAre;
