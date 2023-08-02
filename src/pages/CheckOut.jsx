import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import AppleWatch02 from "../images/ap-watch-02.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { string, number, email, object } from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { createOrder, emptyCart, resetState } from "../features/user/userSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const cartState = useSelector((state) => state?.auth?.userCart);
  const authState = useSelector((state) => state?.auth);
  const [shippingInfo, setShippingInfo] = useState(null);
  const navigate = useNavigate();
  // const [paymentInfo, setPaymentInfo] = useState({
  //   razorPayOrderId: "",
  //   razorPaymentId: "",
  // });
  const [cartProductSate, setCartProductState] = useState([]);

  let Schema = object({
    firstName: string().required("First Name is Required"),
    lastName: string().required("Last Name is Required"),
    address: string().required("Address is Required"),
    city: string().required("City is Required"),
    state: string().required("State is Required"),
    other: string(),
    pinCode: number().required("Pin Code is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      other: "",
      pinCode: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      localStorage.setItem("address", JSON.stringify(values));
      setShippingInfo(values);
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  useEffect(() => {
    if (
      authState?.orderedProduct !== null &&
      authState?.orderedProduct?.isSuccess === true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index]?.productId?._id,
        quantity: cartState[index]?.quantity,
        color: cartState[index]?.color?._id,
        price: cartState[index]?.price,
      });
    }
    setCartProductState(items);
  }, []);

  const checkOutHandler = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Razorpay SDK failed to load");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout",
      { amount: totalAmount + 5 },
      config
    );
    if (!result) {
      alert("Something Went Wrong");
      return;
    }
    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_Kk4V7tPQy0zwKC", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Vu Van Quyen",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/order/paymentVerification",
          data,
          config
        );

        // setPaymentInfo({
        //   razorPayOrderId: result?.razorpay_order_id,
        //   razorPaymentId: result?.razorpay_payment_id,
        // });

        // setPaymentInfo(result?.data);

        // setTimeout(() => {
        //   dispatch(
        //     createOrder({
        //       totalPrice: totalAmount,
        //       totalPriceAfterDiscount: totalAmount,
        //       orderItems: cartProductSate,
        //       paymentInfo: paymentInfo,
        //       shippingInfo: shippingInfo,
        //     })
        //   );
        // }, 1500);

        dispatch(
          createOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductSate,
            paymentInfo: result?.data,
            shippingInfo: JSON.parse(localStorage.getItem("address")),
          })
        );

        dispatch(emptyCart());

        localStorage.removeItem("address");

        dispatch(resetState());
      },
      prefill: {
        name: "Dev Quyen",
        email: "vuvanquyen07081999@gmail.com",
        contact: "+84374762336",
      },
      notes: {
        address: "Ha Dong, Ha Noi",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
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
                onSubmit={formik.handleSubmit}
              >
                <div className="w-100">
                  <select
                    defaultValue={"DEFAULT"}
                    name=""
                    className="form-control form-select"
                  >
                    <option value="DEFAULT" disabled>
                      Select Country
                    </option>
                    <option value="Viet Nam">Viet Nam</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error mt-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error mt-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                </div>
                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="error mt-2">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error mt-2">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    defaultValue={"DEFAULT"}
                    name="state"
                    className="form-control form-select"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  >
                    <option value="DEFAULT">Select State</option>
                    <option value="Haryana">Haryana</option>
                  </select>
                  <div className="error mt-2">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="form-control"
                    name="pinCode"
                    value={formik.values.pinCode}
                    onChange={formik.handleChange("pinCode")}
                    onBlur={formik.handleBlur("pinCode")}
                  />
                  <div className="error mt-2">
                    {formik.touched.pinCode && formik.errors.pinCode}
                  </div>
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
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item) => {
                  return (
                    <div
                      key={item?._id}
                      className="d-flex mb-2 gap-10 align-items-center"
                    >
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
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0]?.url}
                            alt="product"
                            className="img-fluid"
                          />
                        </div>
                        <div className="">
                          <h5
                            className="title"
                            style={{
                              maxWidth: "250px",
                              WebkitLineClamp: 2,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item?.productId?.title}
                          </h5>
                          <p>
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
                      <div className="flex-grow-1">
                        <h5>$ {item?.price * item?.quantity}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  $ {totalAmount !== null ? totalAmount : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Sipping</p>
                <p className="mb-0 total-price">$ 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                <span>USD</span> ${" "}
                {totalAmount !== null ? totalAmount + 5 : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
