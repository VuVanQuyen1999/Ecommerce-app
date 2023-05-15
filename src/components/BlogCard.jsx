import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img
                    src="/images/blog-1.jpg"
                    alt="blog"
                    className="img-fluid w-100"
                />
            </div>

            <div className="blog-content">
                <p className="date">12 May, 2023</p>
                <h5 className="title">
                    A beautiful sunday morning renaissance
                </h5>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius nisi odit molestiae debitis, maiores consequuntur
                    assumenda cum quis quasi dolores voluptate vel possimus
                    perspiciatis quia quaerat distinctio cumque alias minus?
                </p>
                <Link to="/blog/:id" className="button">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
