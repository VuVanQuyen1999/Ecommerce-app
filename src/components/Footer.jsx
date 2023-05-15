import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img
                                    src="/images/newsletter.png"
                                    alt="newsletter"
                                />
                                <h2 className="mb-0 text-white">
                                    Sign Up for Newsletter
                                </h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text"
                                    id="basic-addon2"
                                >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div className="">
                                <address className="text-white fs-6">
                                    HN: 86/18 Hoa Binh Street,
                                    <br />
                                    Yen Nghia, Ha Dong
                                    <br />
                                    PinCode: 12116
                                </address>

                                <a
                                    href="tel: +84 0374762336"
                                    className="mt-3 d-block -mb-2 text-white"
                                >
                                    (+84) 374 762 336
                                </a>

                                <a
                                    href="mailto: vuvanquyen07081999@gmail.com"
                                    className="mt-2 d-block mb-0 text-white"
                                >
                                    vuvanquyen07081999@gmail.com
                                </a>

                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a
                                        href="https://github.com/VuVanQuyen1999"
                                        className="text-white fs-5"
                                    >
                                        <BsLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/VuVanQuyen1999"
                                        className="text-white fs-5"
                                    >
                                        <BsInstagram />
                                    </a>
                                    <a
                                        href="https://github.com/VuVanQuyen1999"
                                        className="text-white fs-5"
                                    >
                                        <BsFacebook />
                                    </a>
                                    <a
                                        href="https://github.com/VuVanQuyen1999"
                                        className="text-white fs-5"
                                    >
                                        <BsGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link
                                    to="/privacy-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to="/refund-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Refund Policy
                                </Link>
                                <Link
                                    to="/shipping-policy"
                                    className="text-white py-2 mb-1"
                                >
                                    Shipping Policy
                                </Link>
                                <Link
                                    to="/term-conditions"
                                    className="text-white py-2 mb-1"
                                >
                                    Terms & Conditions
                                </Link>
                                <Link
                                    to="/blog"
                                    className="text-white py-2 mb-1"
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Faq
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-white py-2 mb-1"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Headphones
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()} Powered by
                                Developer Vu Van Quyen
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
