import React, { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaChevronRight,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGroup = () => {
  const blogData = [
    {
      imgSrc: "/assets/img/blog/2-test.png",
      date: "05 JUL",
      author: "MESHAL",
      privilege: "Private",
      title:
        "Can administrative labor market data help policymakers anticipate changes in Unemployment?",
      content:
        "Using Saned UI claims data to predict unemployment rate in Saudi Arabia",
    },
    {
      imgSrc: "/assets/img/blog/1-test.png",
      date: "05 JUL",
      author: "MESHAL",
      privilege: "Private",
      title: "Quantifying the labor demand for Saudi Labor (June Newsletter)",
      content:
        "In a previous article, I introduced a proxy indicator for the private sector’s demand for Saudi citizens. I have also shown unique data on the…",
    },
    {
      imgSrc: "/assets/img/blog/3-test.png",
      date: "05 JUL",
      author: "MESHAL",
      privilege: "Private",
      title: "تحليل وصفي للمرأة السعودية في القطاع الخاص",
      content:
        "في الشهر الماضي، كتبت مقالًا يستطلع ما إذا كانت بعض الشركات تفضل توظيف النساء السعوديات في وظائف مناسبة للرجال والنساء. في هذه المقالة، أقدم تحديثًا…",
    },
    {
      imgSrc: "/assets/img/blog/4-test.png",
      date: "05 JUL",
      author: "MESHAL",
      privilege: "Private",
      title: "Which economic sectors are driving the labor Demand?",
      content: "Exploring the employment contribution by sector and firm size",
    },
    // Add more blog data objects as needed
  ];
  const pageSize = 3; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, blogData.length);

  const currentBlogs = blogData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogData.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {/* =============== Blog Group start ===============*/}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {currentBlogs.map((blog, index) => (
                <div className="single-blog-inner" key={index}>
                  <div className="thumb">
                    <img src={blog.imgSrc} alt="img" />
                    <span className="date">{blog.date}</span>
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <FaRegUser /> By {blog.author}
                      </li>
                      <li>
                        <FaRegFolderOpen /> {blog.privilege}
                      </li>
                    </ul>
                    <h2 className="title">
                      <Link to={`/blog-details/${index + 1}`}>{blog.title}</Link>
                    </h2>
                    <p>{blog.content}</p>
                    <Link
                      className="btn btn-border-base mt-3"
                      to="/service-details"
                    >
                      Touch More <FaPlus />
                    </Link>
                  </div>
                </div>
              ))}
              <div className="pagination">
                <a
                  className={`prev page-numbers ${
                    currentPage === 1 && "disabled"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <FaAngleLeft />
                </a>
                {Array.from({ length: totalPages }, (_, i) => (
                  <a
                    key={i}
                    className={`page-numbers ${
                      currentPage === i + 1 && "current"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </a>
                ))}
                <a
                  className={`next page-numbers ${
                    currentPage === totalPages && "disabled"
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <FaAngleRight />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="td-sidebar">
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img src="/assets/img/about/7.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>Leslie Alexander</h5>
                    <h6>(480) 555-0103</h6>
                    <ul className="social-media">
                      <li>
                        <a href="#">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Key word" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <FaChevronRight />
                    </button>
                  </form>
                </div>
                <div className="widget widget-recent-post">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="/assets/img/widget/1.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="/blog-details">
                              Empowering future with solar.
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="/assets/img/widget/2.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="blog-details">
                              Marketing For Base market watch
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="/assets/img/widget/3.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="/blog-details">
                              Condtum Integer urna at faucibus
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_catagory">
                  <h4 className="widget-title">Catagory</h4>
                  <ul className="catagory-items">
                    <li>
                      <Link to="/blog">
                        Business <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Finance <span>7</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Web Design <span>2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Counsiling <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        IT Service <span>5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud mb-0">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tagcloud">
                    <a href="#">Information</a>
                    <a href="#">Learn</a>
                    <a href="#">ICT</a>
                    <a href="#">Business</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Project</a>
                    <a href="#">Personal</a>
                    <a href="#">Server</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Blog Group End ===============*/}
    </>
  );
};

export default BlogGroup;
