import React, { FC, useState } from "react";
import PreviewPdf from "../../../shared/components/PreviewPdf";
import ImageBlurHash from "../../../shared/components/imageBlurHash";
import { useIntl } from "react-intl";

type Props = {
  certificate: {
    id: number;
    image: string;
    description: string;
    columns: number;
    PdfUrl: string;
  };
};

const CertificateCard: FC<Props> = ({ certificate }) => {
  const intl = useIntl();
  const [showPdf, setShowPdf] = useState<boolean>(false);
  return (
    <>
      <div
        className={`col-md-${certificate.columns} certt`}
        key={certificate.id}
      >
        <div className="certificate-card" onClick={() => setShowPdf(true)}>
          {/* <img
            className="certificate-img"
            src={certificate.image}
            alt="certificate"
          /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src={certificate.image}
            alt="certificate"
            classes=""
          />
          <p>{intl.formatMessage({ id: certificate.description })}</p>
        </div>
      </div>
      {/* <PreviewPdf
        show={showPdf}
        PdfUrl={certificate.PdfUrl}
        setShow={setShowPdf}
      /> */}
    </>
  );
};

export default CertificateCard;
