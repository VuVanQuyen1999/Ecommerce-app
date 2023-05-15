import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Single Blog"} />
            <BreadCrumb title="Single Blog" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link
                                    to="/blog"
                                    className="d-flex align-items-center gap-10"
                                >
                                    <HiOutlineArrowLeft className="fs-4" /> Go
                                    back to Blogs
                                </Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <p className="date">12 May, 2023</p>
                                <img
                                    src="/images/blog-1.jpg"
                                    alt="blog"
                                    className="w-100"
                                />
                                <p>
                                    The Privacy Policy and User Agreement
                                    informs you of our policies regarding the
                                    collection, use and disclosure of personal
                                    data collected from you. This Policy applies
                                    to the websites for TALK English Schools, at
                                    www.talk.edu and blog.talk.edu (referred to
                                    as “Sites”) and any other information
                                    collected from you by TALK. The Policy is
                                    not applicable for the collection of
                                    information from any website other than the
                                    Sites; nor is it applicable when there is
                                    collection of information by our affiliated
                                    businesses or by third parties. By using the
                                    Sites, you agree to the collection and use
                                    of information in accordance with this
                                    Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
