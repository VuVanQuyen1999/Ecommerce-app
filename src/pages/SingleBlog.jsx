import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const getUrlImg = (images, image) => {
    if (images?.length !== 0 && images[0]?.url !== "") {
      return images[0]?.url;
    } else {
      return image;
    }
  };

  const formatDate = (date) => {
    const eventDate = new Date(date);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = eventDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  const blogId = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(getBlog(blogId));
  }, [blogId]);
  const blogState = useSelector((state) => state?.blog?.getBlog);
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrumb title="Single Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <p className="date">{formatDate(blogState?.createdAt)}</p>
              <img
                src={getUrlImg(blogState?.images, blogState?.image)}
                alt="blog"
                className="w-100"
              />
              <p
                dangerouslySetInnerHTML={{ __html: blogState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
