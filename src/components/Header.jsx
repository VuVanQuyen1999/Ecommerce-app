import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Compare from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import User from "../images/user.svg";
import Cart from "../images/cart.svg";
import Menu from "../images/menu.svg";
function Header() {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className=" text-white mb-0">
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:{" "}
                                <a
                                    className="text-white"
                                    href="tel:+84 374762336"
                                >
                                    (+84) 374 762 336 - (+84) 983 765 322
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to="/" className="text-white">
                                    Dev Quyen
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-3"
                                    id="basic-addon2"
                                >
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link
                                        to="/compare-product"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={Compare} alt="compare" />
                                        <p className="mb-0">
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={Wishlist} alt="wishlist" />
                                        <p className="mb-0">
                                            Favorite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="login"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={User} alt="user" />
                                        <p className="mb-0">
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={Cart} alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                1
                                            </span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="roe">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={Menu} alt="menu" />
                                            <span className="me-5 d-inline-block">
                                                Shop Category
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to=""
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to=""
                                                >
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to=""
                                                >
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">
                                            Our Store
                                        </NavLink>
                                        <NavLink to="/blog">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
