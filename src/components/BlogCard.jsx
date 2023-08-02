import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const getUrlImg = (images, image) => {
    if (images?.length === 0 || images[0]?.url === undefined) {
      return image;
    } else {
      return images[0]?.url;
    }
  };
  const formatDate = (date) => {
    const eventDate = new Date(date);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = eventDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={getUrlImg(data?.images, data?.image)}
          alt="blog"
          className="img-fluid w-100"
        />
      </div>
      <div className="blog-content">
        <p className="date">{formatDate(data?.createdAt)}</p>
        <h5 className="title">{data?.title}</h5>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>
        <Link to={`/blog/${data?._id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
