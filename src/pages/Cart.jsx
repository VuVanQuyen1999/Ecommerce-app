import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserCart,
  removeProductFromCart,
  updateProductFromCart,
} from "../features/user/userSlice";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const cartState = useSelector((state) => state?.auth?.userCart);

  const deleteProductFromCart = (id) => {
    dispatch(removeProductFromCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateProductFromCart({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
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
            {cartState &&
              cartState?.map((item) => {
                return (
                  <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item?.productId?.images[0]?.url}
                          alt="product"
                          className="img-fluid"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        <p>Size: M</p>
                        <p>
                          Color:{" "}
                          <span
                            style={{
                              padding: "0px 8px",
                              borderRadius: "25px",
                              backgroundColor: `${item?.color?.title}`,
                              marginLeft: "4px",
                            }}
                          ></span>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ {item?.productId?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div className="">
                        <input
                          type="number"
                          name=""
                          id={"quantity" + item?._id}
                          min={1}
                          max={10}
                          className="form-control"
                          value={item?.quantity}
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="">
                        <RiDeleteBinLine
                          className="delete-icon"
                          onClick={() => deleteProductFromCart(item?._id)}
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        $ <span>{item?.productId?.price * item?.quantity}</span>
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              {(totalAmount !== null || totalAmount !== 0) && (
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ {totalAmount}</h4>
                  <p>Texes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
