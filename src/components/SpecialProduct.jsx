import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="special-product-image">
                        <img
                            src="/images/watch.jpg"
                            alt="watch"
                            className="img-fluid"
                        />
                    </div>
                    <div className="special-product-content">
                        <h6 className="brand">Apple</h6>
                        <h5 className="title">Apple Watch series 7</h5>
                        <ReactStars
                            count={5}
                            size={18}
                            value={3.5}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p">$100</span>
                            &nbsp;
                            <strike className="">$120</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>125 </b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-3">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-3">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-3">
                                    1
                                </span>
                            </div>
                        </div>
                        <div className="prod-count mt-3">
                            <p>Products: 5</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <Link className="button mt-3">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
