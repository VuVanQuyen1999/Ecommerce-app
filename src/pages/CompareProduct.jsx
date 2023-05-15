import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
    const listColor = {
        orange: "#ec7a23",
        purple: "#d672fe",
        blue: "#233fe7",
    };
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative mb-2">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="compare-product-details d-flex flex-column">
                                <h5 className="title">
                                    Honor T17.0 1 GB RAM 8 GB ROM 7 inch With
                                    WI-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-2">$100.00</h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5 className="mb-0">Brand:</h5>
                                        <p className="mb-0">Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Type:</h5>
                                        <p className="mb-0">Tablet Computers</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">SKU:</h5>
                                        <p className="mb-0">SKU033</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Availability:</h5>
                                        <p className="mb-0">In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Color</h5>

                                        <Color listColor={listColor} />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Size</h5>
                                        <div className="d-flex gap-10">
                                            <p className="mb-0">S</p>
                                            <p className="mb-0">M</p>
                                            <p className="mb-0">L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative mb-2">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="compare-product-details d-flex flex-column">
                                <h5 className="title">
                                    Honor T17.0 1 GB RAM 8 GB ROM 7 inch With
                                    WI-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-2">$100.00</h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5 className="mb-0">Brand:</h5>
                                        <p className="mb-0">Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Type:</h5>
                                        <p className="mb-0">Tablet Computers</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">SKU:</h5>
                                        <p className="mb-0">SKU033</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Availability:</h5>
                                        <p className="mb-0">In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Color</h5>

                                        <Color listColor={listColor} />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Size</h5>
                                        <div className="d-flex gap-10">
                                            <p className="mb-0">S</p>
                                            <p className="mb-0">M</p>
                                            <p className="mb-0">L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative mb-2">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="compare-product-details d-flex flex-column">
                                <h5 className="title">
                                    Honor T17.0 1 GB RAM 8 GB ROM 7 inch With
                                    WI-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-2">$100.00</h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5 className="mb-0">Brand:</h5>
                                        <p className="mb-0">Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Type:</h5>
                                        <p className="mb-0">Tablet Computers</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">SKU:</h5>
                                        <p className="mb-0">SKU033</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Availability:</h5>
                                        <p className="mb-0">In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Color</h5>

                                        <Color listColor={listColor} />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Size</h5>
                                        <div className="d-flex gap-10">
                                            <p className="mb-0">S</p>
                                            <p className="mb-0">M</p>
                                            <p className="mb-0">L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative mb-2">
                                <img
                                    src="/images/cross.svg"
                                    alt="cross"
                                    className="cross position-absolute"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        alt="watch"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="compare-product-details d-flex flex-column">
                                <h5 className="title">
                                    Honor T17.0 1 GB RAM 8 GB ROM 7 inch With
                                    WI-Fi+3G Tablet
                                </h5>
                                <h6 className="price mb-2">$100.00</h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5 className="mb-0">Brand:</h5>
                                        <p className="mb-0">Apple</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Type:</h5>
                                        <p className="mb-0">Tablet Computers</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">SKU:</h5>
                                        <p className="mb-0">SKU033</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Availability:</h5>
                                        <p className="mb-0">In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Color</h5>

                                        <Color listColor={listColor} />
                                    </div>
                                    <div className="product-detail">
                                        <h5 className="mb-0">Size</h5>
                                        <div className="d-flex gap-10">
                                            <p className="mb-0">S</p>
                                            <p className="mb-0">M</p>
                                            <p className="mb-0">L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProduct;
