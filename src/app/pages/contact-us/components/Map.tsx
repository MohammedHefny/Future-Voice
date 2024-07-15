import { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";
import MapEmbed from "./MapEmbed";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Map = () => {
  const intl = useIntl();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const emptyInputFields = () => {
    if (nameInputRef.current) {
      nameInputRef.current.value = "";
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
    if (messageInputRef.current) {
      messageInputRef.current.value = "";
    }
  };

  const handleEmptyInputFields = () => {
    if (!formData.name) {
      nameInputRef.current?.classList.add("is-invalid");
    } else {
      nameInputRef.current?.classList.remove("is-invalid");
    }
    if (!formData.email) {
      emailInputRef.current?.classList.add("is-invalid");
    } else {
      emailInputRef.current?.classList.remove("is-invalid");
    }
    if (!formData.message) {
      messageInputRef.current?.classList.add("is-invalid");
    } else {
      messageInputRef.current?.classList.remove("is-invalid");
    }
  };

  useEffect(() => {
    console.log(formData);
  });

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

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: Joi.string().required(),
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
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(
          "service_blzu0vd",
          "template_wl9knud",
          templateParams,
          "VknCzW-hDRiFw3YoG"
        )
        .then((response) => {
          setIsSpinning(false);
          showSuccessAlert();
          emptyInputFields();
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setIsSpinning(false);
          showFailureAlert();
        });
    }
  };
  return (
    <>
      <div className="input-container">
        {/* <img
          src={`/media/assets/contactUs/Map.png`}
          alt="Map"
          className="w-100"
        /> */}
        <MapEmbed />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{intl.formatMessage({ id: "FullName" })}</label>
          <div className="input-wrapper position-relative">
            <div>
              <img
                className="icon "
                src="/media/assets/contactUs/profile.svg"
                alt="profile"
              />
            </div>
            <input
              className={`form-control name-input`}
              type="text"
              id="name"
              name="name"
              placeholder={intl.formatMessage({ id: "EnterYourName" })}
              onChange={handleChange}
              ref={nameInputRef}
            />
          </div>
          <label htmlFor="email">{intl.formatMessage({ id: "Email" })}</label>
          <div className="input-wrapper position-relative">
            <div>
              <img
                className="icon"
                src="/media/assets/contactUs/sms.png"
                alt="sms"
              />
            </div>
            <input
              className={`form-control email-input`}
              type="email"
              id="email"
              name="email"
              placeholder={intl.formatMessage({ id: "enterEmail" })}
              onChange={handleChange}
              ref={emailInputRef}
            />
          </div>
          <label htmlFor="message">
            {intl.formatMessage({ id: "Message" })}
          </label>
          <div className="input-wrapper position-relative">
            <textarea
              className={`form-control message-input`}
              id="message"
              name="message"
              placeholder={intl.formatMessage({ id: "WriteMessage" })}
              onChange={handleChange}
              ref={messageInputRef}
            />
          </div>
          <button className="btn position-relative" type="submit">
            {intl.formatMessage({ id: "Send" })}
            {isSpinning ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden spinner">Loading...</span>
              </Spinner>
            ) : (
              <div>
                <img src="/media/assets/contactUs/send.svg" alt="send" />
              </div>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Map;
