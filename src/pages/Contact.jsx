import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

function Contact() {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title={"Contact Us"} />
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.1763408742813!2d105.7168985768553!3d20.945432390632295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452693bb06fe9%3A0xbf8150ee9c1f30f3!2zODYgxJDGsOG7nW5nIEjDsmEgQsOsbmgsIFnDqm4gTmdoxKlhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684030802572!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="map"
                            ></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div className="">
                                    <h3 className="contact-title">
                                        Contact Us
                                    </h3>
                                    <form
                                        action=""
                                        className="d-flex flex-column gap-15"
                                    >
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Mobile Number"
                                            />
                                        </div>
                                        <div className="">
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            />
                                        </div>
                                        <div className="">
                                            <button className="button border-0">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="">
                                    <h3 className="contact-title">
                                        Get in touch with us
                                    </h3>
                                    <div className="">
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">
                                                    86/18 Hoa Binh Street, Yen
                                                    Nghia, Ha Dong, Ha Noi
                                                </address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiPhoneCall className="fs-5" />
                                                <a href="tel: 0374762336">
                                                    +84 374 762 336
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineMail className="fs-5" />
                                                <a href="mailto: vuvanquyen07081999@gmail.com">
                                                    vuvanquyen07081999@gmail.com
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiInfoCircle className="fs-5" />
                                                <p className="mb-0">
                                                    Monday - Friday 8AM - 6PM
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
