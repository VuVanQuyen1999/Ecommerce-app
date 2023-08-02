import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserWishlist } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWishlist());
    console.log("run");
  }, []);
  const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist);
  const removeFromWishList = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getUserWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.length === 0 && (
            <div className="text-center fs-3 p-3">
              There Are No Products In Wishlist
            </div>
          )}
          {wishlistState?.map((item) => {
            return (
              <div key={item?._id} className="col-3">
                <div className="wishlist-card position-relative">
                  <img
                    src="/images/cross.svg"
                    alt="cross"
                    className="cross position-absolute"
                    onClick={() => {
                      removeFromWishList(item?._id);
                    }}
                  />
                  <div className="wishlist-card-image">
                    <img src={item?.images[0].url} alt="watch" />
                  </div>
                  <div className="py-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price mb-2">$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
