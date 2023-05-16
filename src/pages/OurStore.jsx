import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
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
                                    <div className="form-floating">
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
                                    <div className="form-floating">
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
                            <div className="">
                                <div className="products-tag d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-ti">Random Product</h3>
                            <div className="random-products-wrapper">
                                <div className="random-products d-flex align-items-center">
                                    <div className="w-50">
                                        <img
                                            src="/images/headphone.jpg"
                                            alt="watch"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5 className="">
                                            Kids headphones bulk 10 pack multi
                                            colored for students
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={18}
                                            value={3.5}
                                            edit={false}
                                            isHalf={true}
                                            emptyIcon={
                                                <i className="far fa-star"></i>
                                            }
                                            halfIcon={
                                                <i className="fa fa-star-half-alt"></i>
                                            }
                                            fullIcon={
                                                <i className="fa fa-star"></i>
                                            }
                                            activeColor="#ffd700"
                                        />
                                        <b>$100.00</b>
                                    </div>
                                </div>

                                <div className="random-products d-flex align-items-center">
                                    <div className="w-50">
                                        <img
                                            src="/images/headphone.jpg"
                                            alt="watch"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5 className="">
                                            Kids headphones bulk 10 pack multi
                                            colored for students
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={18}
                                            value={3.5}
                                            edit={false}
                                            isHalf={true}
                                            emptyIcon={
                                                <i className="far fa-star"></i>
                                            }
                                            halfIcon={
                                                <i className="fa fa-star-half-alt"></i>
                                            }
                                            fullIcon={
                                                <i className="fa fa-star"></i>
                                            }
                                            activeColor="#ffd700"
                                        />
                                        <b>$100.00</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="filter-sort-grid">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p
                                        className="mb-0 d-block"
                                        style={{ width: "100px" }}
                                    >
                                        Sort By:
                                    </p>
                                    <select
                                        name=""
                                        id=""
                                        className="form-control form-select"
                                        defaultValue={"DEFAULT"}
                                    >
                                        <option
                                            disabled
                                            value="DEFAULT"
                                        ></option>
                                        <option value="manual">Featured</option>
                                        <option
                                            value="best-selling"
                                            selected="selected"
                                        >
                                            Best selling
                                        </option>
                                        <option value="title-ascending">
                                            Alphabetically, A-Z
                                        </option>
                                        <option value="title-descending">
                                            Alphabetically, Z-A
                                        </option>
                                        <option value="price-ascending">
                                            Price, low to hight
                                        </option>
                                        <option value="price-descending">
                                            Price, hight to low
                                        </option>
                                        <option value="created-ascending">
                                            Date, old to new
                                        </option>
                                        <option value="created-descending">
                                            Date, new to old
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">
                                        21 Products
                                    </p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img
                                            onClick={() => setGrid(3)}
                                            src="/images/gr4.svg"
                                            alt="grid"
                                            className="d-blog img-fluid"
                                        />
                                        <img
                                            onClick={() => setGrid(4)}
                                            src="/images/gr3.svg"
                                            alt="grid"
                                            className="d-blog img-fluid"
                                        />
                                        <img
                                            onClick={() => setGrid(6)}
                                            src="/images/gr2.svg"
                                            alt="grid"
                                            className="d-blog img-fluid"
                                        />
                                        <img
                                            onClick={() => setGrid(12)}
                                            src="/images/gr.svg"
                                            alt="grid"
                                            className="d-blog img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products-list mt-5">
                            <div className="d-flex justify-content-between flex-wrap">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore;
