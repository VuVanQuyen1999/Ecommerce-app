import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";

const SingleProduct = () => {
    const props = {
        width: 594,
        height: 500,
        zoomWidth: 600,
        img: "https://i.ytimg.com/vi/Cy1adxM-CjM/maxresdefault.jpg",
    };
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <section className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div className="">
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex flex-wrap gap-15">
                                <div className="">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="/images/ap-watch-02.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids Headphones Bulk 10 Pack Multi
                                        Colored For Students{" "}
                                    </h3>
                                </div>

                                <div className="border-bottom py-3">
                                    <p className="price">$100.00</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
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
                                        <p className="mb-0 t-review">
                                            (2 Reviews)
                                        </p>
                                    </div>
                                    <a className="review-btn" href="#review">
                                        Write a Review
                                    </a>
                                </div>

                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Type :
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Brand :
                                        </h3>
                                        <p className="product-data">Apple</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Category :
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Tags :
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Availability :
                                        </h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Size :
                                        </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Color :
                                        </h3>
                                        <Color
                                            listColor={{
                                                red: "#ff4438",
                                                blue: "#453bba",
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex gap-15 align-items-center mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Quantity :
                                        </h3>
                                        <div className="">
                                            <input
                                                type="number"
                                                min={1}
                                                max={10}
                                                name=""
                                                style={{ width: "70px" }}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button
                                                className="button border-0"
                                                type="submit"
                                            >
                                                ADD to Cart
                                            </button>
                                            <button className="signup button border-0">
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h4>Description</h4>
                                <div className="bg-white p-3">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nulla, velit
                                        consequatur? Laboriosam consequuntur qui
                                        sed ipsam soluta culpa necessitatibus
                                        possimus nam pariatur, quasi,
                                        perspiciatis deserunt voluptatibus neque
                                        impedit. Quod, ab!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="reviews-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h3 id="review">Reviews</h3>
                                <div className="reviews-inner-wrapper">
                                    <div className="review-head d-flex justify-content-between align-items-end mb-3">
                                        <div className="">
                                            <h4 className="mb-2">
                                                Customer Reviews
                                            </h4>
                                            <div className="d-flex gap-10 align-items-center">
                                                <ReactStars
                                                    count={5}
                                                    size={24}
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
                                                <p className="mb-0">
                                                    Based on 2 Reviews
                                                </p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div className="">
                                                <a
                                                    href=""
                                                    className="text-dark text-decoration-underline"
                                                >
                                                    Write a Review
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <div className="reviews-form py-4">
                                        <h4>Write a Review</h4>
                                        <form
                                            action=""
                                            className="d-flex flex-column gap-15"
                                        >
                                            <div className="">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    cols="30"
                                                    rows="4"
                                                    placeholder="Comments"
                                                />
                                            </div>

                                            <div className="">
                                                <h4>Rating Stars</h4>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3.5}
                                                    edit={true}
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
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0">
                                                    Submit Review
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="reviews">
                                        <div className="review mb-3">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">
                                                    NavDeep
                                                </h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
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
                                            </div>

                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Debitis at itaque qui dolore
                                                suscipit quasi quos quae
                                                inventore commodi consectetur
                                                fuga ea impedit, reprehenderit
                                                et. Assumenda fuga eius deleniti
                                                aliquam.
                                            </p>
                                        </div>

                                        <div className="review mb-3">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">
                                                    NavDeep
                                                </h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
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
                                            </div>

                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Debitis at itaque qui dolore
                                                suscipit quasi quos quae
                                                inventore commodi consectetur
                                                fuga ea impedit, reprehenderit
                                                et. Assumenda fuga eius deleniti
                                                aliquam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="popular-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="section-heading">
                                    Our Popular Products
                                </h3>
                            </div>
                            <div className="row">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default SingleProduct;
