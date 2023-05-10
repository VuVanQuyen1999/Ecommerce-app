import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Home() {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
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
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="/images/service.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6 className="">Free Shipping</h6>
                                        <p className="mb-0">
                                            From all orders over $100
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="/images/service-02.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6 className="">
                                            Daily Surprise Offers
                                        </h6>
                                        <p className="mb-0">
                                            Save up to 25% off
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="/images/service-03.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6 className="">Support 24/7</h6>
                                        <p className="mb-0">
                                            Stop with an expert
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="/images/service-04.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6 className="">Affordable Prices</h6>
                                        <p className="mb-0">
                                            Get Factory direct price
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="/images/service-05.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6 className="">Secure Payments</h6>
                                        <p className="mb-0">
                                            100% Protected Payments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Camera</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/camera.jpg"
                                    alt="camera"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Smart TV</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/tv.jpg"
                                    alt="tv"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Smart Watches</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/watch.jpg"
                                    alt="watch"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Headphone</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/headphone.jpg"
                                    alt="headphone"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Camera</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/camera.jpg"
                                    alt="camera"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Smart TV</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/tv.jpg"
                                    alt="tv"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Smart Watches</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/watch.jpg"
                                    alt="watch"
                                    className=""
                                />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6 className="">Headphone</h6>
                                    <p className="">10 Items</p>
                                </div>
                                <img
                                    src="/images/headphone.jpg"
                                    alt="headphone"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marque-wrapper py-5"></section>
        </>
    );
}

export default Home;
