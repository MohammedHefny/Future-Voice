import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const AlsoRead = () => {
  const intl = useIntl();
  const blogs = [
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

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blogs-slider">
      <div className="slider-header">
        <div className="vertical-line"></div>
        <p>
          {intl.formatMessage({
            id: "YouMayAlsoRead",
          })}
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {blogs.map((blog) => (
            <Link to={blog.link}>
              <div key={blog.id} className="blog-card">
                <div className="blog-img">
                  <img src={blog.imgSrc} alt="blog-img" />
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlsoRead;

{
  /* <div className="blogs">
  {blogs.map((blog) => (
    <Link to={blog.link}>
      <div key={blog.id} className="blog-card">
        <div className="blog-img">
          <img src={blog.imgSrc} alt="blog-img" />
        </div>
        <p className="blog-date">{blog.date}</p>
        <h4 className="blog-title">{intl.formatMessage({ id: blog.title })}</h4>
        <p className="blog-recap">{intl.formatMessage({ id: blog.recap })}</p>
        <button className="blog-btn">
          {intl.formatMessage({ id: "ReadMore" })}
          <img src="/media/assets/icons/arrow.svg" alt="" />
        </button>
      </div>
    </Link>
  ))}
</div>; */
}
