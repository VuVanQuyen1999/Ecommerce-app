import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-ti">Shop By Categories</h3>
                            <div className="">
                                <ul className="ps-0">
                                    <li className="">Watch</li>
                                    <li className="">TV</li>
                                    <li className="">Camera</li>
                                    <li className="">Laptop</li>
                                </ul>
                            </div>
                        </div>

                        <div className="filter-card mb-3">
                            <h3 className="filter-ti">Filter By</h3>
                            <div className="">
                                <h5 className="sub-title">Availability</h5>
                                <div className="">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                        <label
                                            htmlFor=""
                                            className="form-check-label"
                                        >
                                            In stock (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                        <label
                                            htmlFor=""
                                            className="form-check-label"
                                        >
                                            Out of stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">
                                            From
                                        </label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">
                                            To
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div className="">
                                    <div>
                                        <ul className="colors">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div className="">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="color-1"
                                        />
                                        <label
                                            htmlFor="color-1"
                                            className="form-check-label"
                                        >
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="color-2"
                                        />
                                        <label
                                            htmlFor="color-2"
                                            className="form-check-label"
                                        >
                                            M (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="color-3"
                                        />
                                        <label
                                            htmlFor="color-3"
                                            className="form-check-label"
                                        >
                                            L (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="color-4"
                                        />
                                        <label
                                            htmlFor="color-4"
                                            className="form-check-label"
                                        >
                                            XL (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="color-5"
                                        />
                                        <label
                                            htmlFor="color-5"
                                            className="form-check-label"
                                        >
                                            XXL (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="filter-card mb-3">
                            <h3 className="filter-ti">Product Tags</h3>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-ti">Random Product</h3>
                        </div>
                    </div>
                    <div className="col-9"></div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
