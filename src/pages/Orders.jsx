import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserOrders } from "../features/user/userSlice";
const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderProduct?.orders
  );

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  console.log(orderState);
  return (
    <>
      <BreadCrumb title="My Orders"></BreadCrumb>
      <Container className="cart-wrapper home-wrapper-2 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount after Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div key={item?._id} className="col-12 mt-3">
                    <div className="row m-0 py-3 bg-warning">
                      <div className="col-3">
                        <p className="mb-0">{item?._id}</p>
                      </div>
                      <div className="col-3">
                        <p className="mb-0">$ {item?.totalPrice}</p>
                      </div>
                      <div className="col-3">
                        <p className="mb-0">
                          $ {item?.totalPriceAfterDiscount}
                        </p>
                      </div>
                      <div className="col-3">
                        <p className="mb-0">{item?.orderStatus}</p>
                      </div>
                    </div>
                    <div
                      className="col-12 px-2"
                      style={{ backgroundColor: "#242f3f", color: "white" }}
                    >
                      <div className="row py-3">
                        <div className="col-3">
                          <h6 className="mb-0">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="mb-0">Quantity</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="mb-0">Price</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="mb-0">Color</h6>
                        </div>
                      </div>
                      {item?.orderItems?.map((i, j) => {
                        return (
                          <div key={i?._id} className="row py-3">
                            <div className="col-3">
                              <p className="mb-0">{i?.product?.title}</p>
                            </div>
                            <div className="col-3">
                              <p className="mb-0">{i?.quantity}</p>
                            </div>
                            <div className="col-3">
                              <p className="mb-0">$ {i?.price}</p>
                            </div>
                            <div className="col-3">
                              <p className="mb-0">{i?.color?.title}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
