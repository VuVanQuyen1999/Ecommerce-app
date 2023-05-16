import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import Container from "../components/Container";

const CheckOut = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="check-out-left-data">
                            <h3 className="website-name">DevQuyen</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className=" text-dark" to="/cart">
                                            Cart
                                        </Link>
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Information
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details">
                                Vu Van Quyen (vuvanquyen07081999@gmail.com)
                            </p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form
                                action=""
                                className="d-flex flex-wrap gap-15 justify-content-between"
                            >
                                <div className="w-100">
                                    <select
                                        name=""
                                        className="form-control form-select"
                                    >
                                        <option value="" selected disabled>
                                            Select Country
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Apartment, Suite, etc"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <select
                                        name=""
                                        className="form-control form-select"
                                    >
                                        <option value="" selected disabled>
                                            Select State
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Zip code"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack className="me-2 mb-1" />
                                            Return to Cart
                                        </Link>
                                        <Link to="/cart" className="button">
                                            Continue to Shipping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex mb-2 gap-10 align-items-center">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span
                                            style={{
                                                top: "-12px",
                                                right: "-5px",
                                                padding: "5px 9px 5px 8px",
                                            }}
                                            className="badge bg-secondary text-white rounded-circle position-absolute"
                                        >
                                            1
                                        </span>
                                        <img
                                            src={AppleWatch02}
                                            alt="watch"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="">
                                        <h5 className="title">Watch</h5>
                                        <p>M / #131921</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5>$100.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Subtotal</p>
                                <p className="total-price">$100.00</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Sipping</p>
                                <p className="mb-0 total-price">$100.00</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">
                                <span>USD</span> $100.00
                            </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CheckOut;
