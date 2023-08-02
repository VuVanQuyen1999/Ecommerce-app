import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import { services } from "../utils/Data";
import { getProducts } from "../features/products/productSlice";

function Home() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getProducts());
  }, []);

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  return (
    <>
      <Meta title={"Home"} />
      {/* Special Sale */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="/images/main-banner.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4 className="">SUPERCHARGED FOR PROS.</h4>
                <h5 className="">Special Sale</h5>
                <p className="">
                  From $999.00 or $41.62/mo.
                  <br />
                  for 24 mo.Footnote*
                </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-01.jpg"
                  alt="catbanner banner 01"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="">best sale</h4>
                  <h5 className="">Laptops Max</h5>
                  <p className="">
                    From $1699.00 or
                    <br />
                    $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-03.jpg"
                  alt="catbanner banner 03"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="">new arrival</h4>
                  <h5 className="">Buy IPad Air</h5>
                  <p className="">
                    From $599 or
                    <br />
                    $49.91/mo. for 12 mno.*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-02.jpg"
                  alt="catbanner banner 02"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="">15% off</h4>
                  <h5 className="">Smartwatch 7</h5>
                  <p className="">
                    Shop the latest band
                    <br />
                    styles and colors.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-04.jpg"
                  alt="catbanner banner 04"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4 className="">free engraving</h4>
                  <h5 className="">AirPods Max</h5>
                  <p className="">
                    High-fidelity playback &
                    <br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Service */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((service, index) => {
                return (
                  <div key={index} className="d-flex align-items-center gap-15">
                    <img src={service.image} alt="services" className="" />
                    <div className="">
                      <h6 className="">{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="categories d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Camera</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="camera" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Smart TV</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/tv.jpg" alt="tv" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Smart Watches</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/watch.jpg" alt="watch" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Headphone</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/headphone.jpg" alt="headphone" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Camera</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="camera" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Smart TV</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/tv.jpg" alt="tv" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Smart Watches</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/watch.jpg" alt="watch" className="" />
            </div>

            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="">Headphone</h6>
                <p className="">10 Items</p>
              </div>
              <img src="/images/headphone.jpg" alt="headphone" className="" />
            </div>
          </div>
        </div>
      </Container>
      {/* Featured Collection */}
      <Container class1="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState?.map((item, index) => {
            if (item?.tags === "featured" && index < 4) {
              return <ProductCard data={item} />;
            }
          })}
        </div>
      </Container>
      {/* Famous Products */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Famous Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-01.jfif"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5>Pro. Beyond.</h5>
                <h6>Iphone 14 Pro</h6>
                <p>From $999 or $41.62/mo. for 24 mo. before trade in*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-02.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Lovable. Drawable. Magical. </h5>
                <h6 className="text-dark">Ipad</h6>
                <p className="text-dark">From $499 or $37.41/mo. for 12 mo.</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-03.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Wonderfull. </h5>
                <h6 className="text-dark">Iphone 14</h6>
                <p className="text-dark">From $799 or $32.29/mo. for 24 mo.</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="/images/famous-04.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Giving is in full bloom.</h5>
                <h6 className="text-dark">Mother's day</h6>
                <p className="text-dark">Shop the gift guild.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Special Products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState?.map((item, index) => {
            if (index < 4 && item?.tags === "special") {
              return <SpecialProduct data={item} key={item?._id} />;
            }
          })}
        </div>
      </Container>
      {/* Our Popular Products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            {productState?.map((item, index) => {
              if (index < 4 && item?.tags === "popular") {
                return <ProductCard data={item} key={item?._id} />;
              }
            })}
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="/images/brand-01.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-02.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-03.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-04.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-05.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-06.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-07.png" alt="brand" className="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-08.png" alt="brand" className="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      {/* Our Latest Blogs */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            {blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div key={item?._id} className="col-3">
                    <BlogCard data={item} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
