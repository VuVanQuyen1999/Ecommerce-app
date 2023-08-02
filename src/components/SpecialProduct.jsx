import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = ({ data }) => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-product-image">
            <img src={data?.images[0]?.url} alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h6 className="brand">{data?.brand}</h6>
            <h5 className="title">{data?.title}</h5>
            <ReactStars
              count={5}
              size={18}
              value={data?.totalrating}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$ {data?.price}</span>
              &nbsp;
              <strike className="">$ {data?.price}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>125 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3">1</span>:
                <span className="badge rounded-circle p-3">1</span>:
                <span className="badge rounded-circle p-3">1</span>
              </div>
            </div>
            <div className="prod-count mt-3">
              <p>Products: {data?.quantity - data?.solid}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${(data?.solid / data?.quantity) * 100}%` }}
                  aria-valuenow={(data?.solid / data?.quantity) * 100}
                  aria-valuemin="0"
                  aria-valuemax={data?.quantity}
                ></div>
              </div>
            </div>
            <Link className="button mt-3" to={"/product/" + data?._id}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
