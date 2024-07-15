import StayInformed from "../../shared/components/StayInformed";
import CertificateCard from "./components/CertificateCard";
import { useIntl } from "react-intl";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image: "/media/assets/certificates/intellectual.svg",
      description:
        "Certificate of the Saudi Authority for Intellectual Property",
      PdfUrl: "media/assets/certificates/4e Business Core.pdf",
      columns: 6,
    },
    {
      id: 2,
      image: "media/assets/certificates/city.svg",
      description: "City service providers classification certificate",
      PdfUrl: "media/assets/certificates/ISO-20000.pdf",
      columns: 6,
    },
    {
      id: 3,
      image: "media/assets/certificates/Logo_citc.svg",
      description:
        "Information registration certificate from the Communications and Information Technology Commission (CITC)",
      PdfUrl: "media/assets/certificates/CITC Certificate (2023) E.pdf",
      columns: 12,
    },
    {
      id: 4,
      image: "media/assets/certificates/qualification.svg",
      description: "Qualification certificate for Jadeer",
      PdfUrl: "media/assets/certificates/Jadeer.pdf",
      columns: 6,
    },
    {
      id: 5,
      image: "media/assets/certificates/government.svg",
      description: "Government Digital Authority Classification Certificate",
      PdfUrl: "media/assets/certificates/شهادة-هيئة الحكومة الرقمية.pdf",
      columns: 6,
    },
    {
      id: 6,
      image: "media/assets/certificates/iso.svg",
      description:
        "Certificate in systems analysis, special software design and programming, software maintenance and website design (ISO/IEC 20000-1: 2018)",
      PdfUrl: "media/assets/certificates/ISO-20000.pdf",
      columns: 12,
    },
  ];
  const intl = useIntl();

  return (
    <div className="certificates-section">
      <div className="services-section text-center">
        <h2>{intl.formatMessage({ id: "Certificates" })}</h2>
        <p className="certificate-p m-auto">
          {intl.formatMessage({ id: "CertificatesDesc" })}
        </p>
      </div>

      <div className="row certificate-row">
        {certificates.map((certificate) => (
          <CertificateCard certificate={certificate} key={certificate.id} />
        ))}
      </div>
      <StayInformed />
    </div>
  );
};

export default Certificates;
