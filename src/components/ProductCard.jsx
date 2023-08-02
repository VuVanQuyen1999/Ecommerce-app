import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router-dom";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import AppleWatch01 from "../images/ap-watch-01.jpg";
import Wishlist from "../images/wish.svg";
import Compare from "../images/prodcompare.svg";
import View from "../images/view.svg";
import AddCart from "../images/add-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../features/products/productSlice";

const ProductCard = ({ grid, data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setHeightImg = () => {
    return `product-image img-h-${grid}`;
  };

  const clickIconWishList = (id) => {
    dispatch(addToWishList(id));
  };
  return (
    <>
      <div
        key={data?._id}
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-card position-relative">
          <div className={setHeightImg()}>
            <img
              src={data?.images[0].url ? data?.images[0].url : AppleWatch02}
              alt="product"
              className="img-fluid h-100"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/product/:id");
              }}
            />
            <img
              src={AppleWatch01}
              alt="product"
              className="img-fluid h-100"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/product/" + data?._id);
              }}
            />
            <div className="wishlist-icon position-absolute">
              <button
                className="border-0 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  clickIconWishList(data?._id);
                }}
              >
                <img src={Wishlist} alt="wishlist" />
              </button>
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">{data?.brand}</h6>
            <h5
              className="product-title"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/product/" + data?._id);
              }}
            >
              {data?.title}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={data?.totalrating}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p
              className={`description ${grid == 12 ? "d-bloc" : "d-none"}`}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
            <p className="price">$ {data?.price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={Compare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img
                  src={View}
                  alt="view"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/product/" + data?._id);
                  }}
                />
              </button>
              <button className="border-0 bg-transparent">
                <img src={AddCart} alt="Add Cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
