import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useParams } from "react-router-dom";
import AlsoRead from "./AlsoRead";

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
  content: Array<{ type: string; id: string }>;
}

const BlogDetails = () => {
  const intl = useIntl();
  const { blog } = useParams<{ blog: string }>();
  const [selectedBlog, setSelectedBlog] = useState<Blog | undefined>();
  const blogs: Blog[] = [
    {
      id: 0,
      subject: "subject1",
      imgSrc: "/media/assets/blogs/blog-1.png",
      bgSrc: "/media/assets/blogs/blog-bg-1.png",
      date: "25 October 2023",
      title: "firstBlogTitle",
      desc: "firstBlogDesc",
      recap: "firstBlogRecap",
      link: "/blogs/first-blog",
      content: [
        { type: "h2", id: "graduationPartyIdeas2022" },
        { type: "p", id: "graduationPartiesIntro" },
        { type: "h3", id: "makeYourFavors" },
        { type: "p", id: "makeYourFavorsDesc" },
        { type: "h3", id: "ideasForTheNewGuy" },
        { type: "p", id: "ideasForTheNewGuyDesc" },
        { type: "h3", id: "graduationGift" },
        { type: "p", id: "graduationGiftDesc" },
      ],
    },
  ];

  useEffect(() => {
    const bloggy = blogs.find((item) => item.link === `/blogs/${blog}`);
    setSelectedBlog(bloggy);
  }, [blog]);

  return (
    <>
      {selectedBlog && (
        <div className="container blog-container ">
          <div className="blogs-navigation">
            <p>
              <Link to={"/"}>
                <span>{intl.formatMessage({ id: "Home" })}</span>
              </Link>
              /
              <Link to={"/blogs"}>
                <span>{intl.formatMessage({ id: "Blogs" })}</span>
              </Link>
              /<span>{intl.formatMessage({ id: "BlogDetails" })}</span>
            </p>
          </div>
          <div>
            <img className="blog-bg" src={selectedBlog?.bgSrc} alt="" />
          </div>
          <p className="blog-date">{selectedBlog?.date}</p>
          <p className="blog-title">
            {intl.formatMessage({ id: selectedBlog?.title })}
          </p>
          <p className="blog-desc">
            {intl.formatMessage({ id: selectedBlog?.desc })}
          </p>
          <div>
            {selectedBlog.content.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 className="blog-desc2" key={index}>
                    {intl.formatMessage({ id: block.id })}
                  </h2>
                );
              } else if (block.type === "h3") {
                return (
                  <h3 className="blog-desc3" key={index}>
                    {intl.formatMessage({ id: block.id })}
                  </h3>
                );
              } else if (block.type === "p") {
                return (
                  <p className="blog-desc" key={index}>
                    {intl.formatMessage({ id: block.id })}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
      <div className="container">
        <AlsoRead />
      </div>
    </>
  );
};

export default BlogDetails;
