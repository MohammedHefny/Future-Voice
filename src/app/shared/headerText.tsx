import { FC } from "react";
import { useIntl } from "react-intl";
interface HeaderTextI {
  header1: string;
  header2: string;
  header3?: string;
  className: string;
}
const HeaderText: FC<{ HeaderText: HeaderTextI }> = ({ HeaderText }) => {
  const { header1, header2, header3, className } = HeaderText;
  const intl = useIntl();
  return (
    <>
      <div className={`contact ${className}`}>
        <h2>{intl.formatMessage({ id: header1 })}</h2>
        {header3 ? (
          <>
            <span className="whiteSpace__preWrap text-center d-block mb-0">
              {intl.formatMessage({ id: header2 })}
            </span>
            <br />
            <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              <span className="contact__numbers">+100</span>
              <span>{intl.formatMessage({ id: header3 })}</span>
            </div>
          </>
        ) : (
          <h3 className="whiteSpace__preWrap">
            {intl.formatMessage({ id: header2 })}
          </h3>
        )}
      </div>
    </>
  );
};

export default HeaderText;
