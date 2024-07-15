import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { toAbsoluteUrl } from "../../helpers";

type Props = {
  show: boolean;
  PdfUrl: string;
  setShow: (show: boolean) => void;
};

const PreviewPdf: FC<Props> = ({show, PdfUrl, setShow}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => setShow(false)}
      className="mt-4"
    >
      <Modal.Header closeButton />
      <Modal.Body>
      <embed src={toAbsoluteUrl(PdfUrl)} style={{ width: "100%", height: "650px", borderRadius: "15px" }} />
      </Modal.Body>
    </Modal>
  );
};

export default PreviewPdf;
