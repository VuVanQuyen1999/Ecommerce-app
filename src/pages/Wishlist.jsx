import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title={"Wishlist"} />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="py-3">
                                    <h5 className="title">
                                        Honor T17.0 1 GB RAM 8 GB ROM 7 inch
                                        With WI-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-2">$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="py-3">
                                    <h5 className="title">
                                        Honor T17.0 1 GB RAM 8 GB ROM 7 inch
                                        With WI-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-2">$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="py-3">
                                    <h5 className="title">
                                        Honor T17.0 1 GB RAM 8 GB ROM 7 inch
                                        With WI-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-2">$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
