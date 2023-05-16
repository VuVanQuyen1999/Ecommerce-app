import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img
                                        src={AppleWatch02}
                                        alt="product"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="w-75">
                                    <p>
                                        Kids headphones bulk 10 pack multi
                                        colored for students
                                    </p>
                                    <p>Size: M</p>
                                    <p>Color: #fc353c</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$100.00</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div className="">
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        min={1}
                                        max={10}
                                        className="form-control"
                                    />
                                </div>
                                <div className="">
                                    <RiDeleteBinLine className="delete-icon" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$100.00</h5>
                            </div>
                        </div>

                        <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img
                                        src={AppleWatch02}
                                        alt="product"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="w-75">
                                    <p>
                                        Kids headphones bulk 10 pack multi
                                        colored for students
                                    </p>
                                    <p>Size: M</p>
                                    <p>Color: #fc353c</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$100.00</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div className="">
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        min={1}
                                        max={10}
                                        className="form-control"
                                    />
                                </div>
                                <div className="">
                                    <RiDeleteBinLine className="delete-icon" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">
                                Continue To Shopping
                            </Link>
                            <div className="d-flex flex-column align-items-end">
                                <h4>SubTotal: $100.00</h4>
                                <p>Texes and shipping calculated at checkout</p>
                                <Link to="/checkout" className="button">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
