import { useIntl } from "react-intl";
const Informed = () => {
  const intl = useIntl();
  return (
    <>
      <div className="container stay__informed__holder">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center stay__informed d-flex justify-content-center align-items-center position-relative">
            {/* <div className="informed__overlay"></div> */}
            <div>
              <h2>
                {intl.formatMessage({ id: "StayInformedOfOurLatestNews" })}
              </h2>
              <h4>{intl.formatMessage({ id: "WeInformYouOfAll" })}</h4>
              <form className="d-flex justify-content-between align-items-center gap-2">
                <div className="input-wrapper informed__input__holder position-relative ">
                  <div>
                    <img
                      className="icon "
                      src="/media/assets/contactUs/sms.png"
                      alt="sms"
                    />
                  </div>
                  <input
                    className={`form-control email-input flex-grow-1`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder={intl.formatMessage({ id: "EnterYourEmail" })}
                  />
                </div>
                <button
                  className="btn position-relative btn__main "
                  type="submit"
                >
                  {intl.formatMessage({ id: "Send" })}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informed;
