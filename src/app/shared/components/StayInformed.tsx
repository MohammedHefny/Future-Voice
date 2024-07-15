import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import { useRef, useState } from "react";
import Joi from "joi";

interface FormData {
  email: string;
}

const StayInformed = () => {
  const intl = useIntl();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<boolean>(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

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
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
  };

  const handleEmptyInputFields = () => {
    if (!formData.email) {
      emailInputRef.current?.classList.add("is-invalid");
    } else {
      emailInputRef.current?.classList.remove("is-invalid");
    }
  };

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
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
        from_email: formData.email,
        from_question: "",
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
            email: "",
          });
        })
        .catch((error) => {
          setIsSpinning(false);
          showFailureAlert();
        });
    }
  };

  return (
    <div className="stay-informed-form">
      <div className="form-text">
        <h4>{intl.formatMessage({ id: "latestNews" })}</h4>
        <p>
          {intl.formatMessage({ id: "exclusiveOffers" })}
          <br />
          {intl.formatMessage({ id: "offersTailored" })}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label>
            <input
              placeholder={intl.formatMessage({ id: "enterYourEmail" })}
              className="form-control"
              name="email"
              ref={emailInputRef}
              onChange={handleChange}
            ></input>
          </label>
          <button>{intl.formatMessage({ id: "subscribe" })}</button>
        </div>
      </form>
    </div>
  );
};

export default StayInformed;
