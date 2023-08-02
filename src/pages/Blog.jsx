import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogState = useSelector((state) => state?.blog?.blog);

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-ti">Find By Categories</h3>
              <div className="">
                <ul className="ps-0">
                  <li className="">Watch</li>
                  <li className="">TV</li>
                  <li className="">Camera</li>
                  <li className="">Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState?.map((item) => {
                return (
                  <div key={item?._id} className="col-6 mb-3">
                    <BlogCard data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
