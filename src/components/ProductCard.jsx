import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import AppleWatch01 from "../images/ap-watch-01.jpg";
import Wishlist from "../images/wish.svg";
import Compare from "../images/prodcompare.svg";
import View from "../images/view.svg";
import AddCart from "../images/add-cart.svg";

const ProductCard = ({ grid }) => {
    let location = useLocation();
    const setHeightImg = () => {
        return `product-image img-h-${grid}`;
    };
    return (
        <div
            className={`${
                location.pathname == "/product" ? `gr-${grid}` : "col-3"
            }`}
        >
            <Link to="/product/:id" className="product-card position-relative">
                <div className={setHeightImg()}>
                    <img
                        src={AppleWatch02}
                        alt="product"
                        className="img-fluid h-100"
                    />
                    <img
                        src={AppleWatch01}
                        alt="product"
                        className="img-fluid h-100"
                    />
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={Wishlist} alt="wishlist" />
                        </button>
                    </div>
                </div>
                <div className="product-details">
                    <h6 className="brand">Apple</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3.5}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <p
                        className={`description ${
                            grid == 12 ? "d-bloc" : "d-none"
                        }`}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse dolores natus accusantium culpa vel architecto
                        numquam ex, eos explicabo dignissimos voluptate enim,
                        suscipit quibusdam? Fugiat id sunt dicta rem veniam.
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                            <img src={Compare} alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={View} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                            <img src={AddCart} alt="Add Cart" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
