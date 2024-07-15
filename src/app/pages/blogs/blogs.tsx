import HeaderText from "../../shared/headerText";
import BlogsBody from "./components/BlogsBody";

const headerTextData = {
  header1: "WeBringCreativeContent",
  header2: "OurPassionIsTransforming",
  className: "ClientAndPartner__header",
};

const Blogs = () => {
  return (
    <>
      <div className="blogs-page">
        <HeaderText HeaderText={headerTextData} />;
        <BlogsBody />
      </div>
    </>
  );
};

export default Blogs;
