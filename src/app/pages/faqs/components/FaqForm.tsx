import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import { useRef, useState } from "react";
import Joi from "joi";

interface FormData {
  question: string;
}

const StayInformed = () => {
  const intl = useIntl();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [errors, setErrors] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    question: "",
  });
  const questionInputRef = useRef<HTMLInputElement>(null);
  const showSuccessAlert = () => {
    Swal.fire({
      timer: 2000,
      html: `
            <p>${intl.formatMessage({ id: "SendSuccessfully" })}</p>
            <p>${intl.formatMessage({ id: "WeHaveReceivedYourMessage" })}</p>
          `,
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  const showFailureAlert = () => {
    Swal.fire({
      timer: 2000,
      text: intl.formatMessage({ id: "SendFailed" }),
      icon: "error",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  const emptyInputFields = () => {
    if (questionInputRef.current) {
      questionInputRef.current.value = "";
    }
  };

  const handleEmptyInputFields = () => {
    if (!formData.question) {
      questionInputRef.current?.classList.add("is-invalid");
    } else {
      questionInputRef.current?.classList.remove("is-invalid");
    }
  };

  const schema = Joi.object({
    question: Joi.string().required(),
  });

  const handleChange = (e: any) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    if (errors) {
      handleEmptyInputFields();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      // error.details.forEach((err) => {
      //   newErrors[err.path[0]] = true;
      // });
      setErrors(true);
      handleEmptyInputFields();
    } else {
      setErrors(false);
      setIsSpinning(true);
      const templateParams = {
        from_email: "",
        from_question: formData.question,
      };

      emailjs
        .send(
          "service_blzu0vd",
          "template_yjmk0aj",
          templateParams,
          "VknCzW-hDRiFw3YoG"
        )
        .then((response) => {
          setIsSpinning(false);
          showSuccessAlert();
          emptyInputFields();
          setFormData({
            question: "",
          });
        })
        .catch((error) => {
          setIsSpinning(false);
          showFailureAlert();
        });
    }
  };
  return (
    <div className="inquiry-form">
      <img
        src="/media/assets/icons/inquiry-form-img.png"
        alt="inquiry img"
        className="inquiry-form-image"
      />
      <div className="inquiry-form-text">
        <h4>{intl.formatMessage({ id: "HaveAnyQuestions" })}</h4>
        <p>
          {intl.formatMessage({
            id: "PleaseDontHesitateToAskUsAnythingYouWant",
          })}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inquiry-form-container">
          <input
            className="form-control"
            placeholder={intl.formatMessage({
              id: "PleaseLeaveYourQuestionHere",
            })}
            type="text"
            name="question"
            ref={questionInputRef}
            onChange={handleChange}
          ></input>
          <button>{intl.formatMessage({ id: "Ask" })}</button>
        </div>
      </form>
    </div>
  );
};

export default StayInformed;
