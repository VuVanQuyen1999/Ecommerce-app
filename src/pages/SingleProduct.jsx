import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct, rateProduct } from "../features/products/productSlice";
import { addToCart, getUserCart } from "../features/user/userSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    }
    if (comment === null) {
      toast.error("Please Write Review About the Product");
      return false;
    } else {
      dispatch(
        rateProduct({ star: star, comment: comment, prodId: productId })
      );
      toast.success("Thank you for rating!!");
    }
  };

  useEffect(() => {
    dispatch(getProduct(productId));
    dispatch(getUserCart());
  }, [productId]);

  const productState = useSelector((state) => state?.product?.getProduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.userCart);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (productId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const props = {
    width: 594,
    height: 500,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://i.ytimg.com/vi/Cy1adxM-CjM/maxresdefault.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  const uploadCart = () => {
    if (color === null) {
      toast.info("Please chose color");
      return;
    }
    const cartData = {
      productId: productState?._id,
      quantity: quantity,
      price: productState?.price,
      color: color,
    };
    dispatch(addToCart(cartData));
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      if (element?.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productsState]);

  const rateNumber = +productState?.totalrating;

  console.log(rateNumber);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div className="">
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-image d-flex flex-wrap gap-15">
              {productState?.images?.map((item) => {
                return (
                  <div key={item?.public_id} className="">
                    <img src={item?.url} className="img-fluid" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>

              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={rateNumber}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">
                    ({productState?.rattings?.length} Reviews)
                  </p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>

              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">
                    {productState?.quantity > productState?.solid
                      ? "In Stock"
                      : "Out Of Stock"}
                  </p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
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

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <Color
                        setColor={setColor}
                        listColor={productState?.color}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex gap-15 align-items-center mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          name=""
                          style={{ width: "100px" }}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div className="d-flex align-items-center gap-30 ms-5">
                    {alreadyAdded ? (
                      <button
                        className="button border-0"
                        type="submit"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        className="button border-0"
                        type="submit"
                        onClick={() => uploadCart()}
                      >
                        ADD to Cart
                      </button>
                    )}
                    <button className="signup button border-0">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="">
                    <a href="">
                      <TbGitCompare className="fs-4 me-1" /> Add to Compare
                    </a>
                  </div>
                  <div className="">
                    <a href="">
                      <AiOutlineHeart className="fs-4 me-1" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders!
                    <br />
                    We ship all US domestic orders within{" "}
                    <b>5-10 bushiness days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Copy Product Link :</h3>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="reviews-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="reviews-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end mb-3">
                  <div className="">
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={rateNumber}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">
                        Based on {productState?.rattings?.length} Reviews
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
                  <div action="" className="d-flex flex-column gap-15">
                    <div className="">
                      <textarea
                        type="text"
                        className="form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
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
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        onChange={(e) => {
                          setStar(e);
                        }}
                      />
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        className="button border-0"
                        onClick={() => {
                          addRatingToProduct();
                        }}
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>

                <div className="reviews">
                  {productState &&
                    productState?.rattings?.map((item, index) => {
                      return (
                        <div key={index} className="review mb-3">
                          <div className="d-flex gap-10 align-items-center">
                            <h6 className="mb-0">NavDeep</h6>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.star}
                              edit={false}
                              isHalf={true}
                              emptyIcon={<i className="far fa-star"></i>}
                              halfIcon={<i className="fa fa-star-half-alt"></i>}
                              fullIcon={<i className="fa fa-star"></i>}
                              activeColor="#ffd700"
                            />
                          </div>

                          <p className="mt-3">{item?.comment}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              {popularProduct?.map((item, index) => {
                return <ProductCard data={item} key={item?._id} />;
              })}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default SingleProduct;
