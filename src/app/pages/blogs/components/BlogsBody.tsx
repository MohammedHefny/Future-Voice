import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { scrollToTop } from "../../../shared/functions/ScrollToTop";
import { useState } from "react";
import ImageBlurHash from "../../../shared/components/imageBlurHash";
interface TabsI {
  title: string;
  code: string;
}

interface Blog {
  id: number;
  subject: string;
  imgSrc: string;
  bgSrc: string;
  date: string;
  title: string;
  desc: string;
  recap: string;
  link: string;
}

const BlogsBody = () => {
  const intl = useIntl();
  const tabData: TabsI[] = [
    { title: "All", code: "all" },
    {
      title: "Subject",
      code: "subject1",
    },
    {
      title: "Subject",
      code: "subject2",
    },
    {
      title: "Subject",
      code: "subject3",
    },
    {
      title: "Subject",
      code: "subject4",
    },
    {
      title: "Subject",
      code: "subject5",
    },
  ];
  const blogs: Blog[] = [
    {
      id: 0,
      subject: "subject1",
      imgSrc: "/media/assets/blogs/blog-1.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 1,
      subject: "subject1",
      imgSrc: "/media/assets/blogs/blog-2.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 2,
      subject: "subject1",
      imgSrc: "/media/assets/blogs/blog-3.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 3,
      subject: "subject2",
      imgSrc: "/media/assets/blogs/blog-4.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 4,
      subject: "subject3",
      imgSrc: "/media/assets/blogs/blog-5.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 5,
      subject: "subject3",
      imgSrc: "/media/assets/blogs/blog-1.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 6,
      subject: "subject4",
      imgSrc: "/media/assets/blogs/blog-3.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 7,
      subject: "subject4",
      imgSrc: "/media/assets/blogs/blog-5.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
    {
      id: 8,
      subject: "subject5",
      imgSrc: "/media/assets/blogs/blog-2.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 Octoper 2023",
      title: "firstBlog",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-wrap blogsTab__holder">
          <Tabs
            defaultActiveKey="All"
            transition={false}
            id="BlogsTabs"
            className="mb-3 Blogs__tabs"
          >
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                className=""
                eventKey={tab.title}
                title={
                  tab.title === "Subject"
                    ? `${intl.formatMessage({ id: tab.title })}#${index + 1}`
                    : intl.formatMessage({ id: tab.title })
                }
              >
                <div className="blogs">
                  {tab.code === "all"
                    ? currentItems.map((blog) => (
                        <Link key={blog.id} to={blog.link}>
                          <div className="blog-card">
                            <div className="blog-img">
                              {/* <img src={blog.imgSrc} alt="blog-img" /> */}
                              <ImageBlurHash
                                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                                height={200}
                                src={blog.imgSrc}
                                alt="blog-img"
                                classes=""
                              />
                            </div>
                            <p className="blog-date">{blog.date}</p>
                            <h4 className="blog-title">
                              {intl.formatMessage({ id: blog.title })}
                            </h4>
                            <p className="blog-recap">
                              {intl.formatMessage({ id: blog.recap })}
                            </p>
                            <button className="blog-btn">
                              {intl.formatMessage({ id: "ReadMore" })}
                              <img src="/media/assets/icons/arrow.svg" alt="" />
                            </button>
                          </div>
                        </Link>
                      ))
                    : currentItems
                        .filter((blog) => blog.subject === tab.code)
                        .map((blog) => (
                          <div key={blog.id} className="blog-card">
                            <div className="blog-img">
                              {/* <img src={blog.imgSrc} alt="blog-img" /> */}
                              <ImageBlurHash
                                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                                height={200}
                                src={blog.imgSrc}
                                alt="blog-img"
                                classes=""
                              />
                            </div>
                            <p className="blog-date">{blog.date}</p>
                            <h4 className="blog-title">
                              {intl.formatMessage({ id: blog.title })}
                            </h4>
                            <p className="blog-recap">
                              {intl.formatMessage({ id: blog.recap })}
                            </p>
                            <button className="blog-btn">
                              {intl.formatMessage({ id: "ReadMore" })}
                            </button>
                          </div>
                        ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
        <div className="mb-5 d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              linkClassName="custom-pagination-button"
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => {
                  handlePageChange(index + 1);
                  scrollToTop();
                }}
                linkClassName={`custom-pagination-button ${
                  index + 1 === currentPage
                    ? "active-page background-linear-gradient-color"
                    : ""
                }`}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              linkClassName="custom-pagination-button"
            />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default BlogsBody;
